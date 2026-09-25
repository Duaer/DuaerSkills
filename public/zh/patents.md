> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/patents.md

---
name: duaer-patents
description: >-
  Search patents through Duaer via Europe PMC. One successful search uses 1 Duaer credit.
---

# Duaer patents

Search patents through Duaer via Europe PMC. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `words` is required.
- `words` — words in the patent title or abstract.
- `yearFrom` / `yearTo` — optional. Publication year range (YYYY).
- `country` — optional. Country code on the patent id (`US`, `EP`, `WO`, …).
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
