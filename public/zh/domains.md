> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/domains.md

---
name: duaer-domains
description: >-
  Search InterPro domains through Duaer. Use the domainId with proteins.domain. One successful search uses 1 Duaer credit.
---

# Duaer domains

Search InterPro domains through Duaer. Use the domainId with proteins.domain. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` first; use `id` only when you already have an InterPro id from a result.
- `q` — words in the domain name or description.
- `id` — optional. InterPro id from a result (`domainId`), such as `IPR000719`.
- `name` — optional. Domain name.
- `limit` — optional. From 1 to 20. Default 10.
- Use `domainId` as `domain` when searching proteins. Reuse `domainId` in `id` for an exact lookup.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
