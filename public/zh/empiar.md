> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/empiar.md

---
name: duaer-empiar
description: >-
  Duaer EMPIAR. Search cryo-EM public image archive entries in EMPIAR.
  One successful search uses 1 Duaer credit.
---

# Duaer EMPIAR

Search cryo-EM public image archive entries in EMPIAR. Data comes from EMPIAR.

## When to use

- Find raw cryo-EM image datasets in EMPIAR.
- Look up one EMPIAR id.

## When not to use

- Cryo-EM maps. Use https://skills.duaer.com/emdb.md.

## Call

`GET https://api.duaer.com/v1/data/empiar?words=ribosome&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as ribosome.
- `id` — Optional. Id such as 10005.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/empiar?words=ribosome&limit=10` — EMPIAR entries matching ribosome.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EMPIAR`), `title`, `url`, and `summary`, plus:

- `empiarId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/emdb.md — Duaer EMDB

## 相关技能

- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索 EMDB](https://skills.duaer.com/zh/emdb.md)
