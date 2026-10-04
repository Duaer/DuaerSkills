> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/food-enforcement.md

---
name: duaer-food-enforcement
description: >-
  Duaer OpenFDA Food. Search FDA food enforcement reports.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenFDA Food

Search FDA food enforcement reports. Data comes from OpenFDA Food.

## When to use

- Find FDA food recall enforcement reports.
- Look up one recall number.

## When not to use

- Food adverse events. Use https://skills.duaer.com/food-events.md.

## Call

`GET https://api.duaer.com/v1/data/food-enforcement?words=listeria&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as listeria.
- `id` — Optional. Id such as F-001-2020.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/food-enforcement?words=listeria&limit=10` — food recalls mentioning listeria.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenFDA Food`), `title`, `url`, and `summary`, plus:

- `recallNumber`, `applicant`, `deviceName`, `product`, `reason` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索药品召回](https://skills.duaer.com/zh/drug-recalls.md)
- [在 Duaer 里检索 NDC](https://skills.duaer.com/zh/ndc.md)
