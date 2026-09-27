> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/river-flow.md

---
name: duaer-river-flow
description: >-
  Duaer River flow. Daily river discharge in m³/s near a point, forecast up to three months plus recent past, from the GloFAS flood model via Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer River flow

Duaer River flow returns daily discharge of the river nearest to a point from the Global Flood Awareness System (GloFAS), served by Open-Meteo. Rising values over a few days signal flood risk.

## When to use

- Watch flood or drought risk for a plant, a warehouse, a farm, or a supply route on a river.
- Compare this week with the recent past to see if a river is rising.

## When not to use

- Small streams: the model grid is about 5 km, so it follows large rivers.
- Rain totals. Use https://skills.duaer.com/weather.md or https://skills.duaer.com/weather-history.md.

## Call

`GET https://api.duaer.com/v1/data/river-flow?place=Wuhan&days=14`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`, on or near a river.

- `place` — City or place name. Leave empty when you enter latitude and longitude.
- `latitude` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- `longitude` — Optional. Decimal degrees from -180 to 180.
- `days` — Optional. Forecast days from 1 to 92. Default 14.
- `pastDays` — Optional. Also return up to 92 past days. Default 0.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/river-flow?place=Wuhan&days=14` — the Yangtze at Wuhan for two weeks.
- `GET https://api.duaer.com/v1/data/river-flow?latitude=47.5&longitude=19.05&days=7&pastDays=14` — the Danube at Budapest, two weeks back and one ahead.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — where the rows are for.
- `date` — day.
- `dischargeM3s` — river discharge in cubic meters per second.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/natural-events.md — Duaer Natural events

## 相关技能

- [在 Duaer 里查历史天气](https://skills.duaer.com/zh/weather-history.md)
- [在 Duaer 里查自然灾害事件](https://skills.duaer.com/zh/natural-events.md)
