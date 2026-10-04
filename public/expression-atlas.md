> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/expression-atlas.md

---
name: duaer-expression-atlas
description: >-
  Duaer Expression Atlas. Search bulk expression experiments in Expression Atlas.
  One successful search uses 1 Duaer credit.
---

# Duaer Expression Atlas

Search bulk expression experiments in Expression Atlas. Data comes from Expression Atlas.

## When to use

- Find bulk expression experiments in Expression Atlas.
- Look up one experiment by accession.

## When not to use

- Single-cell experiments. Use https://skills.duaer.com/single-cell-atlas.md.

## Call

`GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — experiment words, such as human liver.
- `id` — Optional. Accession such as E-MTAB-5214.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/expression-atlas?words=human%20liver&limit=10` — experiments matching human liver.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Expression Atlas`), `title`, `url`, and `summary`, plus:

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

- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/single-cell-atlas.md — Duaer Single Cell Atlas

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search GEO in Duaer](https://skills.duaer.com/geo.md)
- [Search Single Cell Atlas in Duaer](https://skills.duaer.com/single-cell-atlas.md)
