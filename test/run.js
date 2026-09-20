'use strict';

const assert = require('assert');
const { execFileSync } = require('child_process');
const path = require('path');

const pkg = require('../package.json');
const api = require('../src');
const {
  stages,
  registry,
  pipeline,
  createRegistry,
  createPipeline,
  defineStage,
  errors,
} = api;

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    passed += 1;
  } catch (err) {
    failed += 1;
    console.error('FAIL: ' + name + ' - ' + err.message);
  }
}

// --- package ------------------------------------------------------------

test('package name is stagekit-js', () => {
  assert.strictEqual(pkg.name, 'stagekit-js');
});

test('bin exposes the stagekit command', () => {
  assert.strictEqual(pkg.bin.stagekit, 'bin/stagekit.js');
});

test('main entry exists', () => {
  assert.ok(pkg.main);
});

// --- catalog ------------------------------------------------------------

test('catalog has 978 stages', () => {
  assert.strictEqual(stages.length, 978);
});

test('every stage id is unique', () => {
  assert.strictEqual(new Set(stages.map((s) => s.id)).size, stages.length);
});

test('every stage name is unique', () => {
  assert.strictEqual(new Set(stages.map((s) => s.name)).size, stages.length);
});

test('every stage behaviour is unique', () => {
  assert.strictEqual(new Set(stages.map((s) => s.run.toString())).size, stages.length);
});

test('every stage id matches mod-NNNN', () => {
  for (const stage of stages) {
    assert.ok(/^mod-[0-9]{4}$/.test(stage.id), stage.id);
  }
});

test('every stage runs and returns a string', () => {
  for (const stage of stages) {
    const out = stage.run('Hello World 123', {});
    assert.strictEqual(typeof out, 'string', stage.id + ' returned ' + typeof out);
  }
});

test('stages are frozen', () => {
  for (const stage of stages) {
    assert.ok(Object.isFrozen(stage), stage.id + ' not frozen');
  }
});

// --- registry -----------------------------------------------------------

test('registry size matches catalog', () => {
  assert.strictEqual(registry.size, stages.length);
});

test('registry.has / get work', () => {
  assert.ok(registry.has('mod-0001'));
  assert.strictEqual(registry.get('mod-0001').id, 'mod-0001');
});

test('registry.get throws on unknown id', () => {
  assert.throws(() => registry.get('mod-9999'), errors.StageError);
});

test('registry.ids matches size', () => {
  assert.strictEqual(registry.ids().length, registry.size);
});

test('registry.findByName is exact', () => {
  assert.strictEqual(registry.findByName('Uppercase').length, 1);
  assert.strictEqual(registry.findByName('uppercase').length, 0);
  assert.strictEqual(registry.findByName('Replace \"a\" with \"b\"').length, 1);
});

test('registry.search matches across fields', () => {
  assert.ok(registry.search('base64').length >= 2);
});

test('registry.nextId returns a free id', () => {
  const next = registry.nextId();
  assert.ok(/^mod-[0-9]{4}$/.test(next));
  assert.strictEqual(registry.has(next), false);
});

test('registry.findByPrefix slices the catalog', () => {
  const first10 = registry.findByPrefix('mod-000');
  assert.ok(first10.length >= 1);
  for (const s of first10) assert.ok(s.id.startsWith('mod-000'));
});

// --- defineStage --------------------------------------------------------

test('defineStage freezes and validates', () => {
  const stage = defineStage({
    id: 'mod-9001',
    name: 'Test',
    description: 'x',
    run: (v) => String(v),
  });
  assert.ok(Object.isFrozen(stage));
});

test('defineStage rejects bad ids', () => {
  for (const id of ['x', 'mod-1', 'mod-12345', 'MOD-0001']) {
    assert.throws(() => defineStage({ id, name: 'n', run: () => '' }), errors.StageError);
  }
});

test('defineStage rejects missing run', () => {
  assert.throws(() => defineStage({ id: 'mod-9002', name: 'n' }), errors.StageError);
});

test('defineStage rejects empty name', () => {
  assert.throws(
    () => defineStage({ id: 'mod-9003', name: '', run: () => '' }),
    errors.StageError
  );
});

// --- createRegistry -----------------------------------------------------

test('createRegistry rejects duplicates', () => {
  const a = defineStage({ id: 'mod-9004', name: 'a', run: (v) => String(v) });
  assert.throws(() => createRegistry([a, a]), errors.StageError);
});

// --- pipeline -----------------------------------------------------------

test('createPipeline runs stages in order', () => {
  const a = defineStage({ id: 'mod-9005', name: 'a', run: (v) => v + 'A' });
  const b = defineStage({ id: 'mod-9006', name: 'b', run: (v) => v + 'B' });
  const pipe = createPipeline([a, b]);
  assert.strictEqual(pipe('x'), 'xAB');
});

test('pipeline respects the limit option', () => {
  const a = defineStage({ id: 'mod-9007', name: 'a', run: (v) => v + 'A' });
  const b = defineStage({ id: 'mod-9008', name: 'b', run: (v) => v + 'B' });
  const pipe = createPipeline([a, b]);
  assert.strictEqual(pipe('x', { limit: 1 }), 'xA');
  assert.strictEqual(pipe('x', { limit: 0 }), 'x');
  assert.strictEqual(pipe('x', { limit: 99 }), 'xAB');
});

test('pipeline forwards options to stages', () => {
  const a = defineStage({
    id: 'mod-9009',
    name: 'a',
    run: (v, opts) => v + (opts.suffix || ''),
  });
  assert.strictEqual(createPipeline([a])('x', { suffix: '!' }), 'x!');
});

test('default pipeline runs the whole catalog', () => {
  const out = pipeline('Hello');
  assert.strictEqual(typeof out, 'string');
});

// --- errors -------------------------------------------------------------

test('StageError extends Error', () => {
  assert.ok(new errors.StageError('x') instanceof Error);
});

test('PipelineError extends StageError', () => {
  assert.ok(new errors.PipelineError('x') instanceof errors.StageError);
});

// --- real behaviours ----------------------------------------------------

function run(name, input) {
  const hits = registry.findByName(name);
  assert.strictEqual(hits.length, 1, 'expected one "' + name + '"');
  return hits[0].run(input);
}

test('Uppercase works', () => {
  assert.strictEqual(run('Uppercase', 'abc'), 'ABC');
});

test('Base64 encode/decode round-trips', () => {
  const enc = run('Base64 encode', 'hello');
  assert.strictEqual(enc, 'aGVsbG8=');
  assert.strictEqual(run('Base64 decode', enc), 'hello');
});

test('Hex encode/decode round-trips', () => {
  const enc = run('Hex encode', 'hi');
  assert.strictEqual(enc, '6869');
  assert.strictEqual(run('Hex decode', enc), 'hi');
});

test('URI encode/decode round-trips', () => {
  const enc = run('URI encode', 'a b');
  assert.strictEqual(enc, 'a%20b');
  assert.strictEqual(run('URI decode', enc), 'a b');
});

test('HTML escape/unescape round-trips', () => {
  const enc = run('HTML escape', '<a>&');
  assert.strictEqual(enc, '&lt;a&gt;&amp;');
  assert.strictEqual(run('HTML unescape', enc), '<a>&');
});

test('Caesar +1 shifts letters', () => {
  assert.strictEqual(run('Caesar shift +1', 'abc'), 'bcd');
});

test('Reverse characters works', () => {
  assert.strictEqual(run('Reverse characters', 'abc'), 'cba');
});

test('Slug with - works', () => {
  assert.strictEqual(run('Slug with "-"', 'Hello World'), 'hello-world');
});

test('stages never mutate their input string', () => {
  const input = 'Hello';
  for (const stage of stages) stage.run(input, {});
  assert.strictEqual(input, 'Hello');
});

// --- CLI (spawns the real binary) ---------------------------------------

const BIN = path.join(__dirname, '..', 'bin', 'stagekit.js');

function cli(args, input) {
  return execFileSync('node', [BIN].concat(args), {
    input: input || '',
    encoding: 'utf8',
  });
}

test('cli: help exits 0 and prints usage', () => {
  const out = cli(['help']);
  assert.ok(out.includes('Usage:'));
});

test('cli: version prints package version', () => {
  assert.strictEqual(cli(['version']).trim(), pkg.version);
});

test('cli: count matches catalog', () => {
  assert.strictEqual(cli(['count']).trim(), String(stages.length));
});

test('cli: list --limit N', () => {
  const out = cli(['list', '--limit', '3']);
  assert.ok(out.includes('3 of ' + stages.length + ' stages'));
});

test('cli: search finds base64', () => {
  assert.ok(cli(['search', 'base64']).includes('Base64 encode'));
});

test('cli: show prints id and run', () => {
  const out = cli(['show', 'mod-0001']);
  assert.ok(out.includes('mod-0001'));
  assert.ok(out.includes('run'));
});

test('cli: run with --text', () => {
  assert.strictEqual(cli(['run', 'Uppercase', '--text', 'abc']).trim(), 'ABC');
});

test('cli: run reads stdin', () => {
  assert.strictEqual(cli(['run', 'Uppercase'], 'abc').trim(), 'ABC');
});

test('cli: run chains two stages', () => {
  const out = cli(['run', 'Slug with "-"', 'Uppercase', '--text', 'Hello World']);
  assert.strictEqual(out.trim(), 'HELLO-WORLD');
});

test('cli: run --limit stops early', () => {
  const out = cli(['run', 'Uppercase', 'Reverse characters', '--limit', '1', '--text', 'abc']);
  assert.strictEqual(out.trim(), 'ABC');
});

test('cli: unknown stage exits non-zero', () => {
  assert.throws(() => cli(['run', 'definitely-not-a-stage', '--text', 'x']));
});

test('cli: unknown command exits non-zero', () => {
  assert.throws(() => cli(['frobnicate']));
});

test('cli: stdout stays clean when a name is ambiguous', () => {
  const out = cli(['run', 'Replace "a" with "b"', '--text', 'aaa']);
  assert.strictEqual(out.trim(), 'bbb');
});

console.log('passed: ' + passed + ', failed: ' + failed);
if (failed > 0) {
  process.exit(1);
}
