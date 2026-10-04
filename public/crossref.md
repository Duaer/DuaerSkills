> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/crossref.md

---
name: duaer-crossref
description: >-
  Duaer Crossref. Search scholarly works in Crossref.
  One successful search uses 1 Duaer credit.
---

# Duaer Crossref

Search scholarly works in Crossref. Data comes from Crossref.

## When to use

- Find scholarly works and DOI metadata in Crossref.
- Look up one DOI.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/crossref?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 10.1038/nature12373.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/crossref?words=BRCA1&limit=10` — Crossref works matching BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Crossref`), `title`, `url`, and `summary`, plus:

- `doi`, `type`, `year`, `container` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/europe-pmc.md — Duaer Europe PMC
- https://skills.duaer.com/preprints.md — Duaer preprints

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search Europe PMC in Duaer](https://skills.duaer.com/europe-pmc.md)
- [Search preprints in Duaer](https://skills.duaer.com/preprints.md)
