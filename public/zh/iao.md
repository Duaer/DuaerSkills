> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/iao.md

---
name: duaer-iao
description: >-
  Duaer IAO. Search information artifact terms from IAO.
  One successful search uses 1 Duaer credit.
---

# Duaer IAO

Search information artifact terms from IAO. Data comes from IAO.

## When to use

- Find information artifact terms and IAO ids.
- Look up one IAO id.

## When not to use

- Data use terms. Use https://skills.duaer.com/duo.md.

## Call

`GET https://api.duaer.com/v1/data/iao?words=document&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as document.
- `id` — Optional. Id such as IAO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/iao?words=document&limit=10` — IAO terms matching document.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`IAO`), `title`, `url`, and `summary`, plus:

- `iaoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
