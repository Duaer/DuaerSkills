> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pubchem-assay.md

---
name: duaer-pubchem-assay
description: >-
  Duaer PubChem Assay. List PubChem BioAssays for a gene.
  One successful search uses 1 Duaer credit.
---

# Duaer PubChem Assay

List PubChem BioAssays for a gene. Data comes from PubChem Assay.

## When to use

- List PubChem BioAssays for a gene.
- Find screening data for a target.

## When not to use

- ChEMBL assays. Use https://skills.duaer.com/assays.md.

## Call

`GET https://api.duaer.com/v1/data/pubchem-assay?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene symbol, such as BRCA1.
- `id` — Optional. NCBI Gene id such as 672.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pubchem-assay?words=BRCA1&limit=10` — PubChem assays for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PubChem Assay`), `title`, `url`, and `summary`, plus:

- `aid`, `sourceName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a gene that NCBI does not resolve, or a gene with no assays, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search assays in Duaer](https://skills.duaer.com/assays.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search ChEMBL in Duaer](https://skills.duaer.com/chembl.md)
