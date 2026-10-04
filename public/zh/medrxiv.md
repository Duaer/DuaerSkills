> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/medrxiv.md

---
name: duaer-medrxiv
description: >-
  Duaer medRxiv. Search medRxiv preprints.
  One successful search uses 1 Duaer credit.
---

# Duaer medRxiv

Search medRxiv preprints. Data comes from medRxiv.

## When to use

- Find medRxiv preprints.
- Look up one medRxiv DOI.

## When not to use

- bioRxiv preprints. Use https://skills.duaer.com/biorxiv.md.

## Call

`GET https://api.duaer.com/v1/data/medrxiv?words=covid&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as covid.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/medrxiv?words=covid&limit=10` — medRxiv preprints on covid.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`medRxiv`), `title`, `url`, and `summary`, plus:

- `preprintId`, `doi`, `authors`, `published` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Europe PMC](https://skills.duaer.com/zh/europe-pmc.md)
