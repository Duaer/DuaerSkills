> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/biomodels.md

---
name: duaer-biomodels
description: >-
  Duaer BioModels. Search systems biology models in EBI BioModels.
  One successful search uses 1 Duaer credit.
---

# Duaer BioModels

Search systems biology models in EBI BioModels. Data comes from BioModels.

## When to use

- Find systems biology models in BioModels.
- Look up one BioModels id.

## When not to use

- Pathways. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as apoptosis.
- `id` — Optional. Model id such as BIOMD0000000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10` — BioModels matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BioModels`), `title`, `url`, and `summary`, plus:

- `modelId`, `format` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索 BiGG](https://skills.duaer.com/zh/bigg.md)
