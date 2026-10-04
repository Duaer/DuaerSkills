> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/daily-med.md

---
name: duaer-daily-med
description: >-
  Duaer DailyMed. Search drug labeling in DailyMed.
  One successful search uses 1 Duaer credit.
---

# Duaer DailyMed

Search drug labeling in DailyMed. Data comes from DailyMed.

## When to use

- Find drug labeling in DailyMed.
- Look up one set id.

## When not to use

- OpenFDA label sections. Use https://skills.duaer.com/drug-labels.md.

## Call

`GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as aspirin.
- `id` — Optional. Id such as d49f3e4f-7e0e-467d-a0c4-c6b109af245e.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10` — DailyMed labels for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DailyMed`), `title`, `url`, and `summary`, plus:

- `setId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search NDC in Duaer](https://skills.duaer.com/ndc.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search Drugs@FDA in Duaer](https://skills.duaer.com/drugs-fda.md)
