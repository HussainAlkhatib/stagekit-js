# stagekit-js website

Static, dependency-free site for `stagekit-js`, deployed to GitHub Pages.

## Layout

```
web/
  index.html            landing page + live demo
  assets/
    styles.css          styles
    app.js              live-demo logic (search, pipeline, stats)
    stages.js           GENERATED browser bundle of all stages
    meta.json           GENERATED counts per category
  .nojekyll             tell Pages not to run Jekyll
```

## Regenerating the stage bundle

`assets/stages.js` is generated from the real Node catalog, so the browser
runs the same logic as the package:

```bash
npm run build:web
```

The only translation is `Buffer`-based Base64/Hex, which is rewritten to
`TextEncoder`/`btoa`/`atob` equivalents for the browser. Everything else is
the exact `run` function from `src/modules/`.

## Preview locally

```bash
npm run build:web   # regenerate assets
npm run serve:web   # http://localhost:4173
```

## Deploy

Pushing to `main` (touching `web/**` or the module catalog) triggers
`.github/workflows/pages.yml`, which rebuilds the bundle and publishes `web/`
to GitHub Pages. You can also run it manually from the Actions tab.

Live at: https://hussainalkhatib.github.io/stagekit-js/
