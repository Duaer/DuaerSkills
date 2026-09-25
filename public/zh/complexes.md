> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/complexes.md

---
name: duaer-complexes
description: >-
  Search protein complexes through Duaer via Complex Portal. One successful search uses 1 Duaer credit.
---

# Duaer complexes

Search protein complexes through Duaer via Complex Portal. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `words` is required.
- `words` — words in the complex name or description, or a Complex Portal id (`CPX-4305`).
- `organism` — optional. Keep complexes whose organism contains this text, or an NCBI taxonomy id (`9606`).
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
