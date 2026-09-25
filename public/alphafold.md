> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/alphafold.md

---
name: duaer-alphafold
description: >-
  Look up AlphaFold predicted structures through Duaer by gene or UniProt accession. One successful search uses 1 Duaer credit.
---

# Duaer AlphaFold

Look up AlphaFold predicted structures through Duaer by gene or UniProt accession. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/alphafold?gene=INS&organism=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `gene` or `accession` (or both; accession wins).
- `gene` — gene symbol resolved via UniProt (default organism Homo sapiens).
- `accession` — optional. UniProt accession (`P01308`). Overrides gene when set.
- `organism` — optional. Used when resolving gene (default `Homo sapiens`).
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search protein structures in Duaer](https://skills.duaer.com/structures.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
