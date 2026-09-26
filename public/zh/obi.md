> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/obi.md

---
name: duaer-obi
description: >-
  Search assay terms via Ontology for Biomedical Investigations through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer OBI

Search assay terms via Ontology for Biomedical Investigations through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/obi?words=assay&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as assay.
- `id` — optional. Id such as OBI:0000070.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
- [在 Duaer 里检索 Expression Atlas](https://skills.duaer.com/zh/expression-atlas.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
