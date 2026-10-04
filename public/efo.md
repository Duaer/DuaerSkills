> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/efo.md

---
name: duaer-efo
description: >-
  Duaer EFO. Search experimental factors from EFO.
  One successful search uses 1 Duaer credit.
---

# Duaer EFO

Search experimental factors from EFO. Data comes from EFO.

## When to use

- Find experimental factor terms used by GWAS and Expression Atlas.
- Look up an EFO id.

## When not to use

- Disease ontology. Use https://skills.duaer.com/mondo.md.

## Call

`GET https://api.duaer.com/v1/data/efo?words=asthma&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — trait or factor words, such as asthma.
- `id` — Optional. EFO id such as EFO:0000270 or EFO_0000270.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/efo?words=asthma&limit=10` — EFO terms matching asthma.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EFO`), `title`, `url`, and `summary`, plus:

- `efoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gwas.md — Duaer GWAS
- https://skills.duaer.com/phenotypes.md — Duaer phenotypes
- https://skills.duaer.com/mesh.md — Duaer MeSH

## Related skills

- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
- [Search MeSH in Duaer](https://skills.duaer.com/mesh.md)
