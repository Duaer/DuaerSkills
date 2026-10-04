> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sequence-ontology.md

---
name: duaer-sequence-ontology
description: >-
  Duaer Sequence Ontology. Search sequence feature terms from Sequence Ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer Sequence Ontology

Search sequence feature terms from Sequence Ontology. Data comes from Sequence Ontology.

## When to use

- Find sequence feature terms and SO ids.
- Standardize variant and feature types.

## When not to use

- Gene Ontology. Use https://skills.duaer.com/gene-ontology.md.

## Call

`GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — feature words, such as exon.
- `id` — Optional. SO id such as SO:0000147.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10` — SO terms matching exon.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Sequence Ontology`), `title`, `url`, and `summary`, plus:

- `soId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search Ensembl in Duaer](https://skills.duaer.com/ensembl.md)
- [Search RNAcentral in Duaer](https://skills.duaer.com/rnacentral.md)
