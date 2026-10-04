> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/device-510k.md

---
name: duaer-device-510k
description: >-
  Duaer OpenFDA 510(k). Search FDA 510(k) device clearances.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA 510(k)

Search FDA 510(k) device clearances. Data comes from OpenFDA 510(k).

## When to use

- Find FDA 510(k) clearances by company or device.
- Look up one K number.

## When not to use

- PMA approvals. Use https://skills.duaer.com/device-pma.md.

## Call

`GET https://api.duaer.com/v1/data/device-510k?words=medtronic&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as medtronic.
- `id` — Optional. Id such as K123456.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/device-510k?words=medtronic&limit=10` — 510(k) clearances for medtronic.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA 510(k)`), `title`, `url`, and `summary`, plus:

- `kNumber`, `applicant`, `deviceName`, `product`, `reason` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索器械不良事件](https://skills.duaer.com/zh/device-events.md)
- [在 Duaer 里检索 NDC](https://skills.duaer.com/zh/ndc.md)
