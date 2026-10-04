> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ms.md

---
name: duaer-ms
description: >-
  Duaer MS. Search mass spectrometry terms from MS.
  One successful search uses 1 Duaer credit.
---

# Duaer MS

Search mass spectrometry terms from MS. Data comes from MS.

## When to use

- Find mass spectrometry terms and MS ids.
- Look up one MS id.

## When not to use

- Chemical methods. Use https://skills.duaer.com/chmo.md.

## Call

`GET https://api.duaer.com/v1/data/ms?words=spectrum&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as spectrum.
- `id` — Optional. Id such as MS:1000073.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ms?words=spectrum&limit=10` — MS terms matching spectrum.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MS`), `title`, `url`, and `summary`, plus:

- `msId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
