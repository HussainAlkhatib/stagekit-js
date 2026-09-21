# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 1.x     | yes       |

## Reporting a Vulnerability

Please **do not** open a public issue for security problems. Instead, report
privately via GitHub's "Report a vulnerability" feature on the repository's
Security tab, or email the maintainer listed in `package.json`.

Include:

- a description of the issue and its impact,
- steps to reproduce,
- any affected versions,
- a suggested fix if you have one.

We aim to acknowledge reports within a few days and to ship a fix or
mitigation as soon as is practical.

## Design guarantees

stagekit-js is intentionally small and auditable:

- **Zero runtime dependencies.** Nothing is pulled in transitively.
- **No `eval`, no `new Function`, no dynamic `require`** in the library or CLI.
- **Pure stages.** Stages receive a string and return a string; they do not
  touch the filesystem, network, or environment.
- **No code execution from data.** The `compose` output is data, not code.

These properties make the attack surface minimal. If you find a way to break
any of them, that is a security bug worth reporting.
