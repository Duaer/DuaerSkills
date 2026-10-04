> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cbioportal.md

---
name: duaer-cbioportal
description: >-
  Duaer cBioPortal. Search cancer genomics studies in cBioPortal.
  One successful search uses 1 Duaer credit.
---

# Duaer cBioPortal

Search cancer genomics studies in cBioPortal. Data comes from cBioPortal.

## When to use

- Find cancer genomics studies in cBioPortal.
- Look up one study by id.

## When not to use

- NCI GDC projects. Use https://skills.duaer.com/gdc.md.

## Call

`GET https://api.duaer.com/v1/data/cbioportal?words=brca&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — study words, such as brca.
- `id` — Optional. Study id such as brca_tcga.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cbioportal?words=brca&limit=10` — cBioPortal studies matching brca.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`cBioPortal`), `title`, `url`, and `summary`, plus:

- `studyId`, `cancerTypeId`, `description` — text.
- `sampleCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/gdc.md — Duaer GDC
- https://skills.duaer.com/gwas.md — Duaer GWAS
- https://skills.duaer.com/variants.md — Duaer variants

## Related skills

- [Search GDC in Duaer](https://skills.duaer.com/gdc.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
