> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/grid-carbon.md

---
name: duaer-grid-carbon
description: >-
  Duaer GB grid carbon intensity. National Grid ESO: carbon intensity of Great Britain electricity now or for the next 24 hours, by region and fuel mix.
  One successful search uses 1 Duaer credit.
---

# Duaer GB grid carbon intensity

Duaer GB grid carbon intensity reads the Carbon Intensity API for Great Britain. Give an outward postcode for the regional value and fuel mix.

## When to use

- Run a heavy job when the grid is greenest.
- Show the fuel mix for a region now.

## When not to use

- US electricity prices. Use https://skills.duaer.com/eia-electricity.md.
- Greenhouse gas levels in the air. Use https://skills.duaer.com/greenhouse-gases.md.

## Call

`GET https://api.duaer.com/v1/data/grid-carbon?view=now`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `view` or `postcode`.

- `view` — `now` or `forecast` (next 24 hours in half-hour slots). Default now.
- `postcode` — Optional. First part of a GB postcode such as RG10 for its region and fuel mix.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/grid-carbon?view=now` — the national value now.
- `GET https://api.duaer.com/v1/data/grid-carbon?view=forecast&postcode=RG10` — the next 24 hours for the RG10 region.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `from`, `to` — area and half-hour slot.
- `gramsCo2PerKwh`, `index` — intensity and band, such as low or high.
- `forecast`, `actual` — national forecast and measured values.
- `<fuel>Pct` — regional fuel mix in percent, such as `gasPct` and `windPct`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/eia-electricity.md — Duaer EIA electricity prices
- https://skills.duaer.com/greenhouse-gases.md — Duaer Greenhouse gas levels

## 相关技能

- [在 Duaer 里查美国电价（EIA）](https://skills.duaer.com/zh/eia-electricity.md)
- [在 Duaer 里查温室气体浓度](https://skills.duaer.com/zh/greenhouse-gases.md)
