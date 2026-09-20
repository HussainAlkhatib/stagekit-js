'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MODULES = path.join(ROOT, 'src', 'modules');
const ID_PATTERN = /^mod-[0-9]{4}\.js$/;

const files = fs.readdirSync(MODULES).filter((f) => f !== 'index.js');
const problems = [];

for (const file of files) {
  if (!ID_PATTERN.test(file)) {
    problems.push('bad module filename: ' + file);
    continue;
  }
  const source = fs.readFileSync(path.join(MODULES, file), 'utf8');
  if (!source.includes('defineStage(')) {
    problems.push('missing defineStage in ' + file);
  }
  if (!source.startsWith("'use strict'")) {
    problems.push('missing use strict in ' + file);
  }
}

const barrel = fs.readFileSync(path.join(MODULES, 'index.js'), 'utf8');
if (!barrel.startsWith("'use strict'")) {
  problems.push('barrel missing use strict');
}

const stages = require(path.join(MODULES));

if (stages.length !== files.length) {
  problems.push('barrel exports ' + stages.length + ' stages but ' + files.length + ' files exist');
}

const ids = new Set();
const names = new Set();
const bodies = new Set();

for (const stage of stages) {
  if (ids.has(stage.id)) problems.push('duplicate id: ' + stage.id);
  ids.add(stage.id);

  if (names.has(stage.name)) problems.push('duplicate name: ' + stage.name);
  names.add(stage.name);

  const body = stage.run.toString();
  if (bodies.has(body)) problems.push('duplicate run body in: ' + stage.id + ' (' + stage.name + ')');
  bodies.add(body);

  let output;
  try {
    output = stage.run('Hello World 123', {});
  } catch (err) {
    problems.push('stage ' + stage.id + ' threw: ' + err.message);
    continue;
  }
  if (typeof output !== 'string') {
    problems.push('stage ' + stage.id + ' returned ' + typeof output + ', expected string');
  }
}

if (problems.length > 0) {
  for (const p of problems) console.error('LINT: ' + p);
  process.exit(1);
}

console.log(
  'lint ok: ' + files.length + ' modules (' +
    names.size + ' unique names, ' + bodies.size + ' unique behaviours)'
);
