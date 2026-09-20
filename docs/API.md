# API Reference

Everything StageKit exports, with signatures, parameters and examples.

```js
const {
  stages,
  registry,
  pipeline,
  createRegistry,
  createPipeline,
  defineStage,
  errors,
} = require('stagekit-js');
```

---

## defineStage(definition)

Validates a stage and returns it frozen.

**Parameters**

| name | type | required | description |
| --- | --- | --- | --- |
| `id` | `string` | yes | Must match `/^mod-[0-9]{4}$/`. |
| `name` | `string` | yes | Non-empty, human readable. Not unique. |
| `description` | `string` | no | Defaults to `''`. |
| `run` | `function` | yes | `(value, options) => value`. |

**Returns** a frozen `{ id, name, description, run }`.

**Throws** `StageError` when any rule is violated.

```js
const { defineStage } = require('stagekit-js');

const exclaim = defineStage({
  id: 'mod-0998',
  name: 'Exclaim',
  description: 'Appends one exclamation mark.',
  run: (value) => String(value) + '!',
});
```

---

## createRegistry(stages)

Indexes an array of stages by id and returns query helpers. Throws
`StageError` on a missing/invalid id or a duplicate.

**Returns** an object:

| member | signature | description |
| --- | --- | --- |
| `size` | `number` | Number of registered stages. |
| `has` | `(id) => boolean` | Is the id present? |
| `get` | `(id) => Stage` | The stage, or throws `StageError`. |
| `list` | `() => Stage[]` | All stages, insertion order. |
| `ids` | `() => string[]` | All ids, insertion order. |
| `findByName` | `(name) => Stage[]` | Exact, case-sensitive name match. Returns 0 or 1. |
| `search` | `(query) => Stage[]` | Substring match over id, name and description. |
| `nextId` | `() => string` | First free id after the current size. |
| `findByPrefix` | `(prefix) => Stage[]` | All ids starting with `prefix`. |

```js
const { registry } = require('stagekit-js');

registry.search('slug');        // every slug variant
registry.findByName('Slug with "-"'); // the exact stage
registry.nextId();              // 'mod-0982'
```

---

## createPipeline(stages)

Builds a runnable pipeline from an ordered array of stages.

**Parameters**: `stages` - array of stage objects (any order you like).

**Returns** `(value, options = {}) => value`.

- `options.limit` - stop after this many stages.
- The whole `options` object is forwarded to every `run` call, so stages can
  read their own keys.

```js
const { registry, createPipeline } = require('stagekit-js');

const pipe = createPipeline(registry.search('base64'));
pipe('hi');              // runs every base64 stage
pipe('hi', { limit: 1 }); // runs only the first
```

---

## pipeline

The default pipeline. Runs **every** registered stage in id order. It is a
demo and a smoke test, not something you want in production.

```js
const { pipeline } = require('stagekit-js');
pipeline('Hello');
```

---

## stages

The raw array of all 978 stage objects, as exported by the barrel. Same
contents as `registry.list()`.

---

## errors

| export | base | thrown when |
| --- | --- | --- |
| `StageError` | `Error` | Defining, registering or looking up a stage fails. |
| `PipelineError` | `StageError` | Reserved for runtime pipeline failures. |

```js
const { errors, registry } = require('stagekit-js');

try {
  registry.get('nope');
} catch (err) {
  err instanceof errors.StageError; // true
}
```
