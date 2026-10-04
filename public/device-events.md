> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/device-events.md

---
name: duaer-device-events
description: >-
  Duaer Device events. Search device adverse events in OpenFDA.
  One successful search uses 1 Duaer credit.
---

# Duaer Device events

Search device adverse events in OpenFDA. Data comes from OpenFDA.

## When to use

- Find FDA device adverse event reports.
- Look up one report by id.

## When not to use

- Device recalls. Use https://skills.duaer.com/device-recall.md.

## Call

`GET https://api.duaer.com/v1/data/device-events?words=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — device words, such as insulin.
- `id` — Optional. Report number.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/device-events?words=insulin&limit=10` — device events mentioning insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA`), `title`, `url`, and `summary`, plus:

- `reportId`, `brandName`, `genericName`, `eventType`, `dateReceived` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
- [Search NDC in Duaer](https://skills.duaer.com/ndc.md)
- [Search drug recalls in Duaer](https://skills.duaer.com/drug-recalls.md)
