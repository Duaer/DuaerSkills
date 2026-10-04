> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ecto.md

---
name: duaer-ecto
description: >-
  Duaer ECTO. Search environmental exposure terms from ECTO.
  One successful search uses 1 Duaer credit.
---

# Duaer ECTO

Search environmental exposure terms from ECTO. Data comes from ECTO.

## When to use

- Find environmental exposure terms and ECTO ids.
- Look up one ECTO id.

## When not to use

- Environment terms. Use https://skills.duaer.com/envo.md.

## Call

`GET https://api.duaer.com/v1/data/ecto?words=exposure&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as exposure.
- `id` — Optional. Id such as ECTO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ecto?words=exposure&limit=10` — ECTO terms matching exposure.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ECTO`), `title`, `url`, and `summary`, plus:

- `ectoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
