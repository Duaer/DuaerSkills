> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/atlas.md

---
name: duaer-atlas
description: >-
  Duaer tissue atlas. Search Human Protein Atlas tissue-enriched expression.
  One successful search uses 1 Duaer credit.
---

# Duaer tissue atlas

Search Human Protein Atlas tissue-enriched expression. Data comes from HPA.

## When to use

- Check which tissues enrich a gene in the Human Protein Atlas.
- Compare enrichment for one tissue.

## When not to use

- Median RNA expression by tissue. Use https://skills.duaer.com/expression.md.

## Call

`GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`gene` is required.

- `gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- `tissue` — Optional. Keep only enriched tissues whose name contains this text (for example `pancreas`).
- `limit` — Optional. From 1 to 20. Default 10. Results sort by nTPM descending.

## Examples

- `GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10` — tissue enrichment of INS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`HPA`), `title`, `url`, and `summary`, plus:

- `gene`, `ensemblId`, `description`, `tissue` — text.
- `nTPM` — number.
- `specificity`, `distribution`, `proteinClasses`, `secretomeLocation` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` that the Human Protein Atlas does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
