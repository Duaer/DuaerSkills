> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ro.md

---
name: duaer-ro
description: >-
  Duaer RO. Search relation ontology terms from RO.
  One successful search uses 1 Duaer credit.
---

# Duaer RO

Search relation ontology terms from RO. Data comes from RO.

## When to use

- Find relation terms and RO ids.
- Look up one RO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

`GET https://api.duaer.com/v1/data/ro?words=part%20of&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as part of.
- `id` — Optional. Id such as RO:0000052.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ro?words=part%20of&limit=10` — RO terms matching part of.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RO`), `title`, `url`, and `summary`, plus:

- `roId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
