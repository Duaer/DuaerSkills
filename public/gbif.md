> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gbif.md

---
name: duaer-gbif
description: >-
  Duaer GBIF. Search species in GBIF.
  One successful search uses 1 Duaer credit.
---

# Duaer GBIF

Search species in GBIF. Data comes from GBIF.

## When to use

- Find species and GBIF taxon keys.
- Look up one GBIF key.

## When not to use

- Marine species. Use https://skills.duaer.com/worms.md.

## Call

`GET https://api.duaer.com/v1/data/gbif?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Homo sapiens.
- `id` — Optional. Id such as 2436436.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gbif?words=Homo%20sapiens&limit=10` — GBIF species matching Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GBIF`), `title`, `url`, and `summary`, plus:

- `usageKey`, `scientificName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/ncbi-taxon.md — Duaer NCBI Taxonomy

## Related skills

- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search NCBI Taxonomy in Duaer](https://skills.duaer.com/ncbi-taxon.md)
