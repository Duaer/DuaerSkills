> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/bmrb.md

---
name: duaer-bmrb
description: >-
  Duaer BMRB. Search NMR entries in BMRB.
  One successful search uses 1 Duaer credit.
---

# Duaer BMRB

Search NMR entries in BMRB. Data comes from BMRB.

## When to use

- Find NMR entries in BMRB.
- Look up one BMRB id.

## When not to use

- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/bmrb?words=ubiquitin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as ubiquitin.
- `id` — Optional. Id such as 15000.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bmrb?words=ubiquitin&limit=10` — BMRB entries matching ubiquitin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BMRB`), `title`, `url`, and `summary`, plus:

- `bmrbId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins

## 相关技能

- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
