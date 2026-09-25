> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/targets.md

---
name: duaer-targets
description: >-
  Search Open Targets gene–disease associations through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer targets

Search Open Targets gene–disease associations through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/targets?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least `gene` or `disease` is required.
- `gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- `disease` — optional. Disease name or ontology id (`EFO_` / `MONDO_`). Alone, returns associated targets. With `gene`, filters that gene’s associations. Look up names with https://skills.duaer.com/diseases.md.
- `limit` — optional. From 1 to 20. Default 10. Results are sorted by association score descending.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
