'use strict';

// A tiny, dependency-free micro-benchmark for the pipeline runner.
//
//   node scripts/bench.js
//   npm run bench
//
// It measures:
//   1. raw stage throughput on a long string
//   2. a short pipeline over many iterations
//   3. the whole catalog (all stages) once
//   4. trace overhead on the same short pipeline
//
// Results are informational; run on a quiet machine for stable numbers.

const { registry, createPipeline } = require('../src');

function time(label, fn, iterations) {
  // warm up
  for (let i = 0; i < Math.min(iterations, 1000); i += 1) fn();

  const start = process.hrtime.bigint();
  for (let i = 0; i < iterations; i += 1) fn();
  const end = process.hrtime.bigint();

  const totalMs = Number(end - start) / 1e6;
  const perOp = totalMs / iterations;
  const opsPerSec = iterations / (totalMs / 1000);

  console.log(
    label.padEnd(34) +
      String(totalMs.toFixed(1)).padStart(10) + ' ms total  ' +
      perOp.toFixed(5).padStart(10) + ' ms/op  ' +
      Math.round(opsPerSec).toLocaleString().padStart(14) + ' ops/s'
  );
}

const upper = registry.findByName('Uppercase')[0];
const slug = registry.findByName('Slug with "-"')[0];
const reverse = registry.findByName('Reverse characters')[0];

const short = createPipeline([upper, slug]);
const shortTraced = createPipeline([upper, slug]);
const all = createPipeline(registry.list());

const LONG = 'The quick brown fox jumps over the lazy dog. '.repeat(200);

console.log('stagekit-js benchmark');
console.log('node ' + process.version + '  catalog ' + registry.size + ' stages\n');

time('single stage (Uppercase, 9KB)', () => upper.run(LONG), 20000);
time('2-stage pipeline (9KB)', () => short(LONG), 20000);
time('2-stage pipeline + trace (9KB)', () => shortTraced(LONG, { trace: true }), 20000);
time('2-stage pipeline (short input)', () => short('Hello World'), 200000);
time('full catalog, 1 pass (short input)', () => all('Hello World'), 20);

console.log('\ndone.');
