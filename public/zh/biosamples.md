> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/biosamples.md

---
name: duaer-biosamples
description: >-
  Duaer BioSamples. Search biological samples in BioSamples.
  One successful search uses 1 Duaer credit.
---

# Duaer BioSamples

Search biological samples in BioSamples. Data comes from BioSamples.

## When to use

- Find biological samples in BioSamples.
- Look up one sample by accession.

## When not to use

- Sequencing runs. Use https://skills.duaer.com/ncbi-sra.md.

## Call

`GET https://api.duaer.com/v1/data/biosamples?words=blood&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — sample words, such as blood.
- `id` — Optional. Accession such as SAMN00000000.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/biosamples?words=blood&limit=10` — samples matching blood.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BioSamples`), `title`, `url`, and `summary`, plus:

- `accession`, `name` — text.
- `taxId` — number.
- `organism`, `status` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索 BioStudies](https://skills.duaer.com/zh/biostudies.md)
- [在 Duaer 里检索细胞系](https://skills.duaer.com/zh/cell-lines.md)
