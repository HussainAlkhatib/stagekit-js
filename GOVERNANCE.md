# Governance

## Scope

stagekit-js aims to be the standard, composable string-transformation layer
for JavaScript and the command line. Its scope is deliberately narrow:
**strings only**. No objects, arrays, I/O, or network.

## Roles

- **Maintainer** — final say on releases, API and scope. Currently the project
  author (see `package.json`).
- **Contributors** — anyone who opens an issue or pull request.

## Decisions

- Small changes (a new stage, a bug fix, docs) are decided by review of the
  pull request.
- Larger changes (public API, the pipeline runner's semantics, new commands,
  breaking changes) start as an issue labelled `rfc`, are discussed in the
  open for at least a few days, and require maintainer approval before merge.
- Breaking changes follow **SemVer** and are documented in the changelog.

## Versioning

- `MAJOR` — breaking change to the public API or CLI.
- `MINOR` — new, backward-compatible capability (new command, new option).
- `PATCH` — backward-compatible fixes and new catalog stages.

## Releases

Releases are automated (see `docs/RELEASING.md`). A release is cut by pushing
a version tag; CI publishes to npm with provenance.

## Code of Conduct

All participation is governed by `CODE_OF_CONDUCT.md`.
