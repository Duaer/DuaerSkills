> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/hgnc.md

---
name: duaer-hgnc
description: >-
  Duaer HGNC. Look up approved gene symbols from HGNC.
  One successful search uses 1 Duaer credit.
---

# Duaer HGNC

Look up approved gene symbols from HGNC. Data comes from HGNC.

## When to use

- Check the approved human gene symbol and HGNC id.
- Resolve a previous or alias symbol.

## When not to use

- Gene ids across species. Use https://skills.duaer.com/genes.md.

## Call

`GET https://api.duaer.com/v1/data/hgnc?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — gene symbol or name words, such as BRCA1.
- `id` — Optional. HGNC id such as HGNC:1100 or 1100.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hgnc?words=BRCA1&limit=10` — HGNC records for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HGNC`), `title`, `url`, and `summary`, plus:

- `hgncId`, `symbol`, `name`, `locusGroup`, `locusType`, `location`, `ensemblId`, `entrezId`, `uniprotIds`, `status` — text.

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
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
