> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/foodon.md

---
name: duaer-foodon
description: >-
  Duaer FOODON. Search food ontology terms from FOODON.
  One successful search uses 1 Duaer credit.
---

# Duaer FOODON

Search food ontology terms from FOODON. Data comes from FOODON.

## When to use

- Find food terms and FOODON ids.
- Look up one FOODON id.

## When not to use

- Food products and nutrients. Use https://skills.duaer.com/usda-fdc.md.

## Call

`GET https://api.duaer.com/v1/data/foodon?words=bread&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as bread.
- `id` — Optional. Id such as FOODON:00002403.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/foodon?words=bread&limit=10` — FOODON terms matching bread.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`FOODON`), `title`, `url`, and `summary`, plus:

- `foodonId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
