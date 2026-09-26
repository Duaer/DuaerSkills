> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/clinvar.md

---
name: duaer-clinvar
description: >-
  Search clinical variants in ClinVar through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer ClinVar

Search clinical variants in ClinVar through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — gene or variant words, such as BRCA1.
- `id` — optional. ClinVar uid or accession.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 dbSNP](https://skills.duaer.com/zh/dbsnp.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
