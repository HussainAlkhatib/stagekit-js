# Roadmap

This roadmap turns a broad "make stagekit-js the strongest library in its
niche" review into concrete, reviewable work. It is deliberately honest about
what is **done**, what is **planned**, and what we will **not** do.

The niche is narrow and on purpose: **composable, pure string
transformations for JavaScript and the command line.** We will not chase
objects, arrays, I/O, or networking.

Legend: [x] done . [~] partial . [ ] planned

---

## 1. Vision & scope

- [x] One-sentence mission: the standard composable string-transformation
  layer for JS and the CLI.
- [x] Tagline: Compose text transformations like Unix pipes.
- [x] Scope statement (strings only) recorded in GOVERNANCE.md.

## 2. Pipeline runner (the core engine)

- [x] Order-preserving pipeline with `limit` (unchanged, backward-compatible).
- [x] Error strategies: `throw` (default), `skip`, `stop`, `collect`.
- [x] `trace` mode recording { id, name, input, output, ms, error? }.
- [x] `AbortSignal` support for cooperative cancellation.
- [x] Errors carry `stageId` and a `cause`.
- [x] `collect` strategy: keeps the previous value, continues, and
  aggregates the wrapped errors on `pipe.errors`.
- [ ] Optional async stages (a stage whose `run` returns a Promise).
- [ ] Streaming runner for very large inputs (line-by-line).

## 3. Catalog: quality over raw count

- [x] Every stage has a unique `id`, `name`, `description`, and `run`.
- [x] The lint step rejects duplicate names and duplicate behaviours.
- [x] The catalog is fully generated from `scripts/generate.js` (auditable).
- [ ] Metadata per stage: tags, examples, inputType/outputType, version, deprecated.
- [ ] A curated Core set (the ~100 most useful stages) highlighted above the
  long tail, without deleting the rest.
- [ ] Optional community packs (@scope/stagekit-pack-*) loaded separately, so
  Core stays small.

We intentionally **keep** the full catalog. The long tail is harmless (each
stage is a tiny pure function) and the count is a feature for discovery.
"Deleting 4,500 stages" is not on the table; surfacing the best ones is.

## 4. Command line

- [x] list, search, show, count, run (with --text, --limit, --pick).
- [x] explain <id|name> - human-readable stage detail.
- [x] compose <stages...> - emit a portable JSON pipeline spec.
- [x] search --json - machine-readable output.
- [x] run --trace - per-stage trace on stderr; stdout stays clean.
- [x] run --on-error throw|skip|stop|collect.
- [ ] stagekit test <pipeline.json> - run a saved pipeline against fixtures.
- [ ] stagekit bench <stages...> - time a pipeline from the CLI.
- [ ] Shell completion (bash/zsh/fish).

## 5. TypeScript & interoperability

- [ ] First-class .d.ts types for the public API.
- [ ] JSON Schema for a pipeline spec (so compose output is validated).
- [ ] ESM entry point alongside CJS (today: CJS only).
- [ ] Verified on Node, Deno, Bun, and the browser (the site already runs the
  catalog client-side).

## 6. Plugins & extensibility

- [x] defineStage already lets anyone author a stage.
- [ ] A documented plugin contract and naming convention (@scope/stagekit-plugin-*).
- [ ] A loader that registers external packs into a registry.
- [ ] A safety checklist for third-party stages (pure, no I/O).

## 7. Quality & testing

- [x] A dependency-free test runner (test/run.js).
- [x] Coverage of the registry, pipeline, error strategies, and the CLI.
- [x] "Stages never mutate their input" as an invariant test.
- [ ] Property-based tests (via fast-check) for purity and idempotence.
- [ ] Golden tests per core stage.
- [ ] CI that runs lint + test on every push and PR.

## 8. Performance

- [x] A dependency-free benchmark (npm run bench).
- [ ] Published numbers in the README, refreshed per release.
- [ ] Comparisons against lodash/fp, ramda, and shell tools for the CLI.
- [ ] Streaming for large files.

## 9. Documentation & developer experience

- [x] A live site with an in-browser workbench
  (https://hussainalkhatib.github.io/stagekit-js/).
- [x] Getting started, API, CLI, recipes, FAQ, architecture, releasing docs.
- [ ] An explain-backed "discover" UX and richer per-stage docs.
- [ ] A cookbook of end-to-end recipes (CSV cleanup, Markdown, Arabic text).

## 10. Community & sustainability

- [x] CONTRIBUTING.md, CODE_OF_CONDUCT.md, GOVERNANCE.md, SECURITY.md.
- [x] An rfc label convention for larger changes (see GOVERNANCE.md).
- [ ] A CHANGELOG.md generated from commits.
- [ ] good first issue and help wanted labels in active use.
- [ ] Regular tagged releases via the existing publish workflow.

## 11. Security & supply chain

- [x] Zero runtime dependencies.
- [x] No eval / new Function / dynamic require in the library and CLI.
- [x] SECURITY.md documenting guarantees and reporting.
- [x] npm provenance on publish (--provenance in the publish workflow).
- [ ] npm audit / dependency review in CI.

## 12. Distribution

- [x] npm package and GitHub Pages site.
- [ ] CDN build (UMD/IIFE) for script-tag users.
- [ ] Publish to JSR.

---

## Suggested sequencing

The work above is ordered by leverage, not calendar:

1. Types + ESM (section 5) - unlocks the widest audience and tooling.
2. Stage metadata + Core curation (section 3) - improves discovery a lot.
3. Plugin contract (section 6) - turns the catalog into a platform.
4. CLI test/bench + completions (section 4) - makes the CLI a real tool.
5. Community cadence (section 10) - releases, changelog, labels.

Everything here is additive and backward-compatible unless explicitly marked
otherwise; breaking changes follow SemVer and a public RFC.
