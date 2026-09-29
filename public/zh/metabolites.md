> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/metabolites.md

---
name: duaer-metabolites
description: >-
  Search metabolites through Duaer via ChEBI. One successful search uses 1 Duaer credit.
---

# Duaer metabolites

Search metabolites through Duaer via ChEBI. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id` (or both; id wins).
- `words` — metabolite or small-molecule name.
- `id` — optional. ChEBI id (`CHEBI:17234` or `17234`). Overrides words when set.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
