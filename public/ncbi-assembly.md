> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ncbi-assembly.md

---
name: duaer-ncbi-assembly
description: >-
  Duaer NCBI Assembly. Search genome assemblies in NCBI.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Assembly

Search genome assemblies in NCBI. Data comes from NCBI Assembly.

## When to use

- Find genome assemblies in NCBI.
- Look up one assembly accession.

## When not to use

- UCSC assemblies. Use https://skills.duaer.com/ucsc.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-assembly?words=GRCh38&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as GRCh38.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-assembly?words=GRCh38&limit=10` — assemblies matching GRCh38.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI Assembly`), `title`, `url`, and `summary`, plus:

- `assemblyId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
