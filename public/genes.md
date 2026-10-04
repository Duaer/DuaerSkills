> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/genes.md

---
name: duaer-genes
description: >-
  Duaer genes. MyGene.info genes by words, official symbol, or NCBI Gene id, with name, aliases, Ensembl id, species, and map location.
  One successful search uses 1 Duaer credit.
---

# Duaer genes

Duaer genes searches MyGene.info for genes. It uses one search field: `id` first, then `symbol`, then `q`.

## When to use

- Turn a gene symbol or name into an NCBI Gene id and Ensembl id.
- Check aliases and the chromosome location of a gene.
- Get the official symbol before searching proteins or variants.

## When not to use

- Protein function, disease, and location. Use https://skills.duaer.com/proteins.md.
- Variants in a gene. Use https://skills.duaer.com/variants.md.
- Official HGNC nomenclature records. Use https://skills.duaer.com/hgnc.md.

## Call

`GET https://api.duaer.com/v1/data/genes?symbol=INS`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `q`, `symbol`, or `id`. When you send more than one, Duaer uses `id` if it is a number, else `symbol`, else `q`.

- `q` — Words in the gene symbol, name, or summary.
- `symbol` — Official gene symbol, such as `INS`.
- `id` — NCBI Gene id, such as `3630`. Reuse `geneId` from a result for an exact lookup.
- `species` — Optional. Species for `q` and `symbol`, such as `human`, `mouse`, or a taxonomy id. Default `human`. Ignored with `id`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/genes?symbol=INS` — human insulin gene.
- `GET https://api.duaer.com/v1/data/genes?symbol=Trp53&species=mouse` — mouse p53 gene.
- `GET https://api.duaer.com/v1/data/genes?id=3630` — one gene by NCBI Gene id.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MyGene`), `title`, `url`, and `summary`, plus:

- `geneId` — NCBI Gene id.
- `symbol`, `name` — official symbol and full name.
- `aliases` — other symbols.
- `ensemblId` — Ensembl gene id.
- `taxId` — NCBI taxonomy id of the species.
- `mapLocation` — cytogenetic location, such as `11p15.5`.
- `typeOfGene` — gene type, such as `protein-coding`.

Use `symbol` as `gene` in https://skills.duaer.com/proteins.md and https://skills.duaer.com/variants.md.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
- [Search GEO in Duaer](https://skills.duaer.com/geo.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
- [Life research brief employee in Duaer](https://skills.duaer.com/life-research-brief.md)
