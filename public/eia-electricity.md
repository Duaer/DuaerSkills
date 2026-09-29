> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/eia-electricity.md

---
name: duaer-eia-electricity
description: >-
  Duaer EIA electricity prices. US EIA: monthly average retail electricity price, sales, and customers by state and sector.
  One successful search uses 1 Duaer credit.
---

# Duaer EIA electricity prices

Duaer EIA electricity prices reads the US Energy Information Administration retail sales data: average price in cents per kWh, sales, and customers, newest month first. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Compare residential electricity prices between states.
- Track the monthly electricity price trend in one state.

## When not to use

- Fuel prices. Use https://skills.duaer.com/eia-petroleum.md.
- Solar potential at a site. Use https://skills.duaer.com/nasa-power.md.

## Call

`GET https://api.duaer.com/v1/data/eia-electricity?state=CA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `state` or `sector`.

- `state` — Two-letter code such as CA, or US for the country. Default US.
- `sector` — Optional. `residential`, `commercial`, `industrial`, `transportation`, or `all`. Default residential.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/eia-electricity?state=CA` — California residential prices by month.
- `GET https://api.duaer.com/v1/data/eia-electricity?state=US&sector=industrial` — US industrial prices by month.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `period`, `state`, `stateName`, `sector` — month and place.
- `priceCentsPerKwh` — average retail price.
- `salesGwh`, `customers` — electricity sold and number of customers.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/eia-petroleum.md — Duaer EIA fuel spot prices
- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)

## Related skills

- [EIA fuel spot prices in Duaer](https://skills.duaer.com/eia-petroleum.md)
- [Solar and climate (NASA POWER) in Duaer](https://skills.duaer.com/nasa-power.md)
