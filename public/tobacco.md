> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/tobacco.md

---
name: duaer-tobacco
description: >-
  Duaer OpenFDA Tobacco. Search FDA tobacco problem reports.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Tobacco

Search FDA tobacco problem reports. Data comes from OpenFDA Tobacco.

## When to use

- Find FDA tobacco product problem reports.
- Look up one report id.

## When not to use

- Device events. Use https://skills.duaer.com/device-events.md.

## Call

`GET https://api.duaer.com/v1/data/tobacco?words=battery&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as battery.
- `id` — Optional. Id such as TOB-1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/tobacco?words=battery&limit=10` — tobacco reports mentioning battery.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA Tobacco`), `title`, `url`, and `summary`, plus:

- `reportId`, `applicant`, `deviceName`, `product`, `reason` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events

## Related skills

- [Search device events in Duaer](https://skills.duaer.com/device-events.md)
