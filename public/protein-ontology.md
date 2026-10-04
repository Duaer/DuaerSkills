> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/protein-ontology.md

---
name: duaer-protein-ontology
description: >-
  Duaer Protein Ontology. Search protein entities from Protein Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Protein Ontology

Search protein entities from Protein Ontology. Data comes from Protein Ontology.

## When to use

- Find Protein Ontology entities and PR ids.
- Look up one PR id.

## When not to use

- UniProt proteins. Use https://skills.duaer.com/proteins.md.

## Call

`GET https://api.duaer.com/v1/data/protein-ontology?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as insulin.
- `id` — Optional. Id such as PR:000003276.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/protein-ontology?words=insulin&limit=10` — PR terms matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Protein Ontology`), `title`, `url`, and `summary`, plus:

- `prId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/chebi.md — Duaer ChEBI
- https://skills.duaer.com/gene-ontology.md — Duaer Gene Ontology

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search ChEBI in Duaer](https://skills.duaer.com/chebi.md)
- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
