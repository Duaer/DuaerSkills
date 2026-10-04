> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/chebi.md

---
name: duaer-chebi
description: >-
  Duaer ChEBI. Search chemical entities from ChEBI.
  One successful search uses 1 Duaer credit.
---

# Duaer ChEBI

Search chemical entities from ChEBI. Data comes from ChEBI.

## When to use

- Find chemical entities and ChEBI ids.
- Look up one ChEBI id.

## When not to use

- PubChem properties. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/chebi?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as aspirin.
- `id` — Optional. Id such as CHEBI:15365.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/chebi?words=aspirin&limit=10` — ChEBI entities matching aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEBI`), `title`, `url`, and `summary`, plus:

- `chebiId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索 ChEMBL](https://skills.duaer.com/zh/chembl.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
