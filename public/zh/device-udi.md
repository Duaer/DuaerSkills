> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/device-udi.md

---
name: duaer-device-udi
description: >-
  Duaer OpenFDA Device UDI. Search FDA device UDI records.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Device UDI

Search FDA device UDI records. Data comes from OpenFDA Device UDI.

## When to use

- Find FDA device UDI records.
- Look up one device identifier.

## When not to use

- Device classes. Use https://skills.duaer.com/device-classification.md.

## Call

`GET https://api.duaer.com/v1/data/device-udi?words=catheter&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as catheter.
- `id` — Optional. Id such as UDI-123.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/device-udi?words=catheter&limit=10` — UDI records matching catheter.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA Device UDI`), `title`, `url`, and `summary`, plus:

- `udiId`, `applicant`, `deviceName`, `product`, `reason` — text.

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
