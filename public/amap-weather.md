> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/amap-weather.md

---
name: duaer-amap-weather
description: >-
  Duaer Amap weather in China. Amap: current weather or the 4-day forecast for a Chinese city.
  One successful search uses 1 Duaer credit.
---

# Duaer Amap weather in China

Duaer Amap weather in China returns current weather or the 4-day forecast for a city or district in mainland China. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Show today in Hangzhou on a dashboard.
- Plan an outdoor event with the 4-day forecast.

## When not to use

- Weather outside China. Use https://skills.duaer.com/weather.md.
- Hong Kong weather. Use https://skills.duaer.com/hk-weather.md.

## Call

`GET https://api.duaer.com/v1/data/amap-weather?city=330100`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `city`.

- `city` — Six-digit adcode such as 330100, or a URL-encoded city or district name.
- `view` — Optional. `current` or `forecast`. Default `current`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/amap-weather?city=330100` — current weather in Hangzhou.
- `GET https://api.duaer.com/v1/data/amap-weather?city=110000&view=forecast` — the 4-day forecast for Beijing.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `province`, `city`, `adcode`, `reportTime` — place and report time.
- `weather`, `temperatureC`, `humidityPct`, `windDirection`, `windPower` — current conditions.
- `date`, `weekday`, `dayWeather`, `nightWeather`, `maxTempC`, `minTempC` — forecast days.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/amap-geocode.md — Duaer Amap geocoding in China
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## Related skills

- [Amap geocoding in China in Duaer](https://skills.duaer.com/amap-geocode.md)
- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
