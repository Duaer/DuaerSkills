> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pride.md

---
name: duaer-pride
description: >-
  Duaer PRIDE. Search proteomics projects in PRIDE.
  One successful search uses 1 Duaer credit.
---

# Duaer PRIDE

Search proteomics projects in PRIDE. Data comes from PRIDE.

## When to use

- Find public proteomics projects in PRIDE.
- Look up a PXD project.

## When not to use

- ProteomeXchange dataset records. Use https://skills.duaer.com/proteomexchange.md.

## Call

`GET https://api.duaer.com/v1/data/pride?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — project words, such as insulin.
- `id` — Optional. PRIDE accession such as PXD000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pride?words=insulin&limit=10` — PRIDE projects matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PRIDE`), `title`, `url`, and `summary`, plus:

- `prideId`, `description`, `organisms`, `keywords`, `doi`, `publicationDate`, `instruments` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
