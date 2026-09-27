> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/weather-history.md

---
name: duaer-weather-history
description: >-
  Duaer Weather history. Past weather back to 1940 for any place: daily or monthly mean, high, low, and rainfall from the Open-Meteo reanalysis archive.
  One successful search uses 1 Duaer credit.
---

# Duaer Weather history

Duaer Weather history returns past daily or monthly weather for a place from the Open-Meteo historical archive (ERA5 reanalysis). Use `step=month` to fold a year or more into twelve readable rows.

## When to use

- Compare a season or a month with past years, or explain a sales or yield change by weather.
- Build a monthly climate table for a site before a visit, a harvest, or a construction plan.

## When not to use

- The next days. Use https://skills.duaer.com/weather.md.
- Recent days: the archive lags about five days behind today.

## Call

`GET https://api.duaer.com/v1/data/weather-history?place=Beijing&from=2024-01-01&to=2024-12-31&step=month`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`, plus `from` and `to`.

- `place` — City or place name. Leave empty when you enter latitude and longitude.
- `latitude` — Optional. Decimal degrees from -90 to 90. Use with longitude instead of a place.
- `longitude` — Optional. Decimal degrees from -180 to 180.
- `from` — First day, YYYY-MM-DD. The archive starts in 1940.
- `to` — Last day, YYYY-MM-DD. Recent days appear after about five days.
- `step` — Optional. day or month. Month sums rain and averages temperature. Default day.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/weather-history?place=Beijing&from=2024-01-01&to=2024-12-31&step=month` — monthly climate for 2024.
- `GET https://api.duaer.com/v1/data/weather-history?latitude=40.7&longitude=-74&from=2012-10-27&to=2012-10-31` — daily rows around a storm.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — where the rows are for.
- `period` — YYYY-MM-DD for daily rows or YYYY-MM for monthly rows.
- `step` — day or month.
- `days` — days folded into the row.
- `temperatureMean`, `temperatureMax`, `temperatureMin` — °C. Monthly rows average the means and keep the extreme high and low.
- `precipitationMm` — total rain or snow water in mm.

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
