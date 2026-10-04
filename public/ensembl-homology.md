> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ensembl-homology.md

---
name: duaer-ensembl-homology
description: >-
  Duaer Ensembl homology. List Ensembl compara orthologues for a gene symbol.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl homology

List Ensembl compara orthologues for a gene symbol. Data comes from Ensembl homology.

## When to use

- List Ensembl Compara orthologues for a gene symbol.
- Map a gene across many species.

## When not to use

- MyGene orthologs. Use https://skills.duaer.com/orthologs.md.

## Call

`GET https://api.duaer.com/v1/data/ensembl-homology?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbol, such as BRCA1.
- `id` — Optional. Gene symbol such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ensembl-homology?words=BRCA1&limit=10` — Ensembl orthologues of BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Ensembl homology`), `title`, `url`, and `summary`, plus:

- `geneId`, `species`, `type`, `proteinId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/genes.md — Duaer genes

## Related skills

- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
- [Search Ensembl in Duaer](https://skills.duaer.com/ensembl.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
