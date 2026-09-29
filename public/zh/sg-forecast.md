> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/sg-forecast.md

---
name: duaer-sg-forecast
description: >-
  Duaer Singapore two-hour forecast. data.gov.sg: the NEA two-hour weather forecast for each Singapore area, with the valid period.
  One successful search uses 1 Duaer credit.
---

# Duaer Singapore two-hour forecast

Duaer Singapore two-hour forecast returns the latest NEA nowcast for each of about 47 Singapore areas, such as Partly Cloudy or Thundery Showers.

## When to use

- Check whether Tampines expects showers in the next two hours.
- List the current forecast for every Singapore area.

## When not to use

- Multi-day forecasts worldwide. Use https://skills.duaer.com/weather.md.
- Hong Kong weather. Use https://skills.duaer.com/hk-weather.md.

## Call

`GET https://api.duaer.com/v1/data/sg-forecast?area=tampines`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `area`.

- `area` — Words in the area name such as Tampines, or `all` for every area.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sg-forecast?area=tampines` — the two-hour forecast for Tampines.
- `GET https://api.duaer.com/v1/data/sg-forecast?area=all&limit=20` — the forecast for 20 areas.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `area`, `forecast` — area name and forecast text.
- `validFrom`, `validTo`, `issuedAt` — the two-hour window and when NEA issued it.
- `latitude`, `longitude` — the area label point.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/hk-weather.md — Duaer Hong Kong weather

## 相关技能

- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
- [在 Duaer 里查香港天气](https://skills.duaer.com/zh/hk-weather.md)
