> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ucsc.md

---
name: duaer-ucsc
description: >-
  Duaer UCSC. Search UCSC genome assemblies.
  One successful search uses 1 Duaer credit.
---

# Duaer UCSC

Search UCSC genome assemblies. Data comes from UCSC.

## When to use

- Find UCSC genome assemblies.
- Look up one assembly name.

## When not to use

- NCBI assemblies. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

`GET https://api.duaer.com/v1/data/ucsc?words=hg38&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — search words, such as hg38.
- `id` — Optional. Id such as hg38.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ucsc?words=hg38&limit=10` — UCSC assemblies matching hg38.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UCSC`), `title`, `url`, and `summary`, plus:

- `genome`, `organism` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Ensembl in Duaer](https://skills.duaer.com/ensembl.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
