> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/organisms.md

---
name: duaer-organisms
description: >-
  Duaer organisms. Search organism names. Use the scientific name with proteins.organism and structures.organism.
  One successful search uses 1 Duaer credit.
---

# Duaer organisms

Search organism names. Use the scientific name with proteins.organism and structures.organism. Data comes from UniProt.

## When to use

- Get the scientific name or taxonomy id before searching proteins or structures.
- Look up the common name of a species.

## When not to use

- Full taxonomic classification. Use https://skills.duaer.com/ncbi-taxon.md.

## Call

`GET https://api.duaer.com/v1/data/organisms?q=human&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required. Fields combine. Search with `q` first; use `taxonId` only when you already have it from a result.

- `q` — words in the scientific or common name.
- `taxonId` — Optional. NCBI / UniProt taxon id from a result (`taxonId`), such as `9606`.
- `scientific` — Optional. Scientific name, such as `Homo sapiens`.
- `common` — Optional. Common name, such as `human`.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/organisms?q=human&limit=10` — organisms matching human.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniProt`), `title`, `url`, and `summary`, plus:

- `taxonId` — number.
- `scientificName`, `commonName`, `mnemonic`, `rank` — text.

Use `title` (scientific name) as `organism` when searching proteins or structures. Reuse `taxonId` as `taxonomyId` on proteins.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索细胞系](https://skills.duaer.com/zh/cell-lines.md)
