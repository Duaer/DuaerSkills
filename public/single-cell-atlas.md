> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/single-cell-atlas.md

---
name: duaer-single-cell-atlas
description: >-
  Duaer Single Cell Atlas. Search single-cell experiments in Single Cell Expression Atlas.
  One successful search uses 1 Duaer credit.
---

# Duaer Single Cell Atlas

Search single-cell experiments in Single Cell Expression Atlas. Data comes from Single Cell Expression Atlas.

## When to use

- Find single-cell experiments in Single Cell Expression Atlas.
- Look up one experiment by accession.

## When not to use

- Bulk experiments. Use https://skills.duaer.com/expression-atlas.md.

## Call

`GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — experiment words, such as lung.
- `id` — Optional. Accession such as E-HCAD-14.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/single-cell-atlas?words=lung&limit=10` — single-cell experiments matching lung.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Single Cell Expression Atlas`), `title`, `url`, and `summary`, plus:

- `accession`, `species`, `experimentType` — text.
- `assayCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/cell-ontology.md — Duaer Cell Ontology

## Related skills

- [Search Expression Atlas in Duaer](https://skills.duaer.com/expression-atlas.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search Cell Ontology in Duaer](https://skills.duaer.com/cell-ontology.md)
