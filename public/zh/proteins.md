> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/proteins.md

---
name: duaer-proteins
description: >-
  Search genes and proteins through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer proteins

Search genes and proteins through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- `q` — words in the protein record.
- `gene` — gene symbol.
- `name` — protein name.
- `organism` — organism name.
- `accession` — accession.
- `reviewed` — `yes` or `no`.
- `lengthFrom`, `lengthTo` — sequence length. `0` means no bound.
- `disease` — disease name.
- `keyword` — keyword.
- `location` — subcellular location.
- `function` — words in the function text.
- `go` — Gene Ontology term.
- `taxonomyId` — NCBI taxonomy id.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
