> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/clinvar.md

---
name: duaer-clinvar
description: >-
  Duaer ClinVar. Search clinical variants in ClinVar.
  One successful search uses 1 Duaer credit.
---

# Duaer ClinVar

Search clinical variants in ClinVar. Data comes from ClinVar.

## When to use

- Find ClinVar records for a gene or condition.
- Look up one ClinVar record by id.

## When not to use

- Variants by rs id with alleles. Use https://skills.duaer.com/variants.md.

## Call

`GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — gene or variant words, such as BRCA1.
- `id` — Optional. ClinVar uid or accession.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/clinvar?words=BRCA1&limit=10` — ClinVar records for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ClinVar`), `title`, `url`, and `summary`, plus:

- `variationId`, `accession`, `gene`, `clinicalSignificance`, `objType` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search dbSNP in Duaer](https://skills.duaer.com/dbsnp.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
