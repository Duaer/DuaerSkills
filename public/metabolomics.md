> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metabolomics.md

---
name: duaer-metabolomics
description: >-
  Duaer Metabolomics. Search metabolomics studies in Metabolomics Workbench.
  One successful search uses 1 Duaer credit.
---

# Duaer Metabolomics

Search metabolomics studies in Metabolomics Workbench. Data comes from Metabolomics Workbench.

## When to use

- Find metabolomics studies in Metabolomics Workbench.
- Look up one study by id.

## When not to use

- MetaboLights studies. Use https://skills.duaer.com/metabolights.md.

## Call

`GET https://api.duaer.com/v1/data/metabolomics?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — study title words, such as diabetes.
- `id` — Optional. Study id such as ST000001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/metabolomics?words=diabetes&limit=10` — studies matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Metabolomics Workbench`), `title`, `url`, and `summary`, plus:

- `studyId`, `species`, `institute`, `analysisType`, `sampleCount` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search BioStudies in Duaer](https://skills.duaer.com/biostudies.md)
- [Search PRIDE in Duaer](https://skills.duaer.com/pride.md)
