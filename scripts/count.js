'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IGNORE = new Set(['.git', 'node_modules']);

function walk(dir, acc) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (IGNORE.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, acc);
    } else {
      acc.push(path.relative(ROOT, full));
    }
  }
  return acc;
}

const files = walk(ROOT, []).sort();
console.log('total files: ' + files.length);
