> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/expression.md

---
name: duaer-expression
description: >-
  Search GTEx median tissue expression through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer expression

Search GTEx median tissue expression through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/expression?gene=INS&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least `gene` or `gencodeId` is required.
- `gene` — gene symbol. Look up symbols with https://skills.duaer.com/genes.md.
- `gencodeId` — optional. Ensembl/Gencode id from a result, such as `ENSG00000254647.6`.
- `tissue` — optional. GTEx tissue id, such as `Pancreas` or `Adipose_Subcutaneous`.
- `limit` — optional. From 1 to 20. Default 10. Results are sorted by median TPM descending.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
