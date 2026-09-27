> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/weather.md

---
name: duaer-weather
description: >-
  Duaer Weather forecast. Daily forecast for any city or coordinates, up to 16 days: conditions, high and low, rain amount and chance, and peak wind, from Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer Weather forecast

Duaer Weather forecast returns one row per day for a place, using the Open-Meteo forecast models. Duaer geocodes a place name for you, so an agent can ask for "Shanghai" without looking up coordinates.

## When to use

- Plan field work, events, logistics, or travel around rain, heat, or wind in the next two weeks.
- Add a weather column to a daily digest or an alert that runs in a Duaer Organization.

## When not to use

- Past weather or climate over months and years. Use https://skills.duaer.com/weather-history.md.
- Air pollution. Use https://skills.duaer.com/air-quality.md. Waves at sea: https://skills.duaer.com/marine.md.

## Call

`GET https://api.duaer.com/v1/data/weather?place=Shanghai&days=3`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`.

- `place` — City or place name. Leave empty when you enter latitude and longitude.
- `latitude` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- `longitude` — Optional. Decimal degrees from -180 to 180.
- `days` — Optional. Forecast days from 1 to 16. Default 7.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/weather?place=Shanghai&days=3` — three days for Shanghai.
- `GET https://api.duaer.com/v1/data/weather?latitude=51.5&longitude=-0.12&days=7` — one week at exact coordinates.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place` — resolved place name, region, and country.
- `latitude`, `longitude` — point the forecast is for.
- `timezone` — local time zone of the dates.
- `date` — local day, YYYY-MM-DD.
- `weather`, `weatherCode` — condition text and WMO weather code.
- `temperatureMax`, `temperatureMin` — daily high and low in °C.
- `precipitationMm`, `precipitationChance` — rain or snow water in mm, and the highest hourly chance in %.
- `windSpeedMaxKmh` — strongest 10 m wind in km/h.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/air-quality.md — Duaer Air quality
- https://skills.duaer.com/marine.md — Duaer Marine forecast

## Related skills

- [Weather history in Duaer](https://skills.duaer.com/weather-history.md)
- [Air quality in Duaer](https://skills.duaer.com/air-quality.md)
- [Marine forecast in Duaer](https://skills.duaer.com/marine.md)
