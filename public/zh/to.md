> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/to.md

---
name: duaer-to
description: >-
  Duaer TO. Search plant trait terms from TO.
  One successful search uses 1 Duaer credit.
---

# Duaer TO

Search plant trait terms from TO. Data comes from TO.

## When to use

- Find plant trait terms and TO ids.
- Look up one TO id.

## When not to use

- Plant anatomy. Use https://skills.duaer.com/po.md.

## Call

`GET https://api.duaer.com/v1/data/to?words=yield&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as yield.
- `id` — Optional. Id such as TO:0000371.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/to?words=yield&limit=10` — TO terms matching yield.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`TO`), `title`, `url`, and `summary`, plus:

- `toId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
