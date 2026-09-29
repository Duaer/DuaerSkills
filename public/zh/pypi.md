> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pypi.md

---
name: duaer-pypi
description: >-
  Duaer PyPI package. One Python package from PyPI with latest version, license, supported Python versions, links, and known vulnerabilities.
  One successful search uses 1 Duaer credit.
---

# Duaer PyPI package

Duaer PyPI package reads one project from the Python Package Index by its exact name.

## When to use

- Check the latest version and Python support of a dependency.
- See whether PyPI lists known vulnerabilities for the latest release.

## When not to use

- Searching by keyword. Use https://skills.duaer.com/npm.md for JavaScript; PyPI has no search API.
- Vulnerabilities in older versions. Use https://skills.duaer.com/osv.md.

## Call

`GET https://api.duaer.com/v1/data/pypi?package=requests`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `package`.

- `package` — Exact package name, such as requests or numpy.

## Examples

- `GET https://api.duaer.com/v1/data/pypi?package=requests` — the requests package.
- `GET https://api.duaer.com/v1/data/pypi?package=numpy` — the numpy package.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `package`, `version`, `description`, `license` — package facts.
- `requiresPython`, `dependencies` — Python range and number of declared dependencies.
- `author`, `homepage`, `documentation` — people and links.
- `knownVulnerabilities`, `released` — vulnerabilities PyPI lists for this release, and its upload time.

The search returns one row, or none when the name does not exist.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities
- https://skills.duaer.com/npm.md — Duaer npm packages

## 相关技能

- [在 Duaer 里查OSV 开源漏洞](https://skills.duaer.com/zh/osv.md)
- [在 Duaer 里查npm 软件包](https://skills.duaer.com/zh/npm.md)
