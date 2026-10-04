> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/icite.md

---
name: duaer-icite
description: >-
  Duaer iCite. Look up NIH relative citation ratios in iCite.
  One successful search uses 1 Duaer credit.
---

# Duaer iCite

Look up NIH relative citation ratios in iCite. Data comes from iCite.

## When to use

- Get the NIH relative citation ratio of a PubMed article.
- Compare citation impact of PMIDs.

## When not to use

- Citation counts from OpenAlex. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/icite?words=28973672&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 28973672.
- `id` — Optional. Id such as 28973672.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/icite?words=28973672&limit=10` — iCite metrics for PMID 28973672.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`iCite`), `title`, `url`, and `summary`, plus:

- `pmid` — text.
- `rcr`, `citationCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Europe PMC](https://skills.duaer.com/zh/europe-pmc.md)
