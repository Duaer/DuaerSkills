> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/bv-brc.md

---
name: duaer-bv-brc
description: >-
  Duaer BV-BRC. Search pathogen genomes in BV-BRC.
  One successful search uses 1 Duaer credit.
---

# Duaer BV-BRC

Search pathogen genomes in BV-BRC. Data comes from BV-BRC.

## When to use

- Find pathogen genomes in BV-BRC.
- Look up one genome id.

## When not to use

- Genome assemblies in NCBI. Use https://skills.duaer.com/ncbi-assembly.md.

## Call

`GET https://api.duaer.com/v1/data/bv-brc?words=tuberculosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as tuberculosis.
- `id` — Optional. Id such as 83332.12.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bv-brc?words=tuberculosis&limit=10` — BV-BRC genomes matching tuberculosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BV-BRC`), `title`, `url`, and `summary`, plus:

- `genomeId`, `genomeName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
