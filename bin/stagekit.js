#!/usr/bin/env node
'use strict';

const { registry, createPipeline } = require('../src');

const VERSION = require('../package.json').version;

const USAGE = [
  'stagekit - run string-transformation stages from the terminal',
  '',
  'Usage:',
  '  stagekit list [--limit N]',
  '  stagekit search <query> [--json]',
  '  stagekit show <id>',
  '  stagekit explain <id|name>',
  '  stagekit compose <stages...>',
  '  stagekit count',
  '  stagekit run [stages...] [--text <string>] [--limit N] [--pick N]',
  '              [--on-error throw|skip|stop] [--trace]',
  '',
  'A stage may be given as an id (mod-0042) or a name fragment (slug).',
  'When a fragment is ambiguous the first match is used and a warning is',
  'printed; pass --pick N to choose the Nth match instead.',
  'When --text is omitted, input is read from stdin.',
  '',
  'Examples:',
  '  echo "Hello World" | stagekit run slug',
  '  stagekit run mod-0055 mod-0015 --text "  Hello   World  "',
  '  stagekit run slug --trace --text "Hello World"',
  '  stagekit explain caesar',
  '  stagekit compose trim lowercase slug > pipeline.json',
  '  stagekit search caesar --json',
].join('\n');

function fail(message) {
  process.stderr.write('stagekit: ' + message + '\n');
  process.exit(1);
}

function parseFlags(argv) {
  const flags = { text: null, limit: null, pick: null, json: false, trace: false, onError: null };
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--text' || arg === '-t') {
      flags.text = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--text=')) {
      flags.text = arg.slice('--text='.length);
    } else if (arg === '--limit' || arg === '-n') {
      flags.limit = Number(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--limit=')) {
      flags.limit = Number(arg.slice('--limit='.length));
    } else if (arg === '--pick' || arg === '-p') {
      flags.pick = Number(argv[i + 1]);
      i += 1;
    } else if (arg.startsWith('--pick=')) {
      flags.pick = Number(arg.slice('--pick='.length));
    } else if (arg === '--json') {
      flags.json = true;
    } else if (arg === '--trace') {
      flags.trace = true;
    } else if (arg === '--on-error') {
      flags.onError = argv[i + 1];
      i += 1;
    } else if (arg.startsWith('--on-error=')) {
      flags.onError = arg.slice('--on-error='.length);
    } else {
      positional.push(arg);
    }
  }

  return { flags, positional };
}

function readStdin() {
  return new Promise((resolve) => {
    let data = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      data += chunk;
    });
    process.stdin.on('end', () => resolve(data.replace(/\n$/, '')));
  });
}

function resolveStage(token, pick) {
  let candidates;

  if (registry.has(token)) {
    return registry.get(token);
  }

  candidates = registry.findByName(token);
  if (candidates.length === 0) {
    candidates = registry.search(token);
  }

  if (candidates.length === 0) {
    fail('no stage matches "' + token + '"');
  }

  if (candidates.length > 1) {
    const ids = candidates.map((s) => s.id);
    if (pick != null) {
      if (!Number.isInteger(pick) || pick < 1 || pick > candidates.length) {
        fail('--pick ' + pick + ' is out of range 1..' + candidates.length + ' for "' + token + '"');
      }
      return candidates[pick - 1];
    }
    process.stderr.write(
      'stagekit: "' + token + '" matches ' + candidates.length + ' stages (' +
        ids.slice(0, 6).join(', ') + (ids.length > 6 ? ', ...' : '') +
        '); using ' + ids[0] + '. Pass --pick N to choose another.\n'
    );
  }

  return candidates[0];
}

function pad(text, width) {
  const s = String(text);
  return s.length >= width ? s : s + ' '.repeat(width - s.length);
}

function cmdList(flags) {
  const all = registry.list();
  const limit = flags.limit == null ? all.length : flags.limit;
  const shown = all.slice(0, limit);

  for (const stage of shown) {
    process.stdout.write(pad(stage.id, 10) + pad(stage.name, 28) + stage.description + '\n');
  }
  process.stdout.write('\n' + shown.length + ' of ' + all.length + ' stages\n');
}

function cmdSearch(query, flags) {
  if (!query) {
    fail('search needs a query');
  }
  const hits = registry.search(query);

  if (flags && flags.json) {
    const payload = hits.map((s) => ({ id: s.id, name: s.name, description: s.description }));
    process.stdout.write(JSON.stringify(payload, null, 2) + '\n');
    return;
  }

  if (hits.length === 0) {
    process.stdout.write('no matches for "' + query + '"\n');
    return;
  }
  for (const stage of hits) {
    process.stdout.write(pad(stage.id, 10) + pad(stage.name, 28) + stage.description + '\n');
  }
  process.stdout.write('\n' + hits.length + ' match(es)\n');
}

function cmdExplain(token, pick) {
  if (!token) {
    fail('explain needs an id or name');
  }
  const stage = resolveStage(token, pick);
  process.stdout.write('id          ' + stage.id + '\n');
  process.stdout.write('name        ' + stage.name + '\n');
  process.stdout.write('description ' + stage.description + '\n');
  process.stdout.write('\nrun\n' + stage.run.toString() + '\n');
}

function cmdCompose(positional, flags) {
  if (positional.length === 0) {
    fail('compose needs at least one stage');
  }
  const stages = positional.map((token) => resolveStage(token, flags.pick));
  const spec = {
    version: 1,
    stages: stages.map((s) => ({ id: s.id, name: s.name })),
  };
  process.stdout.write(JSON.stringify(spec, null, 2) + '\n');
}

function cmdShow(id) {
  if (!id) {
    fail('show needs an id');
  }
  const stage = registry.get(id);
  process.stdout.write('id          ' + stage.id + '\n');
  process.stdout.write('name        ' + stage.name + '\n');
  process.stdout.write('description ' + stage.description + '\n');
  process.stdout.write('run         ' + stage.run.toString() + '\n');
}

function cmdCount() {
  process.stdout.write(String(registry.size) + '\n');
}

async function cmdRun(positional, flags) {
  if (positional.length === 0) {
    fail('run needs at least one stage');
  }

  const stages = positional.map((token) => resolveStage(token, flags.pick));
  const pipe = createPipeline(stages);

  let input = flags.text;
  if (input == null) {
    if (process.stdin.isTTY) {
      fail('no --text given and stdin is a terminal');
    }
    input = await readStdin();
  }

  const options = {};
  if (flags.limit != null) {
    options.limit = flags.limit;
  }
  if (flags.onError != null) {
    options.onError = flags.onError;
  }
  if (flags.trace) {
    options.trace = true;
  }

  const result = pipe(input, options);
  process.stdout.write(result + '\n');

  if (flags.trace && pipe.trace) {
    process.stderr.write('\ntrace:\n');
    for (const step of pipe.trace) {
      const label = step.id + '  ' + step.name;
      if (step.error) {
        process.stderr.write('  ' + pad(label, 40) + 'ERROR: ' + step.error.message + '\n');
      } else {
        process.stderr.write('  ' + pad(label, 40) + JSON.stringify(step.output) + '  (' + step.ms + 'ms)\n');
      }
    }
  }
}

async function main() {
  const argv = process.argv.slice(2);
  const command = argv[0];

  if (!command || command === 'help' || command === '--help' || command === '-h') {
    process.stdout.write(USAGE + '\n');
    return;
  }
  if (command === 'version' || command === '--version' || command === '-v') {
    process.stdout.write(VERSION + '\n');
    return;
  }

  const { flags, positional } = parseFlags(argv.slice(1));

  switch (command) {
    case 'list':
      cmdList(flags);
      break;
    case 'search':
      cmdSearch(positional[0], flags);
      break;
    case 'show':
      cmdShow(positional[0]);
      break;
    case 'explain':
      cmdExplain(positional[0], flags.pick);
      break;
    case 'compose':
      cmdCompose(positional, flags);
      break;
    case 'count':
      cmdCount();
      break;
    case 'run':
      await cmdRun(positional, flags);
      break;
    default:
      fail('unknown command: ' + command + ' (try "stagekit help")');
  }
}

main().catch((err) => fail(err.message));
