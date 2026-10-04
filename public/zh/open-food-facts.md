> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/open-food-facts.md

---
name: duaer-open-food-facts
description: >-
  Duaer Open Food Facts. Search products in Open Food Facts.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Food Facts

Search products in Open Food Facts. Data comes from Open Food Facts.

## When to use

- Find packaged food products in Open Food Facts.
- Look up one product barcode.

## When not to use

- Nutrient data for foods. Use https://skills.duaer.com/usda-fdc.md.

## Call

`GET https://api.duaer.com/v1/data/open-food-facts?words=yogurt&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — product name, such as yogurt.
- `id` — Optional. Barcode such as 3017620422003.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/open-food-facts?words=yogurt&limit=10` — products matching yogurt.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Open Food Facts`), `title`, `url`, and `summary`, plus:

- `code`, `brands` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索 USDA FoodData Central](https://skills.duaer.com/zh/usda-fdc.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
