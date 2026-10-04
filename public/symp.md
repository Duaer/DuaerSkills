> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/symp.md

---
name: duaer-symp
description: >-
  Duaer SYMP. Search Symptom Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer SYMP

Search Symptom Ontology terms in OLS. Data comes from SYMP.

## When to use

- Find symptom terms and SYMP ids.
- Look up one SYMP id.

## When not to use

- Clinical phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

`GET https://api.duaer.com/v1/data/symp?words=fever&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as fever.
- `id` — Optional. Id such as SYMP:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/symp?words=fever&limit=10` — SYMP terms matching fever.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`SYMP`), `title`, `url`, and `summary`, plus:

- `sympId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
