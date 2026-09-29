> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/npm.md

---
name: duaer-npm
description: >-
  Duaer npm packages. JavaScript packages in the npm registry by name or keywords, with latest version, license, and weekly downloads.
  One successful search uses 1 Duaer credit.
---

# Duaer npm packages

Duaer npm packages searches the public npm registry and ranks results by npm relevance, including popularity.

## When to use

- Find a JavaScript library for a task and compare downloads.
- Get the latest version and license of a package.

## When not to use

- Python packages. Use https://skills.duaer.com/pypi.md.
- Vulnerabilities in a package. Use https://skills.duaer.com/osv.md.

## Call

`GET https://api.duaer.com/v1/data/npm?words=date%20picker`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Package name or keywords, such as date picker.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/npm?words=date%20picker` — date picker libraries.
- `GET https://api.duaer.com/v1/data/npm?words=react&limit=3` — the top React packages.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `package`, `version`, `description`, `license` — package facts.
- `weeklyDownloads`, `monthlyDownloads`, `dependents` — popularity.
- `keywords`, `repository`, `published` — tags, source repository, and release date.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pypi.md — Duaer PyPI package
- https://skills.duaer.com/osv.md — Duaer OSV vulnerabilities

## Related skills

- [PyPI package in Duaer](https://skills.duaer.com/pypi.md)
- [OSV vulnerabilities in Duaer](https://skills.duaer.com/osv.md)
