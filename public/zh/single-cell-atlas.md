> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/single-cell-atlas.md

---
name: duaer-single-cell-atlas
description: >-
  Search single-cell experiments in Single Cell Expression Atlas through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Single Cell Atlas

Search single-cell experiments in Single Cell Expression Atlas through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — experiment words, such as lung.
- `id` — optional. Accession such as E-HCAD-14.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 Expression Atlas](https://skills.duaer.com/zh/expression-atlas.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索 Cell Ontology](https://skills.duaer.com/zh/cell-ontology.md)
