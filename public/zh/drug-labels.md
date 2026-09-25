> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/drug-labels.md

---
name: duaer-drug-labels
description: >-
  Search FDA drug labels through Duaer via OpenFDA. One successful search uses 1 Duaer credit.
---

# Duaer drug labels

Search FDA drug labels through Duaer via OpenFDA. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).
- `words` — brand, generic, or substance name.
- `brand` — optional. OpenFDA brand name.
- `generic` — optional. OpenFDA generic name.
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
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
