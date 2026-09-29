> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/github-repos.md

---
name: duaer-github-repos
description: >-
  Duaer GitHub repositories. GitHub: public repositories by words and language, most starred or most recently updated.
  One successful search uses 1 Duaer credit.
---

# Duaer GitHub repositories

Duaer GitHub repositories searches public GitHub repositories and returns stars, forks, license, and the last push.

## When to use

- Find the most starred vector database projects in Python.
- Spot recently updated LLM tools.

## When not to use

- Security advisories. Use https://skills.duaer.com/osv.md.
- Published packages. Use https://skills.duaer.com/pypi.md.

## Call

`GET https://api.duaer.com/v1/data/github-repos?words=vector%20database`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `language`.

- `words` — Words to search, such as vector database.
- `language` — Optional. Programming language such as Python.
- `sort` — Optional. `stars` or `updated`. Default stars.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/github-repos?words=vector%20database&language=Python` — top Python vector database projects.
- `GET https://api.duaer.com/v1/data/github-repos?words=llm&sort=updated` — recently updated LLM repositories.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `repository`, `description`, `homepage` — owner/name and about.
- `stars`, `forks`, `openIssues` — popularity and activity.
- `language`, `topics`, `license` — stack, tags, and SPDX license.
- `pushedAt`, `archived` — last push and whether it is archived.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/hacker-news.md — Duaer Hacker News
- https://skills.duaer.com/npm.md — Duaer npm packages

## 相关技能

- [在 Duaer 里查Hacker News 讨论](https://skills.duaer.com/zh/hacker-news.md)
- [在 Duaer 里查npm 软件包](https://skills.duaer.com/zh/npm.md)
