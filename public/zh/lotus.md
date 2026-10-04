> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/lotus.md

---
name: duaer-lotus
description: >-
  Duaer LOTUS. Search natural products in LOTUS.
  One successful search uses 1 Duaer credit.
---

# Duaer LOTUS

Search natural products in LOTUS. Data comes from LOTUS.

## When to use

- Find natural products in LOTUS.
- Look up one LOTUS id.

## When not to use

- PubChem compounds. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/lotus?words=caffeine&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as caffeine.
- `id` — Optional. Id such as LTS0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/lotus?words=caffeine&limit=10` — natural products matching caffeine.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`LOTUS`), `title`, `url`, and `summary`, plus:

- `lotusId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
