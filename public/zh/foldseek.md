> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/foldseek.md

---
name: duaer-foldseek
description: >-
  Duaer Foldseek. List Foldseek searchable structure databases.
  One successful search uses 1 Duaer credit.
---

# Duaer Foldseek

List Foldseek searchable structure databases. Data comes from Foldseek.

## When to use

- List Foldseek structure databases.
- Pick a database for a structure search.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/foldseek?words=AlphaFold&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — database name filter, such as AlphaFold.
- `id` — Optional. Database name such as ESM30.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/foldseek?words=AlphaFold&limit=10` — Foldseek databases matching AlphaFold.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Foldseek`), `title`, `url`, and `summary`, plus:

- `name`, `version`, `status` — text.

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
- [在 Duaer 里检索 PDBe](https://skills.duaer.com/zh/pdbe.md)
