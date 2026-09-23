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
| `name` | `string` | yes | Non-empty, human readable. Unique in this catalog. |
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
- `options.onError` - `'throw'` (default), `'skip'`, `'stop'`, or `'collect'`:
  - `throw` - abort the pipeline and raise a `PipelineError`.
  - `skip` - keep the previous value and continue with the next stage.
  - `stop` - stop the pipeline, returning the value produced so far.
  - `collect` - keep the previous value and continue, appending each
    wrapped error to `pipe.errors` (an array) after the run.
- `options.trace` - when `true`, each stage's `{ id, name, input, output,
  ms }` (or `error`) is recorded on `pipe.trace` after the run.
- `options.signal` - an `AbortSignal`; if aborted between stages the run stops
  with a `PipelineError` whose `.aborted` is `true`.
- The whole `options` object is forwarded to every `run` call, so stages can
  read their own keys.

```js
const { registry, createPipeline } = require('stagekit-js');

const pipe = createPipeline(registry.search('base64'));
pipe('hi');              // runs every base64 stage
pipe('hi', { limit: 1 }); // runs only the first

// Resilience: keep going past a failing stage.
const safe = createPipeline([
  registry.findByName('Uppercase')[0],
  { id: 'mod-9999', name: 'boom', run() { throw new Error('nope'); } },
]);
safe('hi', { onError: 'skip' }); // 'HI'

// Collect failures instead of stopping or throwing.
const collecting = createPipeline([
  registry.findByName('Uppercase')[0],
  { id: 'mod-9999', name: 'boom', run() { throw new Error('nope'); } },
]);
collecting('hi', { onError: 'collect' }); // 'HI'
collecting.errors.length;                 // 1

// Observability: see what each stage did.
pipe('hi', { trace: true });
console.log(pipe.trace);
// [ { id, name, input, output, ms }, ... ]
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

The raw array of all 4658 stage objects, as exported by the barrel. Same
contents as `registry.list()`.

---

## errors

| export | base | thrown when |
| --- | --- | --- |
| `StageError` | `Error` | Defining, registering or looking up a stage fails. |
| `PipelineError` | `StageError` | A stage threw, or the signal aborted mid-run. |

```js
const { errors, registry } = require('stagekit-js');

try {
  registry.get('nope');
} catch (err) {
  err instanceof errors.StageError; // true
}
```
