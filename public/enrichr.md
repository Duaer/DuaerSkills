> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/enrichr.md

---
name: duaer-enrichr
description: >-
  Duaer Enrichr. Search Enrichr gene-set libraries by gene symbol or library name.
  One successful search uses 1 Duaer credit.
---

# Duaer Enrichr

Search Enrichr gene-set libraries by gene symbol or library name. Data comes from Enrichr.

## When to use

- Find Enrichr gene-set libraries that contain a gene.
- Look up one library by name.

## When not to use

- Run enrichment on a gene list. Use https://skills.duaer.com/string-enrichment.md.

## Call

`GET https://api.duaer.com/v1/data/enrichr?words=TP53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as TP53.
- `id` — Optional. Id such as TP53.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/enrichr?words=TP53&limit=10` — libraries with TP53.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Enrichr`), `title`, `url`, and `summary`, plus:

- `library`, `term`, `gene` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/pathways.md — Duaer pathways

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
