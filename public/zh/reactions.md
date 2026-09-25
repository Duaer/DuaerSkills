> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/reactions.md

---
name: duaer-reactions
description: >-
  Search biochemical reactions through Duaer via Rhea. One successful search uses 1 Duaer credit.
---

# Duaer reactions

Search biochemical reactions through Duaer via Rhea. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `ec` (or both).
- `words` — words in the equation, or a Rhea id (`RHEA:10596`).
- `ec` — optional. Enzyme Commission number (`2.7.10.1` or `ec:2.7.10.1`). Alone is enough.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
