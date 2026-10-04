> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/reactions.md

---
name: duaer-reactions
description: >-
  Duaer reactions. Search biochemical reactions from Rhea.
  One successful search uses 1 Duaer credit.
---

# Duaer reactions

Search biochemical reactions from Rhea. Data comes from Rhea.

## When to use

- Find Rhea reactions by words or EC number.
- Get reaction equations for an enzyme class.

## When not to use

- Model reactions in ModelSEED. Use https://skills.duaer.com/modelseed.md.

## Call

`GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `ec` (or both).

- `words` — words in the equation, or a Rhea id (`RHEA:10596`).
- `ec` — Optional. Enzyme Commission number (`2.7.10.1` or `ec:2.7.10.1`). Alone is enough.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10` — kinase reactions with EC 2.7.10.1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Rhea`), `title`, `url`, and `summary`, plus:

- `rheaId`, `equation`, `ec`, `status` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
