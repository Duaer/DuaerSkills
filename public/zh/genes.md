> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/genes.md

---
name: duaer-genes
description: >-
  Search genes through Duaer. Use the symbol with proteins.gene. One successful search uses 1 Duaer credit.
---

# Duaer genes

Search genes through Duaer. Use the symbol with proteins.gene. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/genes?q=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` or `symbol` first; use `id` only when you already have an NCBI Gene id.
- `q` — words in the gene symbol, name, or summary.
- `symbol` — optional. Official gene symbol, such as `INS`.
- `id` — optional. NCBI Gene id from a result (`geneId`), such as `3630`.
- `species` — optional. Species for words/symbol search. Default `human`.
- `limit` — optional. From 1 to 20. Default 10.
- Use `symbol` as `gene` when searching proteins. Reuse `geneId` in `id` for an exact lookup.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
