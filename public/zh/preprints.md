> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/preprints.md

---
name: duaer-preprints
description: >-
  Duaer preprints. Search bioRxiv and medRxiv preprints (Europe PMC).
  One successful search uses 1 Duaer credit.
---

# Duaer preprints

Search bioRxiv and medRxiv preprints (Europe PMC). Data comes from EuropePMC.

## When to use

- Find recent bioRxiv or medRxiv preprints on a topic.
- Filter preprints by author, DOI, or year.

## When not to use

- Published papers. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/preprints?q=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required (not `server` alone). Fields combine.

- `q` — words in the title or abstract.
- `title` — Optional. Words in the title.
- `author` — Optional. Author name.
- `doi` — Optional. Digital object identifier.
- `server` — Optional. `bioRxiv` or `medRxiv`. Omit for both.
- `yearFrom` — Optional. First publication year (1000–2100).
- `yearTo` — Optional. Last publication year (1000–2100).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/preprints?q=insulin&limit=10` — preprints matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EuropePMC`), `title`, `url`, and `summary`, plus:

- `preprintId`, `doi`, `server`, `authors`, `published` — text.
- `year` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
