> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/orthologs.md

---
name: duaer-orthologs
description: >-
  Search cross-species orthologs through Duaer (MyGene HomoloGene). One successful search uses 1 Duaer credit.
---

# Duaer orthologs

Search cross-species orthologs through Duaer (MyGene HomoloGene). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/orthologs?gene=INS&species=9606&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `gene` is required.
- `gene` — gene symbol or NCBI Gene id. Look up symbols with https://skills.duaer.com/genes.md.
- `species` — optional. NCBI taxonomy id for the query gene. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.
- `orthologSpecies` — optional. Keep only orthologs for this taxonomy id (for example `10090` for mouse).
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
