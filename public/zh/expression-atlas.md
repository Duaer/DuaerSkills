> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/expression-atlas.md

---
name: duaer-expression-atlas
description: >-
  Search bulk expression experiments in Expression Atlas through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Expression Atlas

Search bulk expression experiments in Expression Atlas through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — experiment words, such as human liver.
- `id` — optional. Accession such as E-MTAB-5214.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
- [在 Duaer 里检索单细胞表达图谱](https://skills.duaer.com/zh/single-cell-atlas.md)
