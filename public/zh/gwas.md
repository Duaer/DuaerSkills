> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/gwas.md

---
name: duaer-gwas
description: >-
  Duaer GWAS. Search GWAS Catalog associations (REST API v2).
  One successful search uses 1 Duaer credit.
---

# Duaer GWAS

Search GWAS Catalog associations (REST API v2). Data comes from GWAS Catalog.

## When to use

- Find GWAS associations for a gene, variant, or trait.
- Check p-values and effect sizes for an rs id.

## When not to use

- Clinical significance of a variant. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, `gene`, `rsId`, or `trait` (or combine).

- `words` — gene symbol or rs id (`rs…`).
- `gene` — Optional. Mapped gene symbol.
- `rsId` — Optional. Variant rs id (`rs7903146`).
- `trait` — Optional. EFO trait text.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10` — GWAS associations for TCF7L2.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GWAS Catalog`), `title`, `url`, and `summary`, plus:

- `associationId`, `rsId`, `mappedGenes`, `efoTraits`, `reportedTrait`, `pValue`, `beta`, `accessionId`, `pubmedId`, `locations` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索不良反应](https://skills.duaer.com/zh/adverse-events.md)
