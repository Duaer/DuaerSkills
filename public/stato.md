> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/stato.md

---
name: duaer-stato
description: >-
  Duaer STATO. Search statistics terms from STATO.
  One successful search uses 1 Duaer credit.
---

# Duaer STATO

Search statistics terms from STATO. Data comes from STATO.

## When to use

- Find statistics terms and STATO ids.
- Look up one STATO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

`GET https://api.duaer.com/v1/data/stato?words=p-value&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as p-value.
- `id` — Optional. Id such as STATO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/stato?words=p-value&limit=10` — STATO terms matching p-value.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`STATO`), `title`, `url`, and `summary`, plus:

- `statoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
