> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/earthquakes.md

---
name: duaer-earthquakes
description: >-
  Duaer Earthquakes. Earthquakes worldwide from the USGS catalog, filtered by magnitude, dates, and a circle around a place: magnitude, depth, time, location, and tsunami flag.
  One successful search uses 1 Duaer credit.
---

# Duaer Earthquakes

Duaer Earthquakes searches the USGS earthquake catalog, newest first. Without dates it covers the last 30 days. Add a place to search a circle around it.

## When to use

- Check recent quakes near a factory, a supplier, or an office.
- List strong quakes in a region and period for a risk report.

## When not to use

- Real-time alerting within minutes. The catalog updates within minutes to hours.
- Other hazards such as fires and storms. Use https://skills.duaer.com/natural-events.md.

## Call

`GET https://api.duaer.com/v1/data/earthquakes?minMagnitude=6&from=2024-01-01&to=2024-12-31`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of `minMagnitude`, `from`, `to`, `place`, or `latitude` with `longitude`.

- `minMagnitude` — Optional. From 0 to 10, such as 5.
- `from` — Optional. First day, YYYY-MM-DD. Default: last 30 days.
- `to` — Optional. Last day, YYYY-MM-DD.
- `place` — Optional. Center of a search circle, such as Tokyo.
- `latitude` — Optional. Circle center latitude instead of a place.
- `longitude` — Optional. Circle center longitude.
- `radiusKm` — Optional. Circle radius from 1 to 20000 km. Default 500 when a center is set.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/earthquakes?minMagnitude=6&from=2024-01-01&to=2024-12-31` — magnitude 6 and above in 2024.
- `GET https://api.duaer.com/v1/data/earthquakes?place=Tokyo&radiusKm=300&minMagnitude=4` — recent quakes within 300 km of Tokyo.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `eventId` — USGS event id.
- `magnitude`, `magnitudeType` — magnitude and its scale (mww, mb, ml, …).
- `place` — USGS location text.
- `time` — UTC time, ISO 8601.
- `latitude`, `longitude`, `depthKm` — epicenter and depth.
- `tsunami` — true when USGS set the tsunami flag.
- `felt`, `alert` — "Did you feel it?" report count and PAGER alert level, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/natural-events.md — Duaer Natural events
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## 相关技能

- [在 Duaer 里查自然灾害事件](https://skills.duaer.com/zh/natural-events.md)
- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
