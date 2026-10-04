> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/dbsnp.md

---
name: duaer-dbsnp
description: >-
  Duaer dbSNP. Search variant ids in dbSNP.
  One successful search uses 1 Duaer credit.
---

# Duaer dbSNP

Search variant ids in dbSNP. Data comes from dbSNP.

## When to use

- Find dbSNP rs ids for a gene or term.
- Look up one rs id.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — gene words, such as BRCA1.
- `id` — Optional. rs id such as rs56116432.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10` — dbSNP records for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`dbSNP`), `title`, `url`, and `summary`, plus:

- `rsid`, `chrom`, `gene`, `clinicalSignificance`, `spdi` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
