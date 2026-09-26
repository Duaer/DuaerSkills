> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/gdc.md

---
name: duaer-gdc
description: >-
  Search NCI GDC cancer projects through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer GDC

Search NCI GDC cancer projects through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — project words, such as breast.
- `id` — optional. Project id such as TCGA-BRCA.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 cBioPortal](https://skills.duaer.com/zh/cbioportal.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
