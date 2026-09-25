> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/atlas.md

---
name: duaer-atlas
description: >-
  Search Human Protein Atlas tissue-enriched expression through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer tissue atlas

Search Human Protein Atlas tissue-enriched expression through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/atlas?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `gene` is required.
- `gene` — gene symbol or Ensembl id. Look up symbols with https://skills.duaer.com/genes.md.
- `tissue` — optional. Keep only enriched tissues whose name contains this text (for example `pancreas`).
- `limit` — optional. From 1 to 20. Default 10. Results sort by nTPM descending.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
