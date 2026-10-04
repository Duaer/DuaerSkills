> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/expression.md

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

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` that GTEx does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search interactions in Duaer](https://skills.duaer.com/interactions.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
- [Search GEO in Duaer](https://skills.duaer.com/geo.md)
