> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/hk-weather.md

---
name: duaer-hk-weather
description: >-
  Duaer Hong Kong weather. Hong Kong Observatory: current temperatures and warnings across Hong Kong, or the 9-day forecast.
  One successful search uses 1 Duaer credit.
---

# Duaer Hong Kong weather

Duaer Hong Kong weather reads Hong Kong Observatory open data in English, Simplified Chinese, or Traditional Chinese.

## When to use

- Show current Hong Kong temperatures and warnings.
- Plan an outdoor event with the 9-day forecast.

## When not to use

- Weather anywhere else. Use https://skills.duaer.com/weather.md.
- Past weather. Use https://skills.duaer.com/weather-history.md.

## Call

`GET https://api.duaer.com/v1/data/hk-weather?view=current`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `view`.

- `view` — `current` or `forecast`. Default current.
- `language` — Optional. `en`, `zh-Hans`, or `zh-Hant`. Default en.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hk-weather?view=current` — temperatures now, the Observatory first.
- `GET https://api.duaer.com/v1/data/hk-weather?view=forecast&language=zh-Hans` — the 9-day forecast in Simplified Chinese.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `temperatureC`, `updated` — station, temperature, and observation time.
- `humidityPct`, `uvIndex`, `warnings` — on the Observatory row.
- `date`, `weekday`, `minTempC`, `maxTempC`, `weather`, `wind`, `rainChance` — on forecast rows.
- `outlook` — the general situation, on the first forecast row.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/marine.md — Duaer Marine forecast

## 相关技能

- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
- [在 Duaer 里查海浪预报](https://skills.duaer.com/zh/marine.md)
