> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/itis.md

---
name: duaer-itis
description: >-
  Duaer ITIS. Search taxonomy in ITIS.
  One successful search uses 1 Duaer credit.
---

# Duaer ITIS

Search taxonomy in ITIS. Data comes from ITIS.

## When to use

- Find taxonomy records in ITIS.
- Look up one TSN.

## When not to use

- GBIF species. Use https://skills.duaer.com/gbif.md.

## Call

`GET https://api.duaer.com/v1/data/itis?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as Homo sapiens.
- `id` — Optional. Id such as 180092.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/itis?words=Homo%20sapiens&limit=10` — ITIS records for Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ITIS`), `title`, `url`, and `summary`, plus:

- `tsn`, `scientificName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索物种](https://skills.duaer.com/zh/organisms.md)
- [在 Duaer 里检索 GBIF](https://skills.duaer.com/zh/gbif.md)
