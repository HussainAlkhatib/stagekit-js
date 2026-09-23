# Getting Started

Welcome to StageKit. This guide takes you from zero to a working pipeline
in about five minutes.

## What is a stage?

A **stage** is the smallest unit of work in StageKit. It is a pure function
with a name and an id:

```js
const stage = {
  id: 'mod-0001',
  name: 'Prefix "-"',
  description: 'Prepends - to the value.',
  run: (value, options) => '-' + String(value),
};
```

Stages never mutate their input. They take a value, return a new value, and
have no side effects. That makes them safe to reorder, reuse and test.

## Your first pipeline

The library ships with a prebuilt `pipeline` that runs every registered
stage in id order. You almost never want that in production; it exists as a
demo. Real work uses `createPipeline` with an explicit list:

```js
const { registry, createPipeline } = require('stagekit-js');

const slug = registry.list().find((s) => s.name.startsWith('Slug'));
const encode = registry.search('base64')[0];

const pipe = createPipeline([slug, encode]);

console.log(pipe('Hello World'));
// -> 'aGVsbG8td29ybGQ='
```

## Finding stages

You will rarely remember an id. Use the search helpers instead:

```js
registry.search('caesar');        // matches id, name or description
registry.findByName('Slug with "-"'); // exact name, returns 0 or 1
registry.findByPrefix('mod-00');  // everything from mod-0000 to mod-0099
```

## Controlling a pipeline

`createPipeline` returns a function `(value, options) => result`.

- `options.limit` stops after N stages.
- `options.onError` chooses what to do when a stage throws: `'throw'`
  (default), `'skip'`, `'stop'`, or `'collect'`.
- `options` is forwarded to every stage, so stages can read their own
  configuration keys.

```js
const pipe = createPipeline([a, b, c, d]);

pipe('x');            // runs a, b, c, d
pipe('x', { limit: 2 }); // runs a, b
```

## Adding your own stage

Use `defineStage`. It validates the shape and freezes the result:

```js
const { defineStage } = require('stagekit-js');

module.exports = defineStage({
  id: 'mod-0999',
  name: 'Exclaim',
  description: 'Adds exclamation marks.',
  run: (value, options) => String(value) + '!'.repeat(options.marks || 1),
});
```

## Next steps

- [ARCHITECTURE.md](./ARCHITECTURE.md) - how the pieces fit together.
- [API.md](./API.md) - every exported function, documented.
- [RECIPES.md](./RECIPES.md) - real-world pipelines you can copy.
- [CATALOG.md](./CATALOG.md) - the full list of 4658 stages.
- [FAQ.md](./FAQ.md) - answers to the questions everyone asks.
