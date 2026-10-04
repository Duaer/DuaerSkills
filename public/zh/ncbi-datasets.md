> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ncbi-datasets.md

---
name: duaer-ncbi-datasets
description: >-
  Duaer NCBI Datasets. Look up genes in NCBI Datasets.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Datasets

Look up genes in NCBI Datasets. Data comes from NCBI Datasets.

## When to use

- Look up gene records in NCBI Datasets.
- Get gene ids and descriptions by symbol.

## When not to use

- MyGene search. Use https://skills.duaer.com/genes.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-datasets?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 672.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-datasets?words=BRCA1&limit=10` — NCBI Datasets genes for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI Datasets`), `title`, `url`, and `summary`, plus:

- `geneId`, `symbol` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索 Ensembl](https://skills.duaer.com/zh/ensembl.md)
