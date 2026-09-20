# Recipes

Copy-paste pipelines for common jobs. Every example uses only the public API
and stages that ship with the library. Search by effect, then build a
pipeline.

## 1. Clean whitespace, then slugify

```js
const { registry, createPipeline } = require('stagekit-js');

const pipe = createPipeline([
  registry.findByName('Whitespace to "-"')[0],
  registry.findByName('Slug with "-"')[0],
]);

pipe('  Hello   WORLD -- My First Article!!  ');
// -> 'hello-world-my-first-article'
```

## 2. Encode a payload for transport

Slug first, then base64.

```js
const { registry, createPipeline } = require('stagekit-js');

const encode = createPipeline([
  registry.findByName('Slug with "-"')[0],
  registry.findByName('Base64 encode')[0],
]);

encode('My Secret Note');
// -> base64 of 'my-secret-note'
```

Round-trip it back:

```js
const decode = createPipeline([
  registry.findByName('Base64 decode')[0],
]);
```

## 3. Redact part of a string

Mask all but the last few characters - handy for tokens and ids.

```js
const { registry, createPipeline } = require('stagekit-js');

const redact = createPipeline([registry.findByName('Mask all but last 4')[0]]);

redact('sk-1234567890abcdef');
// -> '***************cdef'
```

## 4. Build a markdown bullet list

Prefix each line with a bullet.

```js
const { registry, createPipeline } = require('stagekit-js');

const bullets = createPipeline([registry.findByName('Bullet "- "')[0]]);

bullets('one line\ntwo line\nthree');
// -> '- one line\n- two line\n- three'
```

## 5. Caesar-shift a message

Pick any Caesar stage and apply it.

```js
const { registry, createPipeline } = require('stagekit-js');

const caesar = registry.findByName('Caesar shift +7')[0];
createPipeline([caesar])('Attack at dawn');
// -> letters shifted by 7
```

## 6. An escape ladder

Apply several escaping stages in order. The `limit` option lets you stop
partway for debugging.

```js
const { registry, createPipeline } = require('stagekit-js');

const escape = createPipeline([
  registry.findByName('HTML escape')[0],
  registry.findByName('URI encode')[0],
]);

escape('<b>hi</b>');
// -> percent-encoded escaped HTML

escape('<b>hi</b>', { limit: 1 });
// -> '&lt;b&gt;hi&lt;/b&gt;'
```

## 7. Compose your own stage into a pipeline

```js
const { defineStage, createPipeline } = require('stagekit-js');

const trim = defineStage({
  id: 'mod-9900',
  name: 'Trim',
  description: 'Trims surrounding whitespace.',
  run: (value) => String(value).trim(),
});

const pipe = createPipeline([trim /* ... */]);
```

## 8. Inspect the catalog at runtime

```js
const { registry } = require('stagekit-js');

registry.size;                    // 4658
registry.search('caesar');        // 25 shift variants
registry.findByPrefix('mod-00');  // the first slice of the catalog
registry.nextId();                // the first free id
```

## Tips

- Search by effect (`'reverse'`, `'sort'`, `'encode'`) rather than by id.
- `findByName` is exact and returns 0 or 1 result; `search` is fuzzy and
  returns many. Use `findByName(...)[0]` for a stable single stage.
- Keep pipelines short; long chains are hard to reason about.
- Use `{ limit }` while experimenting, then remove it once the chain is right.
- Stages are pure, so the same input always yields the same output. Cache freely.
