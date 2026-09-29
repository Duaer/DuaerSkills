> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/eia-petroleum.md

---
name: duaer-eia-petroleum
description: >-
  Duaer EIA fuel spot prices. US EIA: spot prices for WTI and Brent crude, gasoline, diesel, heating oil, jet fuel, and propane.
  One successful search uses 1 Duaer credit.
---

# Duaer EIA fuel spot prices

Duaer EIA fuel spot prices reads US Energy Information Administration spot prices for one product, newest first, one row per trading hub. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Get the latest WTI or Brent crude price.
- Track weekly diesel prices at US hubs.

## When not to use

- Electricity prices. Use https://skills.duaer.com/eia-electricity.md.
- Currency rates. Use https://skills.duaer.com/exchange-rates.md.

## Call

`GET https://api.duaer.com/v1/data/eia-petroleum?product=wti`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `product`.

- `product` — `wti`, `brent`, `gasoline`, `reformulated-gasoline`, `diesel`, `heating-oil`, `jet`, or `propane`. Default wti.
- `frequency` — Optional. `daily`, `weekly`, or `monthly`. Default daily.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/eia-petroleum?product=wti` — daily WTI crude prices.
- `GET https://api.duaer.com/v1/data/eia-petroleum?product=diesel&frequency=weekly` — weekly diesel prices by hub.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `period`, `series`, `product` — date and EIA series.
- `value`, `units` — price, such as $/BBL or $/GAL.
- `area` — trading hub when EIA names one.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/eia-electricity.md — Duaer EIA electricity prices
- https://skills.duaer.com/treasury.md — Duaer US Treasury fiscal data

## 相关技能

- [在 Duaer 里查美国电价（EIA）](https://skills.duaer.com/zh/eia-electricity.md)
- [在 Duaer 里查美国财政部财政数据](https://skills.duaer.com/zh/treasury.md)
