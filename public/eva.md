> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/eva.md

---
name: duaer-eva
description: >-
  Duaer EVA. Browse variation studies in EVA.
  One successful search uses 1 Duaer credit.
---

# Duaer EVA

Browse variation studies in EVA. Data comes from EVA.

## When to use

- Browse variation studies in the European Variation Archive.
- Look up one EVA study.

## When not to use

- dbSNP records. Use https://skills.duaer.com/dbsnp.md.

## Call

`GET https://api.duaer.com/v1/data/eva?words=human&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — search words, such as human.
- `id` — Optional. Id such as PRJEB123.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/eva?words=human&limit=10` — EVA studies matching human.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`EVA`), `title`, `url`, and `summary`, plus:

- `studyId` — text.

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
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
