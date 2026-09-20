# Command-Line Interface

`stagekit` exposes the full catalog from your terminal, with no code to
write. It reads from `stdin`, writes to `stdout`, and plays nicely with
other Unix tools.

## Install / invoke

Once the package is installed, the `stagekit` binary is on your PATH:

```bash
stagekit --help
```

Inside this repository you can run it directly:

```bash
node bin/stagekit.js --help
```

## Commands

### `stagekit list [--limit N]`

Print every stage as `id`, `name` and `description`.

```bash
stagekit list --limit 5
# mod-0001  Prefix "-"    Prepends - to the value.
# ...
# 5 of 4658 stages
```

### `stagekit search <query>`

Substring search over id, name and description.

```bash
stagekit search caesar
stagekit search base64
```

### `stagekit show <id>`

Full details for one stage, including its source.

```bash
stagekit show mod-0039
```

### `stagekit count`

Print the number of registered stages.

```bash
stagekit count   # 4658
```

### `stagekit run [stages...] [--text <string>] [--limit N]`

Run one or more stages, in order, over some input.

- Each `stage` is either an exact id (`mod-0015`) or a name fragment
  (`slug`). Fragments must resolve to exactly one stage, otherwise the CLI
  lists the candidates and exits.
- `--text` / `-t` supplies the input inline. Without it, input is read from
  `stdin`.
- `--limit` / `-n` stops after N stages.
- `--pick` / `-p` chooses which match to use when a fragment is ambiguous.

```bash
# inline input
stagekit run mod-0055 mod-0015 --text "  Hello   World  "

# piped input
echo "My Article Title" | stagekit run slug base64

# stop early
stagekit run normalize slug --limit 1 --text "a   b"
```

### Resolving ambiguous names

Names are not unique. If a fragment matches several stages, the CLI uses
the first, warns on `stderr`, and tells you the candidates:

```bash
$ stagekit run slug --text "My Article"
stagekit: "slug" matches 18 stages (mod-0015, mod-0070, ...); using mod-0015.
Pass --pick N to choose another.
my-article
```

Pass `--pick 2` to select the second candidate. For a guaranteed result,
use the exact id instead.


## Piping

Because input comes from `stdin` and output goes to `stdout`, `stagekit`
composes with the rest of your shell:

```bash
cat names.txt | stagekit run trim | sort | uniq
curl -s https://example.com/titles | stagekit run slug base64
```

## Exit codes

| code | meaning |
| --- | --- |
| 0 | success |
| 1 | bad usage, unknown stage, or ambiguous stage name |

Diagnostics go to `stderr`; only results go to `stdout`, so pipes stay clean.
