# Releasing

Releases are automated. You never run `npm publish` by hand.

## One-time setup

1. Create an npm **automation** token:
   npmjs.com -> Access Tokens -> Generate New Token -> Automation.
2. Add it to the repository as a secret named `NPM_TOKEN`:
   GitHub -> Settings -> Secrets and variables -> Actions -> New repository secret.

That is the only credential the workflow needs. It is read from
`secrets.NPM_TOKEN` and never written to disk or logs.

## Cutting a release

1. Bump the version in `package.json` and commit it:

   ```bash
   npm version patch   # or minor / major
   ```

2. Push the commit and the tag:

   ```bash
   git push origin main --follow-tags
   ```

3. Create a GitHub Release for the tag (Releases -> Draft a new release ->
   choose the tag -> Publish).

Publishing the release, or pushing a `v*` tag, triggers
`.github/workflows/publish.yml`, which:

- checks out the code and installs Node 20 + the npm registry,
- verifies the tag matches the `package.json` version,
- runs `npm run lint` and `npm test`,
- runs `npm publish --provenance --access public`.

If lint or tests fail, or the tag and version disagree, the job stops and
nothing is published.

## Why the tag check matters

`npm publish` is irreversible for a given version. The workflow compares the
pushed tag (`v1.2.3` -> `1.2.3`) with `package.json` before publishing, so a
mistyped tag can never ship the wrong version.

## Provenance

The publish step uses `--provenance`, which attaches a signed build
attestation linking the npm package to this repository and commit. Consumers
can verify it on the package page.
