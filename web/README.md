# stagekit-js website

Static, dependency-free site for `stagekit-js`, deployed to GitHub Pages.

## Layout

```
web/
  index.html            landing page + live demo + catalog + FAQ
  assets/
    styles.css          design system + site styles (token layers)
    app.js              live-demo logic (search, pipeline, catalog, palette)
    stages.js           GENERATED browser bundle of all stages
    meta.json           GENERATED counts per category
  .nojekyll             tell Pages not to run Jekyll
```

## Features

- **Live workbench** - every stage runs the real function in the browser.
  Add stages by search, quick chips, the catalog, or the command palette.
- **Per-step previews** - each pipeline row shows the value it produced, or
  the error if it threw.
- **Reorder & toggle** - drag a row to reorder, click the eye to disable a
  stage without removing it.
- **Equivalent code tabs** - node, shell, and a portable `pipeline.json` spec,
  generated from the current pipeline.
- **Catalog browser** - search and filter all stages by family, add with one
  click, paginated (48 at a time) so the DOM stays light.
- **Command palette** - `Ctrl`/`Cmd` + `K` to search and add stages from
  anywhere.
- **Theme toggle** - dark (OLED) by default, light on request; honours
  `prefers-color-scheme` and persists to `localStorage`.
- **Deep links** - the URL tracks the pipeline and input (`?p=mod-0012.mod-0014&in=hi`),
  so any workbench state is shareable.
- **Accessible** - keyboard-operable pipeline (arrow keys, Delete, Alt+Up/Down),
  visible focus, ARIA roles, and full `prefers-reduced-motion` support.

## Design system

`assets/styles.css` uses three token layers - primitive, semantic, component -
so the whole theme can be re-skinned by editing the semantic block. Dark is the
primary theme; light is a first-class override via `:root[data-theme=light]`.
Accent is amber, the "run" accent is green, type is JetBrains Mono + IBM Plex
Sans.

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
