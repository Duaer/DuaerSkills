> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cell-ontology.md

---
name: duaer-cell-ontology
description: >-
  Duaer Cell Ontology. Search cell types from Cell Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Cell Ontology

Search cell types from Cell Ontology. Data comes from Cell Ontology.

## When to use

- Find cell type terms and CL ids.
- Standardize cell type names.

## When not to use

- Cell line records. Use https://skills.duaer.com/cell-lines.md.

## Call

`GET https://api.duaer.com/v1/data/cell-ontology?words=neuron&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — cell type words, such as neuron.
- `id` — Optional. Cell Ontology id such as CL:0000540.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cell-ontology?words=neuron&limit=10` — cell types matching neuron.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Cell Ontology`), `title`, `url`, and `summary`, plus:

- `clId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search cell lines in Duaer](https://skills.duaer.com/cell-lines.md)
- [Search Uberon in Duaer](https://skills.duaer.com/uberon.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
