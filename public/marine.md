> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/marine.md

---
name: duaer-marine
description: >-
  Duaer Marine forecast. Daily wave height, swell height, wave period, and direction for a coast or a point at sea, up to eight days, from Open-Meteo marine models.
  One successful search uses 1 Duaer credit.
---

# Duaer Marine forecast

Duaer Marine forecast returns daily wave conditions from the Open-Meteo marine models. Inland points have no waves, so the search returns no rows and uses no credit.

## When to use

- Plan boat trips, port work, offshore maintenance, or surf and beach events.
- Add sea-state context to a shipping or tourism report.

## When not to use

- Navigation safety decisions. Check official marine warnings too.
- Rivers and floods. Use https://skills.duaer.com/river-flow.md.

## Call

`GET https://api.duaer.com/v1/data/marine?place=Honolulu&days=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`, at a coast or at sea.

- `place` — City or place name. Leave empty when you enter latitude and longitude.
- `latitude` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- `longitude` — Optional. Decimal degrees from -180 to 180.
- `days` — Optional. Forecast days from 1 to 8. Default 7.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/marine?place=Honolulu&days=5` — five days off Honolulu.
- `GET https://api.duaer.com/v1/data/marine?latitude=22.2&longitude=114.3` — a point off Hong Kong.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — where the rows are for.
- `date` — local day.
- `waveHeightMaxM` — highest significant wave height in m.
- `swellHeightMaxM` — highest swell wave height in m.
- `wavePeriodMaxS` — longest wave period in s.
- `waveDirectionDeg` — dominant direction the waves come from, degrees.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/river-flow.md — Duaer River flow

## Related skills

- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
- [River flow in Duaer](https://skills.duaer.com/river-flow.md)
