> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gtex-expression.md

---
name: duaer-gtex-expression
description: >-
  Duaer GTEx expression. Look up GTEx median tissue expression for a gene.
  One successful search uses 1 Duaer credit.
---

# Duaer GTEx expression

Look up GTEx median tissue expression for a gene. Data comes from GTEx expression.

## When to use

- Look up GTEx median tissue expression for a gene.
- Compare tissues for one gene.

## When not to use

- eQTLs. Use https://skills.duaer.com/gtex-eqtl.md.

## Call

`GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbol, such as BRCA1.
- `id` — Optional. Gencode id such as ENSG00000012048.20.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10` — GTEx expression of BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GTEx expression`), `title`, `url`, and `summary`, plus:

- `geneSymbol`, `gencodeId`, `tissue` — text.
- `median` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that GTEx does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gtex-eqtl.md — Duaer GTEx eQTL
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/atlas.md — Duaer tissue atlas

## Related skills

- [Search GTEx eQTL in Duaer](https://skills.duaer.com/gtex-eqtl.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
