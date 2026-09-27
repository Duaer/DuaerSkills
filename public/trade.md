> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/trade.md

---
name: duaer-trade
description: >-
  Duaer International trade. Yearly goods exports and imports from UN Comtrade: a country total, one partner, or its top partners, for all goods or one HS product code.
  One successful search uses 1 Duaer credit.
---

# Duaer International trade

Duaer International trade reads the UN Comtrade public preview. Leave `partner` empty to rank top partners by value; set `partner=world` for the total.

## When to use

- Find the main export markets or import sources of a country for a product.
- Compare trade between two countries across years.

## When not to use

- Monthly data or very recent months. Annual data appears one to two years later.
- Tariffs and prices. Use https://skills.duaer.com/world-bank.md for macro indicators.

## Call

`GET https://api.duaer.com/v1/data/trade?reporter=CHN&year=2023&flow=export&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `reporter`.

- `reporter` — Reporting country: ISO code, name, or Comtrade code, such as CHN.
- `year` — Optional. Four-digit year. Default two years ago.
- `flow` — Optional. export or import. Default export.
- `partner` — Optional. Partner country, or world for the total. Empty lists top partners.
- `commodity` — Optional. HS code such as 8542 (integrated circuits). Default all goods.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/trade?reporter=CHN&year=2023&flow=export&limit=10` — top ten export partners of China in 2023.
- `GET https://api.duaer.com/v1/data/trade?reporter=USA&partner=CHN&commodity=8542&flow=import&year=2023` — US imports of integrated circuits from China.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `reporter`, `reporterCode` — reporting country and Comtrade code.
- `partner`, `partnerCode` — partner country; code 0 is World.
- `flow` — exports or imports.
- `year`, `commodity` — year and HS code (TOTAL for all goods).
- `valueUsd` — trade value in US$.
- `netWeightKg` — net weight when reported.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/imf.md — Duaer IMF indicators

## Related skills

- [World Bank indicators in Duaer](https://skills.duaer.com/world-bank.md)
- [IMF indicators in Duaer](https://skills.duaer.com/imf.md)
