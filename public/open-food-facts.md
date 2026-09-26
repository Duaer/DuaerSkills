> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/open-food-facts.md

---
name: duaer-open-food-facts
description: >-
  Search products in Open Food Facts through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Open Food Facts

Search products in Open Food Facts through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/open-food-facts?words=yogurt&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — product name, such as yogurt.
- `id` — optional. Barcode such as 3017620422003.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search USDA FoodData Central in Duaer](https://skills.duaer.com/usda-fdc.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
