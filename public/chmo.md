> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/chmo.md

---
name: duaer-chmo
description: >-
  Duaer CHMO. Search chemical methods from CHMO.
  One successful search uses 1 Duaer credit.
---

# Duaer CHMO

Search chemical methods from CHMO. Data comes from CHMO.

## When to use

- Find chemical method terms and CHMO ids.
- Look up one CHMO id.

## When not to use

- Mass spectrometry terms. Use https://skills.duaer.com/ms.md.

## Call

`GET https://api.duaer.com/v1/data/chmo?words=chromatography&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as chromatography.
- `id` — Optional. Id such as CHMO:0001000.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/chmo?words=chromatography&limit=10` — CHMO terms matching chromatography.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`CHMO`), `title`, `url`, and `summary`, plus:

- `chmoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
