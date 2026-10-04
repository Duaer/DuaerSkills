> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/pdbe.md

---
name: duaer-pdbe
description: >-
  Duaer PDBe. Search structures in PDBe.
  One successful search uses 1 Duaer credit.
---

# Duaer PDBe

Search structures in PDBe. Data comes from PDBe.

## When to use

- Find structures in PDBe.
- Look up one PDB id.

## When not to use

- Filter structures by method and resolution. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. PDB id such as 1tup.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pdbe?words=BRCA1&limit=10` — PDBe structures for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PDBe`), `title`, `url`, and `summary`, plus:

- `pdbId`, `method`, `resolution` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里查询 AlphaFold 预测结构](https://skills.duaer.com/zh/alphafold.md)
- [在 Duaer 里检索 EMDB](https://skills.duaer.com/zh/emdb.md)
