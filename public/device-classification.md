> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/device-classification.md

---
name: duaer-device-classification
description: >-
  Duaer OpenFDA Device Class. Search FDA device classifications.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device Class

Search FDA device classifications. Data comes from OpenFDA Device Class.

## When to use

- Find FDA device classes and product codes.
- Look up one product code.

## When not to use

- UDI records. Use https://skills.duaer.com/device-udi.md.

## Call

`GET https://api.duaer.com/v1/data/device-classification?words=monitor&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as monitor.
- `id` — Optional. Id such as DQA.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/device-classification?words=monitor&limit=10` — device classes matching monitor.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA Device Class`), `title`, `url`, and `summary`, plus:

- `productCode`, `applicant`, `deviceName`, `product`, `reason` — text.

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
