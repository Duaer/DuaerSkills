> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/fma.md

---
name: duaer-fma
description: >-
  Duaer FMA. Search Foundational Model of Anatomy terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer FMA

Search Foundational Model of Anatomy terms in OLS. Data comes from FMA.

## When to use

- Find human anatomy terms and FMA ids.
- Look up one FMA id.

## When not to use

- Cross-species anatomy. Use https://skills.duaer.com/uberon.md.

## Call

`GET https://api.duaer.com/v1/data/fma?words=heart&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as heart.
- `id` — Optional. Id such as FMA:7088.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/fma?words=heart&limit=10` — FMA terms matching heart.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`FMA`), `title`, `url`, and `summary`, plus:

- `fmaId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/uberon.md — Duaer Uberon
- https://skills.duaer.com/cell-ontology.md — Duaer Cell Ontology

## 相关技能

- [在 Duaer 里检索 Uberon](https://skills.duaer.com/zh/uberon.md)
- [在 Duaer 里检索 Cell Ontology](https://skills.duaer.com/zh/cell-ontology.md)
