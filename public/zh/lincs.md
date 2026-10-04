> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/lincs.md

---
name: duaer-lincs
description: >-
  Duaer LINCS. Search LINCS portal datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer LINCS

Search LINCS portal datasets. Data comes from LINCS.

## When to use

- Find LINCS perturbation datasets.
- Look up one LINCS dataset id.

## When not to use

- GEO series. Use https://skills.duaer.com/geo.md.

## Call

`GET https://api.duaer.com/v1/data/lincs?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as kinase.
- `id` — Optional. Id such as LDS-1234.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/lincs?words=kinase&limit=10` — LINCS datasets matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`LINCS`), `title`, `url`, and `summary`, plus:

- `lincsId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
