> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pathways.md

---
name: duaer-pathways
description: >-
  Search Reactome pathways through Duaer. Use the pathwayId with proteins.pathway. One successful search uses 1 Duaer credit.
---

# Duaer pathways

Search Reactome pathways through Duaer. Use the pathwayId with proteins.pathway. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` first; use `id` only when you already have it from a result.
- Word searches default to Homo sapiens pathways.
- `q` — words in the pathway name or summary.
- `id` — optional. Reactome pathway id from a result (`pathwayId`), such as `R-HSA-264876`.
- `name` — optional. Pathway name.
- `limit` — optional. From 1 to 20. Default 10.
- Use `pathwayId` as `pathway` when searching proteins. Reuse `pathwayId` in `id` for an exact lookup.
- Open `browserUrl` for the interactive Reactome diagram, or `diagramUrl` for a PNG export.
- Result fields: source, title, url, summary, pathwayId, dbId, stIdVersion, species, browserUrl, diagramUrl, figureUrl, hasDiagram, hasEHLD, isDisease, doi, releaseDate, lastUpdatedDate, compartments, compartmentAccessions, goId, goName, schemaClass. Words and name searches are enriched with Reactome detail, same as an id lookup.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
