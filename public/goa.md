> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/goa.md

---
name: duaer-goa
description: >-
  Duaer GO annotations. Look up GO annotations for a gene product.
  One successful search uses 1 Duaer credit.
---

# Duaer GO annotations

Look up GO annotations for a gene product. Data comes from GO annotations.

## When to use

- Look up GO annotations for a gene product.
- List the processes and functions of a protein.

## When not to use

- GO term search. Use https://skills.duaer.com/gene-ontology.md.

## Call

`GET https://api.duaer.com/v1/data/goa?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbol or UniProt accession, such as BRCA1.
- `id` — Optional. UniProt accession such as P38398.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/goa?words=BRCA1&limit=10` — GO annotations of BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`GO annotations`), `title`, `url`, and `summary`, plus:

- `goId`, `geneProductId`, `symbol`, `qualifier` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that UniProt does not resolve, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
