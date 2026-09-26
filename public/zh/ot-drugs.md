> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ot-drugs.md

---
name: duaer-ot-drugs
description: >-
  Search drug entities in Open Targets through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Open Targets drugs

Search drug entities in Open Targets through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/ot-drugs?words=imatinib&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as imatinib.
- `id` — optional. ChEMBL id such as CHEMBL941.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索 ChEMBL](https://skills.duaer.com/zh/chembl.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
