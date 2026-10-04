> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pathways.md

---
name: duaer-pathways
description: >-
  Duaer pathways. Search Reactome pathways. Use the pathwayId with proteins.pathway.
  One successful search uses 1 Duaer credit.
---

# Duaer pathways

Search Reactome pathways. Use the pathwayId with proteins.pathway. Data comes from Reactome.

## When to use

- Get a Reactome pathway id before searching proteins.
- Find human pathways for a process or molecule.

## When not to use

- KEGG pathways. Use https://skills.duaer.com/kegg.md.

## Call

`GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `q`, `name`, or `id`. When you send more than one, Duaer uses `id`, else `name`, else `q`. Search with `q` first; use `id` only when you already have it from a result. Word searches default to Homo sapiens pathways.

- `q` — words in the pathway name or summary.
- `id` — Optional. Reactome pathway id from a result (`pathwayId`), such as `R-HSA-264876`.
- `name` — Optional. Pathway name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pathways?q=insulin&limit=10` — human Reactome pathways matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Reactome`), `title`, `url`, and `summary`, plus:

- `pathwayId`, `dbId`, `stIdVersion`, `species`, `browserUrl`, `diagramUrl`, `figureUrl` — text.
- `hasDiagram`, `hasEHLD`, `isDisease` — true or false.
- `doi`, `releaseDate`, `lastUpdatedDate`, `compartments`, `compartmentAccessions`, `goId`, `goName`, `schemaClass` — text.

Use `pathwayId` as `pathway` when searching proteins. Reuse `pathwayId` in `id` for an exact lookup.
Open `browserUrl` for the interactive Reactome diagram, or `diagramUrl` for a PNG export.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
