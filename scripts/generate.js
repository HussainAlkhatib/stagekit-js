'use strict';

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'src', 'modules');
const DOCS = path.join(__dirname, '..', 'docs');
const COUNT = 980;

const j = JSON.stringify;
const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const SYMBOLS = ['-', '_', '*', '#', '+', '.', '~', '=', '>', '<', '!', '?', ':', ';', '|', '/', '@', '$', '%', '^', '&'];
const PAD_CHARS = ['-', '_', '*', '#', '+', '.', '~', '='];
const BRACKETS = [['(', ')'], ['[', ']'], ['{', '}'], ['<', '>'], ['"', '"'], ["'", "'"], ['|', '|']];
const BULLETS = ['* ', '- ', '+ ', '> ', '~ '];
const SEPARATORS = ['-', '_', '.', '~', '+', '*', '#', '/'];
const MASK_KEEP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function replaceFamily() {
  const out = [];
  for (const a of ALPHABET) {
    for (const b of ALPHABET) {
      if (a === b) continue;
      out.push({
        name: 'Replace ' + j(a) + ' with ' + j(b),
        description: 'Replaces every ' + a + ' with ' + b + '.',
        body: '(value) => String(value).split(' + j(a) + ').join(' + j(b) + ')',
      });
    }
  }
  return out;
}

function caesarFamily() {
  const out = [];
  for (let s = 1; s <= 25; s += 1) {
    out.push({
      name: 'Caesar shift +' + s,
      description: 'Shifts latin letters forward by ' + s + '.',
      body: '(value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(((ch.charCodeAt(0) - base + ' + s + ') % 26) + base); })',
    });
  }
  return out;
}

function prefixFamily() {
  return SYMBOLS.map((t) => ({
    name: 'Prefix ' + j(t),
    description: 'Prepends ' + j(t) + ' to the value.',
    body: '(value) => ' + j(t) + ' + String(value)',
  }));
}

function suffixFamily() {
  return SYMBOLS.map((t) => ({
    name: 'Suffix ' + j(t),
    description: 'Appends ' + j(t) + ' to the value.',
    body: '(value) => String(value) + ' + j(t),
  }));
}

function repeatFamily() {
  const out = [];
  for (let n = 2; n <= 10; n += 1) {
    out.push({
      name: 'Repeat x' + n,
      description: 'Repeats the value ' + n + ' times.',
      body: '(value) => String(value).repeat(' + n + ')',
    });
  }
  return out;
}

function truncateFamily() {
  const out = [];
  for (let n = 1; n <= 80; n += 1) {
    out.push({
      name: 'Truncate to ' + n,
      description: 'Keeps the first ' + n + ' characters.',
      body: '(value) => String(value).slice(0, ' + n + ')',
    });
  }
  return out;
}

function padStartFamily() {
  const out = [];
  for (let w = 4; w <= 40; w += 1) {
    for (const c of PAD_CHARS) {
      out.push({
        name: 'Pad start to ' + w + ' with ' + j(c),
        description: 'Left-pads the value to width ' + w + ' with ' + j(c) + '.',
        body: '(value) => String(value).padStart(' + w + ', ' + j(c) + ')',
      });
    }
  }
  return out;
}

function padEndFamily() {
  const out = [];
  for (let w = 4; w <= 40; w += 1) {
    for (const c of PAD_CHARS) {
      out.push({
        name: 'Pad end to ' + w + ' with ' + j(c),
        description: 'Right-pads the value to width ' + w + ' with ' + j(c) + '.',
        body: '(value) => String(value).padEnd(' + w + ', ' + j(c) + ')',
      });
    }
  }
  return out;
}

function indentFamily() {
  const out = [];
  for (let n = 1; n <= 8; n += 1) {
    out.push({
      name: 'Indent by ' + n,
      description: 'Indents every line by ' + n + ' spaces.',
      body: "(value) => String(value).split('\\n').map((line) => ' '.repeat(" + n + ") + line).join('\\n')",
    });
  }
  return out;
}

function wrapFamily() {
  return BRACKETS.map((pair) => ({
    name: 'Wrap in ' + pair[0] + pair[1],
    description: 'Wraps the value in ' + pair[0] + pair[1] + '.',
    body: '(value) => ' + j(pair[0]) + ' + String(value) + ' + j(pair[1]),
  }));
}

function maskFamily() {
  return MASK_KEEP.map((k) => ({
    name: 'Mask all but last ' + k,
    description: 'Masks all but the last ' + k + ' characters.',
    body: '(value) => { const s = String(value); const keep = ' + k + "; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); }",
  }));
}

function slugFamily() {
  return SEPARATORS.map((sep) => ({
    name: 'Slug with ' + j(sep),
    description: 'Builds a lowercase slug joined by ' + j(sep) + '.',
    body: '(value) => String(value).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join(' + j(sep) + ')',
  }));
}

function whitespaceFamily() {
  return SEPARATORS.map((sep) => ({
    name: 'Whitespace to ' + j(sep),
    description: 'Replaces whitespace runs with ' + j(sep) + '.',
    body: '(value) => String(value).replace(/\\s+/g, ' + j(sep) + ')',
  }));
}

function caseFamily() {
  return [
    { name: 'Uppercase', description: 'Converts the value to upper case.', body: '(value) => String(value).toUpperCase()' },
    { name: 'Lowercase', description: 'Converts the value to lower case.', body: '(value) => String(value).toLowerCase()' },
    { name: 'Capitalize', description: 'Upper-cases the first character only.', body: '(value) => { const s = String(value); return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); }' },
    { name: 'Uncapitalize', description: 'Lower-cases the first character only.', body: '(value) => { const s = String(value); return s.charAt(0).toLowerCase() + s.slice(1); }' },
    { name: 'Swap case', description: 'Swaps the case of every character.', body: "(value) => String(value).split('').map((ch) => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join('')" },
    { name: 'Camel case', description: 'Converts the value to camelCase.', body: '(value) => String(value).toLowerCase().replace(/[^a-z0-9]+(.)/g, (m, c) => c.toUpperCase())' },
    { name: 'Snake case', description: 'Converts the value to snake_case.', body: "(value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '')" },
    { name: 'Kebab case', description: 'Converts the value to kebab-case.', body: "(value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')" },
    { name: 'Title case', description: 'Capitalizes the first letter of every word.', body: '(value) => String(value).toLowerCase().replace(/(^|[^a-z0-9])([a-z0-9])/g, (m, a, b) => a + b.toUpperCase())' },
  ];
}

function encodingFamily() {
  return [
    { name: 'Base64 encode', description: 'Encodes the value as base64.', body: "(value) => Buffer.from(String(value), 'utf8').toString('base64')" },
    { name: 'Base64 decode', description: 'Decodes a base64 string.', body: "(value) => Buffer.from(String(value), 'base64').toString('utf8')" },
    { name: 'Hex encode', description: 'Encodes the value as hexadecimal.', body: "(value) => Buffer.from(String(value), 'utf8').toString('hex')" },
    { name: 'Hex decode', description: 'Decodes a hexadecimal string.', body: "(value) => Buffer.from(String(value), 'hex').toString('utf8')" },
    { name: 'Binary encode', description: 'Encodes each character as 8 bits.', body: "(value) => String(value).split('').map((ch) => ch.charCodeAt(0).toString(2).padStart(8, '0')).join(' ')" },
    { name: 'URI encode', description: 'Percent-encodes the value.', body: '(value) => encodeURIComponent(String(value))' },
    { name: 'URI decode', description: 'Decodes a percent-encoded value.', body: '(value) => decodeURIComponent(String(value))' },
    { name: 'HTML escape', description: 'Escapes ampersands and angle brackets.', body: "(value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')" },
    { name: 'HTML unescape', description: 'Unescapes HTML entities.', body: "(value) => String(value).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')" },
    { name: 'Atbash', description: 'Applies the Atbash cipher.', body: '(value) => String(value).replace(/[a-z]/gi, (ch) => { const base = ch === ch.toLowerCase() ? 97 : 65; return String.fromCharCode(25 - (ch.charCodeAt(0) - base) + base); })' },
  ];
}

function lineFamily() {
  const out = [
    { name: 'Reverse characters', description: 'Reverses the order of characters.', body: "(value) => String(value).split('').reverse().join('')" },
    { name: 'Reverse lines', description: 'Reverses the order of lines.', body: "(value) => String(value).split('\\n').reverse().join('\\n')" },
    { name: 'Sort lines', description: 'Sorts lines ascending.', body: "(value) => String(value).split('\\n').sort().join('\\n')" },
    { name: 'Unique lines', description: 'Removes duplicate lines.', body: "(value) => Array.from(new Set(String(value).split('\\n'))).join('\\n')" },
    { name: 'Trim lines', description: 'Trims whitespace on every line.', body: "(value) => String(value).split('\\n').map((line) => line.trim()).join('\\n')" },
    { name: 'Drop empty lines', description: 'Removes blank lines.', body: "(value) => String(value).split('\\n').filter((line) => line.trim().length > 0).join('\\n')" },
    { name: 'Number lines', description: 'Numbers each line.', body: "(value) => String(value).split('\\n').map((line, i) => (i + 1) + '. ' + line).join('\\n')" },
  ];
  for (const m of BULLETS) {
    out.push({
      name: 'Bullet ' + j(m),
      description: 'Prefixes each line with ' + j(m) + '.',
      body: "(value) => String(value).split('\\n').map((line) => " + j(m) + " + line).join('\\n')",
    });
  }
  for (let n = 1; n <= 8; n += 1) {
    out.push({
      name: 'Drop first ' + n + ' lines',
      description: 'Drops the first ' + n + ' lines.',
      body: "(value) => String(value).split('\\n').slice(" + n + ").join('\\n')",
    });
    out.push({
      name: 'Drop last ' + n + ' lines',
      description: 'Drops the last ' + n + ' lines.',
      body: "(value) => String(value).split('\\n').slice(0, -" + n + ").join('\\n')",
    });
    out.push({
      name: 'Take first ' + n + ' lines',
      description: 'Keeps the first ' + n + ' lines.',
      body: "(value) => String(value).split('\\n').slice(0, " + n + ").join('\\n')",
    });
    out.push({
      name: 'Take last ' + n + ' lines',
      description: 'Keeps the last ' + n + ' lines.',
      body: "(value) => { const lines = String(value).split('\\n'); return lines.slice(Math.max(0, lines.length - " + n + ")).join('\\n'); }",
    });
  }
  return out;
}

function compositionFamily() {
  const out = [
    { name: 'Mirror', description: 'Appends the reversed value.', body: "(value) => String(value) + String(value).split('').reverse().join('')" },
  ];
  for (const c of SYMBOLS) {
    out.push({
      name: 'Interleave with ' + j(c),
      description: 'Joins every character with ' + j(c) + '.',
      body: "(value) => String(value).split('').join(" + j(c) + ')',
    });
  }
  return out;
}

const families = [
  replaceFamily(),
  caesarFamily(),
  prefixFamily(),
  suffixFamily(),
  repeatFamily(),
  truncateFamily(),
  padStartFamily(),
  padEndFamily(),
  indentFamily(),
  wrapFamily(),
  maskFamily(),
  slugFamily(),
  whitespaceFamily(),
  caseFamily(),
  encodingFamily(),
  lineFamily(),
  compositionFamily(),
];

const interleaved = [];
const longest = Math.max(...families.map((f) => f.length));
for (let i = 0; i < longest; i += 1) {
  for (const family of families) {
    if (i < family.length) interleaved.push(family[i]);
  }
}

const seen = new Set();
const unique = [];
for (const spec of interleaved) {
  if (seen.has(spec.name)) continue;
  seen.add(spec.name);
  unique.push(spec);
}

if (unique.length < COUNT) {
  throw new Error('not enough unique stages: ' + unique.length + ' < ' + COUNT);
}

const chosen = unique.slice(0, COUNT);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const files = [];

for (let i = 0; i < chosen.length; i += 1) {
  const spec = chosen[i];
  const id = 'mod-' + String(i + 1).padStart(4, '0');
  const file = id + '.js';
  const source = [
    "'use strict';",
    '',
    "const { defineStage } = require('../core/registry');",
    '',
    'module.exports = defineStage({',
    '  id: ' + j(id) + ',',
    '  name: ' + j(spec.name) + ',',
    '  description: ' + j(spec.description) + ',',
    '  run: ' + spec.body + ',',
    '});',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(OUT, file), source, 'utf8');
  files.push(file);
}

const barrel = ["'use strict';", '', 'module.exports = [']
  .concat(files.map((f) => "  require('./" + f.replace(/\.js$/, '') + "'),"))
  .concat(['];', ''])
  .join('\n');
fs.writeFileSync(path.join(OUT, 'index.js'), barrel, 'utf8');

fs.mkdirSync(DOCS, { recursive: true });
const catalog = [
  '# Stage Catalog',
  '',
  '> Auto-generated by `npm run generate`. Do not edit by hand.',
  '',
  'The full, authoritative list of every stage, in id order.',
  '',
  '| id | name | description |',
  '| --- | --- | --- |',
]
  .concat(
    chosen.map((spec, i) => {
      const id = 'mod-' + String(i + 1).padStart(4, '0');
      const name = spec.name.replace(/\|/g, '\\|');
      const desc = spec.description.replace(/\|/g, '\\|');
      return '| `' + id + '` | ' + name + ' | ' + desc + ' |';
    })
  )
  .concat(['', ''])
  .join('\n');
fs.writeFileSync(path.join(DOCS, 'CATALOG.md'), catalog, 'utf8');

console.log('generated ' + files.length + ' unique stages');
console.log('generated docs/CATALOG.md');
