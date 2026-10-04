> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/4dn.md

---
name: duaer-4dn
description: >-
  Duaer 4DN. Search 4D Nucleome publications.
  One successful search uses 1 Duaer credit.
---

# Duaer 4DN

Search 4D Nucleome publications. Data comes from 4DN.

## When to use

- Find 4D Nucleome publications and data.
- Look up one 4DN item.

## When not to use

- ENCODE experiments. Use https://skills.duaer.com/encode.md.

## Call

`GET https://api.duaer.com/v1/data/4dn?words=chromatin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `words`.

- `words` — search words, such as chromatin.
- `id` — Optional. Id such as 12345.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/4dn?words=chromatin&limit=10` — 4DN items matching chromatin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`4DN`), `title`, `url`, and `summary`, plus:

- `uuid` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/encode.md — Duaer ENCODE
- https://skills.duaer.com/geo.md — Duaer GEO

## 相关技能

- [在 Duaer 里检索 ENCODE](https://skills.duaer.com/zh/encode.md)
- [在 Duaer 里检索 GEO](https://skills.duaer.com/zh/geo.md)
