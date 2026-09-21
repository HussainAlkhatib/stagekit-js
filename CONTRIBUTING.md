# Contributing to stagekit-js

Thanks for helping make stagekit-js better. This document explains how to
contribute in a way that keeps the catalog healthy.

## Ground rules

- Be kind and constructive. See `CODE_OF_CONDUCT.md`.
- Every stage must be **pure**: same input in, same output out, no I/O,
  no mutation of the input, no global state.
- Every stage must do **exactly one thing** and be **unique** in name and
  behaviour. The test suite enforces both.
- Prefer clarity over cleverness.

## Getting set up

```bash
git clone https://github.com/HussainAlkhatib/stagekit-js.git
cd stagekit-js
npm test          # run the suite
npm run lint      # structural checks
npm run generate  # regenerate the catalog (if you edited the generator)
```

There are no dependencies to install for development; the package is
zero-dependency by design.

## The catalog is generated

`src/modules/` is produced by `scripts/generate.js`. **Do not hand-edit**
those files; edit the generator and run `npm run generate`.

To add a stage, add a family (or an entry) in `scripts/generate.js`:

```js
{ name: 'Strip emojis', description: 'Removes emoji characters.',
  body: "(value) => String(value).replace(/[\\u{1F600}-\\u{1F64F}]/gu, '')" }
```

Then run:

```bash
npm run generate
npm test
npm run lint
```

The lint step rejects duplicate names and duplicate behaviours.

## Tests

Tests live in `test/run.js` and run with plain Node (no test framework).
Add a `test('...', () => { ... })` block for any behaviour you add. The
full suite must pass before a PR is merged.

## Commit & PR style

- Use clear, imperative commit subjects (`add strip-emojis stage`).
- One logical change per PR.
- Describe **what** and **why**, and link any related issue.

## Releasing

See `docs/RELEASING.md`. Releases are automated via GitHub Actions.

## Questions

Open a discussion or an issue. `good first issue` and `help wanted` labels
mark approachable tasks.
