> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/biorxiv.md

---
name: duaer-biorxiv
description: >-
  Duaer bioRxiv. Search bioRxiv preprints.
  One successful search uses 1 Duaer credit.
---

# Duaer bioRxiv

Search bioRxiv preprints. Data comes from bioRxiv.

## When to use

- Find bioRxiv preprints.
- Look up one bioRxiv DOI.

## When not to use

- medRxiv preprints. Use https://skills.duaer.com/medrxiv.md.

## Call

`GET https://api.duaer.com/v1/data/biorxiv?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as BRCA1.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/biorxiv?words=BRCA1&limit=10` — bioRxiv preprints on BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`bioRxiv`), `title`, `url`, and `summary`, plus:

- `preprintId`, `doi`, `authors`, `published` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/preprints.md — Duaer preprints
- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC

## Related skills

- [Search preprints in Duaer](https://skills.duaer.com/preprints.md)
- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
