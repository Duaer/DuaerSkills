> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/air-quality.md

---
name: duaer-air-quality
description: >-
  Duaer Air quality. Daily air quality for a place, forecast and recent past: US AQI peak, PM2.5 and PM10 averages, ozone, and NO₂ from the Open-Meteo CAMS models.
  One successful search uses 1 Duaer credit.
---

# Duaer Air quality

Duaer Air quality folds hourly Open-Meteo air-quality model values into one row per local day, so an agent sees the daily PM2.5 mean and the worst US AQI hour at a glance.

## When to use

- Warn staff or customers about a bad air day, or schedule outdoor work on cleaner days.
- Add pollution context to a health, retail, or travel report.

## When not to use

- Official station readings for regulatory use. These are model estimates on a grid of about 10 to 40 km.
- Temperature and rain. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/air-quality?place=Delhi&days=3`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`.

- `place` — City or place name. Leave empty when you enter latitude and longitude.
- `latitude` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- `longitude` — Optional. Decimal degrees from -180 to 180.
- `days` — Optional. Forecast days from 1 to 7. Default 5.
- `pastDays` — Optional. Also return up to 92 past days. Default 0.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/air-quality?place=Delhi&days=3` — next three days in Delhi.
- `GET https://api.duaer.com/v1/data/air-quality?place=Beijing&days=1&pastDays=7` — the last week and today.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — where the rows are for.
- `date` — local day.
- `usAqiMax` — highest hourly US AQI that day.
- `pm25Mean`, `pm25Max` — PM2.5 daily mean and peak in µg/m³.
- `pm10Mean` — PM10 daily mean in µg/m³.
- `ozoneMax`, `no2Mean` — ozone peak and NO₂ mean in µg/m³.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## 相关技能

- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
- [在 Duaer 里查 WHO 卫生统计](https://skills.duaer.com/zh/who-gho.md)
