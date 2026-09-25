> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/organisms.md

---
name: duaer-organisms
description: >-
  Search organism names through Duaer. Use the scientific name with proteins.organism and structures.organism. One successful search uses 1 Duaer credit.
---

# Duaer organisms

Search organism names through Duaer. Use the scientific name with proteins.organism and structures.organism. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/organisms?q=human&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` first; use `taxonId` only when you already have it from a result.
- `q` — words in the scientific or common name.
- `taxonId` — optional. NCBI / UniProt taxon id from a result (`taxonId`), such as `9606`.
- `scientific` — optional. Scientific name, such as `Homo sapiens`.
- `common` — optional. Common name, such as `human`.
- `limit` — optional. From 1 to 20. Default 10.
- Use `title` (scientific name) as `organism` when searching proteins or structures. Reuse `taxonId` as `taxonomyId` on proteins.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索细胞系](https://skills.duaer.com/zh/cell-lines.md)
