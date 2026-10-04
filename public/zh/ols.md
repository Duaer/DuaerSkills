> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ols.md

---
name: duaer-ols
description: >-
  Duaer EBI OLS. Search ontology terms in EBI OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer EBI OLS

Search ontology terms in EBI OLS. Data comes from EBI OLS.

## When to use

- Search terms across ontologies in EBI OLS.
- Find a term when you do not know the ontology.

## When not to use

- Disease terms. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/ols?words=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as apoptosis.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ols?words=apoptosis&limit=10` — OLS terms matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EBI OLS`), `title`, `url`, and `summary`, plus:

- `oboId`, `ontology`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology
- https://skills.duaer.com/mesh.md — Duaer MeSH
- https://skills.duaer.com/mondo.md — Duaer Mondo

## 相关技能

- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
- [在 Duaer 里检索 MeSH](https://skills.duaer.com/zh/mesh.md)
- [在 Duaer 里检索 Mondo](https://skills.duaer.com/zh/mondo.md)
