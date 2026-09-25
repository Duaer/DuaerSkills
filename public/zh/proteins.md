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
- `gene` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.
- `name` — protein name.
- `organism` — organism name. Look up formal names with https://skills.duaer.com/organisms.md.
- `accession` — accession.
- `reviewed` — `yes` or `no`.
- `lengthFrom`, `lengthTo` — sequence length. `0` means no bound.
- `disease` — disease name. Look up formal names with https://skills.duaer.com/diseases.md.
- `keyword` — UniProt keyword. Look up formal names with https://skills.duaer.com/keywords.md.
- `location` — subcellular location. Look up formal names with https://skills.duaer.com/locations.md.
- `function` — words in the function text.
- `go` — Gene Ontology term. Look up terms with https://skills.duaer.com/gene-ontology.md.
- `pathway` — Reactome pathway id or words. Look up pathways with https://skills.duaer.com/pathways.md.
- `domain` — InterPro domain id or words. Look up domains with https://skills.duaer.com/domains.md.
- `taxonomyId` — NCBI taxonomy id. Look up ids with https://skills.duaer.com/organisms.md.
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
- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
