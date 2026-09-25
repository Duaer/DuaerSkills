> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/locations.md

---
name: duaer-locations
description: >-
  Search UniProt subcellular locations through Duaer. Use the name with proteins.location. One successful search uses 1 Duaer credit.
---

# Duaer locations

Search UniProt subcellular locations through Duaer. Use the name with proteins.location. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/locations?q=nucleus&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` first; use `id` only when you already have it from a result.
- `q` — words in the location name or definition.
- `id` — optional. UniProt location id from a result (`locationId`), such as `SL-0191`.
- `name` — optional. Location name.
- `limit` — optional. From 1 to 20. Default 10.
- Use `title` as `location` when searching proteins. Reuse `locationId` in `id` for an exact lookup.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
