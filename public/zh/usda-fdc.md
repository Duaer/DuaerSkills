> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/usda-fdc.md

---
name: duaer-usda-fdc
description: >-
  Duaer USDA FoodData Central. Search foods in USDA FoodData Central.
  One successful search uses 1 Duaer credit.
---

# Duaer USDA FoodData Central

Search foods in USDA FoodData Central. Data comes from USDA FoodData Central.

## When to use

- Find foods and nutrients in USDA FoodData Central.
- Look up one FDC id.

## When not to use

- Packaged products. Use https://skills.duaer.com/open-food-facts.md.

## Call

`GET https://api.duaer.com/v1/data/usda-fdc?words=apple&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — food name, such as apple.
- `id` — Optional. FDC id such as 1750340.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/usda-fdc?words=apple&limit=10` — foods matching apple.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`USDA FoodData Central`), `title`, `url`, and `summary`, plus:

- `fdcId`, `dataType`, `brandOwner` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/lipid-maps.md — Duaer Lipid Maps
- https://skills.duaer.com/compounds.md — Duaer compounds

## 相关技能

- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索 Lipid Maps](https://skills.duaer.com/zh/lipid-maps.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
