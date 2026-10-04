> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/metabolites.md

---
name: duaer-metabolites
description: >-
  Duaer metabolites. Search metabolites from ChEBI.
  One successful search uses 1 Duaer credit.
---

# Duaer metabolites

Search metabolites from ChEBI. Data comes from ChEBI.

## When to use

- Find a metabolite and its ChEBI id.
- Get synonyms and a description of a small molecule.

## When not to use

- Compound properties from PubChem. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` (or both; id wins).

- `words` — metabolite or small-molecule name.
- `id` — Optional. ChEBI id (`CHEBI:17234` or `17234`). Overrides words when set.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10` — metabolites matching glucose.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEBI`), `title`, `url`, and `summary`, plus:

- `chebiId`, `description`, `synonyms` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
