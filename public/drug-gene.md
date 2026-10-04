> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/drug-gene.md

---
name: duaer-drug-gene
description: >-
  Duaer drug–gene. Search drug–gene interactions from DGIdb.
  One successful search uses 1 Duaer credit.
---

# Duaer drug–gene

Search drug–gene interactions from DGIdb. Data comes from DGIdb.

## When to use

- List drugs that interact with a gene.
- Keep only approved drugs.

## When not to use

- Mechanisms of action by drug. Use https://skills.duaer.com/mechanisms.md.

## Call

`GET https://api.duaer.com/v1/data/drug-gene?gene=EGFR&approved=yes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `gene` or `drug` (or both).

- `gene` — gene symbol (e.g. `EGFR`).
- `drug` — drug name (e.g. `imatinib`).
- `approved` — Optional. `yes` or `no` to keep only approved or unapproved drugs.
- `limit` — Optional. From 1 to 20. Default 10. Results prefer higher interaction score.

## Examples

- `GET https://api.duaer.com/v1/data/drug-gene?gene=EGFR&approved=yes&limit=10` — approved drugs for EGFR.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DGIdb`), `title`, `url`, and `summary`, plus:

- `gene`, `geneConceptId`, `drug`, `drugConceptId` — text.
- `approved` — true or false.
- `interactionTypes` — text.
- `interactionScore` — number.
- `sources` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
