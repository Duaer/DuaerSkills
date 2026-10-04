> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ncbi-sra.md

---
name: duaer-ncbi-sra
description: >-
  Duaer NCBI SRA. Search sequencing runs in NCBI SRA.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI SRA

Search sequencing runs in NCBI SRA. Data comes from NCBI SRA.

## When to use

- Find sequencing runs in SRA.
- Look up one SRA accession.

## When not to use

- BioProjects. Use https://skills.duaer.com/ncbi-bioproject.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-sra?words=RNA-seq&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as RNA-seq.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-sra?words=RNA-seq&limit=10` — SRA records matching RNA-seq.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI SRA`), `title`, `url`, and `summary`, plus:

- `sraId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
