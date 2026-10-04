> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/eco.md

---
name: duaer-eco
description: >-
  Duaer ECO. Search Evidence and Conclusion Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer ECO

Search Evidence and Conclusion Ontology terms in OLS. Data comes from ECO.

## When to use

- Find evidence terms and ECO ids.
- Look up one ECO id.

## When not to use

- Other ontology terms. Use https://skills.duaer.com/ols.md.

## Call

`GET https://api.duaer.com/v1/data/eco?words=electrophysiology&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as electrophysiology.
- `id` — Optional. Id such as ECO:0000164.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/eco?words=electrophysiology&limit=10` — ECO terms matching electrophysiology.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ECO`), `title`, `url`, and `summary`, plus:

- `ecoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search OBI in Duaer](https://skills.duaer.com/obi.md)
