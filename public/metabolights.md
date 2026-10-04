> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metabolights.md

---
name: duaer-metabolights
description: >-
  Duaer MetaboLights. Search metabolomics studies in MetaboLights.
  One successful search uses 1 Duaer credit.
---

# Duaer MetaboLights

Search metabolomics studies in MetaboLights. Data comes from MetaboLights.

## When to use

- Find metabolomics studies in MetaboLights.
- Look up one MTBLS id.

## When not to use

- Metabolomics Workbench studies. Use https://skills.duaer.com/metabolomics.md.

## Call

`GET https://api.duaer.com/v1/data/metabolights?words=cancer&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — search words, such as cancer.
- `id` — Optional. Study id such as MTBLS1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/metabolights?words=cancer&limit=10` — MetaboLights studies matching cancer.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MetaboLights`), `title`, `url`, and `summary`, plus:

- `studyId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/metabolomics.md — Duaer Metabolomics
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/omicsdi.md — Duaer OmicsDI

## Related skills

- [Search metabolomics studies in Duaer](https://skills.duaer.com/metabolomics.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search OmicsDI in Duaer](https://skills.duaer.com/omicsdi.md)
