> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mychem.md

---
name: duaer-mychem
description: >-
  Duaer MyChem. Search aggregated compound annotations in MyChem.
  One successful search uses 1 Duaer credit.
---

# Duaer MyChem

Search aggregated compound annotations in MyChem. Data comes from MyChem.

## When to use

- Get aggregated compound annotations from MyChem.
- Look up one compound by id.

## When not to use

- PubChem properties. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as aspirin.
- `id` — Optional. Id such as CHEBI:15365.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10` — MyChem records for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MyChem`), `title`, `url`, and `summary`, plus:

- `inchikey`, `chebiId`, `chemblId`, `pubchemCid` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索 ChEBI](https://skills.duaer.com/zh/chebi.md)
- [在 Duaer 里检索 ChEMBL](https://skills.duaer.com/zh/chembl.md)
