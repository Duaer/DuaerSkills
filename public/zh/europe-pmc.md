> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/europe-pmc.md

---
name: duaer-europe-pmc
description: >-
  Duaer Europe PMC. Search life-science literature in Europe PMC.
  One successful search uses 1 Duaer credit.
---

# Duaer Europe PMC

Search life-science literature in Europe PMC. Data comes from Europe PMC.

## When to use

- Find life-science literature in Europe PMC.
- Look up one article by id.

## When not to use

- OpenAlex papers with citations. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/europe-pmc?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 42757486.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/europe-pmc?words=BRCA1&limit=10` — Europe PMC articles on BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Europe PMC`), `title`, `url`, and `summary`, plus:

- `pmid`, `doi`, `year`, `journal`, `authors` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
- [在 Duaer 里检索 Crossref](https://skills.duaer.com/zh/crossref.md)
