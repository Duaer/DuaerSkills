> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/expression.md

---
name: duaer-expression
description: >-
  Duaer expression. Search GTEx median tissue expression.
  One successful search uses 1 Duaer credit.
---

# Duaer expression

Search GTEx median tissue expression. Data comes from GTEx.

## When to use

- Compare median expression of a gene across human tissues.
- Check expression in one tissue.

## When not to use

- Protein-level tissue enrichment. Use https://skills.duaer.com/atlas.md.

## Call

`GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least `gene` or `gencodeId` is required.

- `gene` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.
- `gencodeId` — Optional. Ensembl/Gencode id from a result, such as `ENSG00000254647.6`.
- `tissue` — Optional. GTEx tissue id, such as `Pancreas` or `Adipose_Subcutaneous`.
- `limit` — Optional. From 1 to 20. Default 10. Results are sorted by median TPM descending.

## Examples

- `GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10` — insulin expression by tissue.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GTEx`), `title`, `url`, and `summary`, plus:

- `gene`, `gencodeId`, `tissue`, `tissueLabel` — text.
- `median` — number.
- `unit`, `ontologyId`, `dataset` — text.

Reuse `gene` when searching proteins or genes. Reuse `gencodeId` in `gencodeId` for an exact expression lookup. For gene–disease associations, use https://skills.duaer.com/targets.md. For HPA tissue enrichment, use https://skills.duaer.com/atlas.md.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` that GTEx does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/geo.md — Duaer GEO

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
