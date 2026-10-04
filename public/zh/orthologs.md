> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/orthologs.md

---
name: duaer-orthologs
description: >-
  Duaer orthologs. Search cross-species orthologs (MyGene HomoloGene).
  One successful search uses 1 Duaer credit.
---

# Duaer orthologs

Search cross-species orthologs (MyGene HomoloGene). Data comes from MyGene.

## When to use

- Find the matching gene in another species.
- Map a human gene to mouse or zebrafish.

## When not to use

- Ensembl Compara orthologues. Use https://skills.duaer.com/ensembl-homology.md.

## Call

`GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`gene` is required.

- `gene` — gene symbol or NCBI Gene id. Look up symbols with https://skills.duaer.com/genes.md.
- `species` — Optional. NCBI taxonomy id for the query gene. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.
- `orthologSpecies` — Optional. Keep only orthologs for this taxonomy id (for example `10090` for mouse).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10` — orthologs of human INS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MyGene`), `title`, `url`, and `summary`, plus:

- `gene`, `geneId`, `name` — text.
- `taxId` — number.
- `organism`, `ensemblId` — text.
- `homologeneId` — number.
- `queryGene` — text.
- `queryTaxId` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `gene` without a HomoloGene group, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
