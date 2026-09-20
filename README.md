# stagekit-js

**[Live site & demo »](https://hussainalkhatib.github.io/stagekit-js/)** — try the
stages right in your browser.

`stagekit-js` is a catalog of 4658 composable, pure string-transformation
stages. Each stage is a small module under `src/modules/` that exports a
frozen definition via `defineStage`. Stages can be composed into a pipeline
and run from code or from the command line.

## Install

Install globally to get the `stagekit` command on your PATH:

```bash
npm install -g stagekit-js
```

Or install locally if you only want to use the library from code:

```bash
npm install stagekit-js
```

## Usage

```js
const { registry, createPipeline } = require('stagekit-js');

const pipe = createPipeline(registry.search('slug'));

console.log(registry.size); // 4658
console.log(pipe('Hello World'));
```

## Command line

Installing the package also installs the `stagekit` command:

```bash
echo "My Article Title" | stagekit run slug base64
stagekit search caesar
stagekit show mod-0039
stagekit list --limit 5
```

See [docs/CLI.md](./docs/CLI.md) for the full command reference.

## Documentation

- [Getting started](./docs/GETTING-STARTED.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [API reference](./docs/API.md)
- [Recipes](./docs/RECIPES.md)
- [CLI](./docs/CLI.md)
- [FAQ](./docs/FAQ.md)
- [Releasing](./docs/RELEASING.md)
- [Full catalog](./docs/CATALOG.md)

## Scripts

- `npm run generate` - regenerate the module catalog and docs.
- `npm test` - validate every stage.
- `npm run lint` - structural checks for the catalog.
- `npm run count` - print the total file count.
- `npm run cli` - run the CLI locally (`npm run cli -- search slug`).

## License

MIT
