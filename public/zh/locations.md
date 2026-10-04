> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/locations.md

---
name: duaer-locations
description: >-
  Duaer locations. Search UniProt subcellular locations. Use the name with proteins.location.
  One successful search uses 1 Duaer credit.
---

# Duaer locations

Search UniProt subcellular locations. Use the name with proteins.location. Data comes from UniProt.

## When to use

- Get the exact subcellular location name before searching proteins.
- Check what a location term covers.

## When not to use

- Gene Ontology cellular component terms. Use https://skills.duaer.com/gene-ontology.md.

## Call

`GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required. Fields combine. Search with `q` first; use `id` only when you already have it from a result.

- `q` — words in the location name or definition.
- `id` — Optional. UniProt location id from a result (`locationId`), such as `SL-0191`.
- `name` — Optional. Location name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10` — locations matching nucleus.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniProt`), `title`, `url`, and `summary`, plus:

- `locationId`, `category`, `synonyms` — text.
- `reviewedProteinCount` — number.

Use `title` as `location` when searching proteins. Reuse `locationId` in `id` for an exact lookup.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
