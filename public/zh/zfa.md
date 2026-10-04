> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/zfa.md

---
name: duaer-zfa
description: >-
  Duaer ZFA. Search zebrafish anatomy from ZFA.
  One successful search uses 1 Duaer credit.
---

# Duaer ZFA

Search zebrafish anatomy from ZFA. Data comes from ZFA.

## When to use

- Find zebrafish anatomy terms and ZFA ids.
- Look up one ZFA id.

## When not to use

- Zebrafish genes. Use https://skills.duaer.com/zfin.md.

## Call

`GET https://api.duaer.com/v1/data/zfa?words=fin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as fin.
- `id` — Optional. Id such as ZFA:0000108.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/zfa?words=fin&limit=10` — ZFA terms matching fin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ZFA`), `title`, `url`, and `summary`, plus:

- `zfaId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
