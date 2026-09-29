> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sunrise.md

---
name: duaer-sunrise
description: >-
  Duaer Sunrise and sunset. Sunrise, sunset, solar noon, civil twilight, and day length for a place and up to seven consecutive days.
  One successful search uses 1 Duaer credit.
---

# Duaer Sunrise and sunset

Duaer Sunrise and sunset calculates sun times for a place in its local time zone, one row per day.

## When to use

- Plan photography or fieldwork around daylight.
- Compare day length across seasons or latitudes.

## When not to use

- Weather. Use https://skills.duaer.com/weather.md.
- Solar energy estimates. Use https://skills.duaer.com/nasa-power.md.

## Call

`GET https://api.duaer.com/v1/data/sunrise?place=Reykjavik&date=2026-12-21`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`.

- `place` — Place name, such as Seattle. Duaer looks up its coordinates.
- `latitude`, `longitude` — Optional. Coordinates instead of a place name.
- `date` — Optional. YYYY-MM-DD. Default today.
- `days` — Optional. Consecutive days, 1 to 7. Default 1.

## Examples

- `GET https://api.duaer.com/v1/data/sunrise?place=Reykjavik&date=2026-12-21` — the shortest day in Reykjavik.
- `GET https://api.duaer.com/v1/data/sunrise?place=Shanghai&days=7` — a week of sun times in Shanghai.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude`, `timezone` — the point and its time zone.
- `date`, `sunrise`, `sunset`, `solarNoon` — ISO times with offset.
- `dayLengthSeconds`, `civilTwilightBegin`, `civilTwilightEnd` — daylight and twilight.

During polar day or night, `sunrise` and `sunset` are left out and the summary says so.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/tides.md — Duaer US tide predictions
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## Related skills

- [US tide predictions in Duaer](https://skills.duaer.com/tides.md)
- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
