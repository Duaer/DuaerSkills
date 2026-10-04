> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/agro.md

---
name: duaer-agro
description: >-
  Duaer AGRO. Search agronomy terms from AGRO.
  One successful search uses 1 Duaer credit.
---

# Duaer AGRO

Search agronomy terms from AGRO. Data comes from AGRO.

## When to use

- Find agronomy terms and AGRO ids.
- Look up one AGRO id.

## When not to use

- Plant traits. Use https://skills.duaer.com/to.md.

## Call

`GET https://api.duaer.com/v1/data/agro?words=fertilizer&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as fertilizer.
- `id` — Optional. Id such as AGRO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/agro?words=fertilizer&limit=10` — AGRO terms matching fertilizer.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`AGRO`), `title`, `url`, and `summary`, plus:

- `agroId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
