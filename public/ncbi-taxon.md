> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ncbi-taxon.md

---
name: duaer-ncbi-taxon
description: >-
  Duaer NCBI Taxonomy. Search taxa from NCBI Taxonomy ontology.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Taxonomy

Search taxa from NCBI Taxonomy ontology. Data comes from NCBI Taxonomy.

## When to use

- Find taxa and NCBI taxonomy ids.
- Look up one taxon by id.

## When not to use

- Species occurrence records. Use https://skills.duaer.com/gbif.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-taxon?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — taxon words, such as Homo sapiens.
- `id` — Optional. NCBITaxon id such as NCBITaxon:9606.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-taxon?words=Homo%20sapiens&limit=10` — taxa matching Homo sapiens.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI Taxonomy`), `title`, `url`, and `summary`, plus:

- `taxonId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search Alliance genes in Duaer](https://skills.duaer.com/alliance.md)
- [Search Uberon in Duaer](https://skills.duaer.com/uberon.md)
