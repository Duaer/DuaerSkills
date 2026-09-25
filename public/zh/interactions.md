> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/interactions.md

---
name: duaer-interactions
description: >-
  Search STRING protein interaction partners through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer interactions

Search STRING protein interaction partners through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `protein` is required. Other fields are optional.
- `protein` — gene symbol, UniProt accession, or STRING id. Look up symbols with https://skills.duaer.com/genes.md or proteins with https://skills.duaer.com/proteins.md.
- `species` — optional. NCBI taxonomy id. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.
- `requiredScore` — optional. STRING threshold from 0 to 1000. Omit for the STRING default.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
