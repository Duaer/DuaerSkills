> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/expression.md

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

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search interactions in Duaer](https://skills.duaer.com/interactions.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
