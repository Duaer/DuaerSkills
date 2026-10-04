> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sio.md

---
name: duaer-sio
description: >-
  Duaer SIO. Search semantics science terms from SIO.
  One successful search uses 1 Duaer credit.
---

# Duaer SIO

Search semantics science terms from SIO. Data comes from SIO.

## When to use

- Find semantic science terms and SIO ids.
- Look up one SIO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

`GET https://api.duaer.com/v1/data/sio?words=process&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as process.
- `id` — Optional. Id such as SIO:0000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sio?words=process&limit=10` — SIO terms matching process.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`SIO`), `title`, `url`, and `summary`, plus:

- `sioId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
