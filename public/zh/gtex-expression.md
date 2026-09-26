> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/gtex-expression.md

---
name: duaer-gtex-expression
description: >-
  Look up GTEx median tissue expression for a gene through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer GTEx expression

Look up GTEx median tissue expression for a gene through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/gtex-expression?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — gene symbol, such as BRCA1.
- `id` — optional. Gencode id such as ENSG00000012048.20.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 GTEx eQTL](https://skills.duaer.com/zh/gtex-eqtl.md)
- [在 Duaer 里检索表达](https://skills.duaer.com/zh/expression.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
