# Architecture

StageKit is deliberately small. The entire runtime is three files, and
everything else is data.

## The big picture

```
                 src/modules/*.js  (978 stage modules)
                          |
                          v
   src/modules/index.js  (barrel: one require per module)
                          |
                          v
        src/core/registry.js  (defineStage, createRegistry, createPipeline)
                          |
                          v
                    src/index.js  (public API)
```

## Layers

### 1. Stage modules

Each file exports exactly one frozen stage object. A stage is a value, not
a class, so it can be serialised, compared and composed freely.

```js
module.exports = defineStage({
  id: 'mod-0042',
  name: 'Caesar +1',
  description: 'Shifts latin letters by 1.',
  run: (value) => shift(value, 1),
});
```

Modules never import each other. The only dependency is `defineStage`, which
keeps the graph a flat star instead of a tangled web.

### 2. The barrel

`src/modules/index.js` is generated and contains nothing but requires:

```js
module.exports = [
  require('./mod-0001'),
  require('./mod-0002'),
  // ...
];
```

It exists so the registry can be built in one shot. Regenerate it with
`npm run generate`; never edit it by hand.

### 3. The core

`src/core/registry.js` has three responsibilities:

- `defineStage(definition)` validates and freezes a stage.
- `createRegistry(stages)` indexes stages by id and adds search helpers.
- `createPipeline(stages)` turns an ordered list into a runnable function.

`src/core/errors.js` defines `StageError` (anything that goes wrong while
defining or looking up a stage) and `PipelineError` (reserved for future
runtime failures).

### 4. The public API

`src/index.js` wires the default registry and the demo pipeline together and
re-exports the primitives. Application code should import from here, not
from `src/core` directly.

## Why ids are numeric

Stages carry two labels: a unique `id` (`mod-0042`) and a human `name`
(`Caesar +1`). Names are not unique - several stages can share one - so they
cannot be used as a key. Ids are guaranteed unique by the registry, which
rejects duplicates at construction time.

Because ids are assigned sequentially and never reused, `nextId()` is simply
`size + 1`, and `findByPrefix('mod-00')` gives you a stable, contiguous
slice of the catalog.

## Data flow through a pipeline

```
value -> stage.run(value, options) -> value' -> next stage -> ... -> result
```

Each stage receives the previous stage's return value and the same options
object. Nothing else is shared, so stages stay independent and order is the
only coupling.

## Invariants

1. Every registered id matches `/^mod-[0-9]{4}$/`.
2. Ids are unique within a registry.
3. `run` is always a function and always returns a value.
4. Stage objects are frozen.
5. The barrel and the catalog docs are generated, never hand-written.
