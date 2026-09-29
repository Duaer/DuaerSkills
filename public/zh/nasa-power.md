> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/nasa-power.md

---
name: duaer-nasa-power
description: >-
  Duaer Solar and climate (NASA POWER). Daily or monthly solar radiation, temperature, rain, wind, and humidity for any point since 1981, from NASA POWER.
  One successful search uses 1 Duaer credit.
---

# Duaer Solar and climate (NASA POWER)

Duaer Solar and climate (NASA POWER) reads satellite and model estimates for any point on Earth since 1981. It suits solar sizing, agriculture, and climate checks where no weather station exists.

## When to use

- Estimate solar energy for a site, in kWh per square metre per day.
- Compare monthly temperature and rain for a location over years.

## When not to use

- A forecast for the coming days. Use https://skills.duaer.com/weather.md.
- Hourly station-like history. Use https://skills.duaer.com/weather-history.md.

## Call

`GET https://api.duaer.com/v1/data/nasa-power?place=Dubai&from=2024-06-01&to=2024-06-07`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place` (or `latitude` and `longitude`), `from`, and `to`.

- `place` — Place name, such as Lhasa. Duaer looks up its coordinates.
- `latitude`, `longitude` — Optional. Coordinates instead of a place name.
- `from` — First day, YYYY-MM-DD. Data starts in 1981.
- `to` — Last day, YYYY-MM-DD. Recent days appear after about a week.
- `step` — Optional. `day` or `month`. Default `day`. Daily ranges stay within one year; monthly ranges within ten years.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nasa-power?place=Dubai&from=2024-06-01&to=2024-06-07` — one week of daily sunlight and heat in Dubai.
- `GET https://api.duaer.com/v1/data/nasa-power?place=Kunming&from=2023-01-01&to=2023-12-31&step=month&limit=12` — monthly climate for a year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — the point used.
- `period`, `step` — day (YYYY-MM-DD) or month (YYYY-MM), oldest first.
- `solarKwhM2Day` — all-sky solar radiation on a flat surface.
- `temperatureMean`, `temperatureMax`, `temperatureMin` — °C at 2 m.
- `precipitationMmDay`, `windSpeedMs`, `humidityPct` — rain, wind at 10 m, relative humidity.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/elevation.md — Duaer Elevation

## 相关技能

- [在 Duaer 里查历史天气](https://skills.duaer.com/zh/weather-history.md)
- [在 Duaer 里查海拔高程](https://skills.duaer.com/zh/elevation.md)
