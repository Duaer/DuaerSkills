> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/food-events.md

---
name: duaer-food-events
description: >-
  Duaer OpenFDA Food Events. Search FDA food adverse events.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Food Events

Search FDA food adverse events. Data comes from OpenFDA Food Events.

## When to use

- Find FDA food adverse event reports.
- Look up one report id.

## When not to use

- Food recalls. Use https://skills.duaer.com/food-enforcement.md.

## Call

`GET https://api.duaer.com/v1/data/food-events?words=allergy&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as allergy.
- `id` — Optional. Id such as 100000.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/food-events?words=allergy&limit=10` — food events mentioning allergy.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA Food Events`), `title`, `url`, and `summary`, plus:

- `reportNumber`, `applicant`, `deviceName`, `product`, `reason` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/device-events.md — Duaer Device events

## 相关技能

- [在 Duaer 里检索器械不良事件](https://skills.duaer.com/zh/device-events.md)
