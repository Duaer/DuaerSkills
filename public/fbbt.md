> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/fbbt.md

---
name: duaer-fbbt
description: >-
  Duaer FBbt. Search Drosophila anatomy from FBbt.
  One successful search uses 1 Duaer credit.
---

# Duaer FBbt

Search Drosophila anatomy from FBbt. Data comes from FBbt.

## When to use

- Find Drosophila anatomy terms and FBbt ids.
- Look up one FBbt id.

## When not to use

- Drosophila genes. Use https://skills.duaer.com/flybase.md.

## Call

`GET https://api.duaer.com/v1/data/fbbt?words=neuron&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as neuron.
- `id` — Optional. Id such as FBbt:00005106.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/fbbt?words=neuron&limit=10` — FBbt terms matching neuron.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`FBbt`), `title`, `url`, and `summary`, plus:

- `fbbtId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/phenotypes.md — Duaer phenotypes

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
