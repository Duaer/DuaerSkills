> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/targets.md

---
name: duaer-targets
description: >-
  Duaer targets. Search Open Targets gene–disease associations.
  One successful search uses 1 Duaer credit.
---

# Duaer targets

Search Open Targets gene–disease associations. Data comes from Open Targets.

## When to use

- Rank diseases associated with a gene.
- Check the evidence score for one gene–disease pair.

## When not to use

- Drugs that act on a gene. Use https://skills.duaer.com/drug-gene.md.

## Call

`GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least `gene` or `disease` is required.

- `gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- `disease` — Optional. Disease name or ontology id (`EFO_` / `MONDO_`). Alone, returns associated targets. With `gene`, filters that gene’s associations. Look up names with https://skills.duaer.com/diseases.md.
- `limit` — Optional. From 1 to 20. Default 10. Results are sorted by association score descending.

## Examples

- `GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10` — diseases associated with INS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Open Targets`), `title`, `url`, and `summary`, plus:

- `gene`, `ensemblId`, `disease`, `diseaseId` — text.
- `score` — number.

Reuse `gene` when searching proteins, genes, expression, interactions, or orthologs. Reuse `disease` when searching diseases or proteins.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` that Open Targets does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
- [Search activities in Duaer](https://skills.duaer.com/activities.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
