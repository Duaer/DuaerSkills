> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cbioportal.md

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

## 相关技能

- [在 Duaer 里检索 GDC](https://skills.duaer.com/zh/gdc.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
