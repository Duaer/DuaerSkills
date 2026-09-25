> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mp.md

---
name: duaer-mp
description: >-
  Search mammalian phenotypes via MP through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer MP

Search mammalian phenotypes via MP through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — phenotype words, such as obesity.
- `id` — optional. MP id such as MP:0001261.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
- [在 Duaer 里检索 Monarch](https://skills.duaer.com/zh/monarch.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
