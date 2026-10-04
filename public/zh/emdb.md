> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/emdb.md

---
name: duaer-emdb
description: >-
  Duaer EMDB. Search cryo-EM structures in EMDB.
  One successful search uses 1 Duaer credit.
---

# Duaer EMDB

Search cryo-EM structures in EMDB. Data comes from EMDB.

## When to use

- Find cryo-EM maps in EMDB.
- Look up one EMD entry.

## When not to use

- Raw cryo-EM images. Use https://skills.duaer.com/empiar.md.

## Call

`GET https://api.duaer.com/v1/data/emdb?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as insulin.
- `id` — Optional. Id such as EMD-74236.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/emdb?words=insulin&limit=10` — EMDB entries matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EMDB`), `title`, `url`, and `summary`, plus:

- `emdbId`, `status`, `method` — text.

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
- [在 Duaer 里检索 PRIDE](https://skills.duaer.com/zh/pride.md)
