> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/kp-index.md

---
name: duaer-kp-index
description: >-
  Duaer Planetary Kp index. NOAA planetary Kp index in three-hour steps: recent observed geomagnetic activity or the three-day forecast, with storm level.
  One successful search uses 1 Duaer credit.
---

# Duaer Planetary Kp index

Duaer Planetary Kp index returns the Kp index from 0 to 9 in three-hour steps. Kp 5 and above is a geomagnetic storm, rated G1 to G5.

## When to use

- Judge aurora chances from the forecast.
- Check whether a recent storm reached G3.

## When not to use

- Alert texts. Use https://skills.duaer.com/space-weather.md.
- Solar energy at a site. Use https://skills.duaer.com/nasa-power.md.

## Call

`GET https://api.duaer.com/v1/data/kp-index?view=forecast`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `view`.

- `view` — `recent` (observed, newest first) or `forecast` (next three days).
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/kp-index?view=forecast` — the three-day Kp forecast.
- `GET https://api.duaer.com/v1/data/kp-index?view=recent&limit=8` — the last 24 hours.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `timeUtc`, `kp` — start of the three-hour step and the index.
- `status` — observed, estimated, or predicted.
- `stormScale` — G1 to G5 when Kp is 5 or more.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/space-weather.md — Duaer Space weather alerts
- https://skills.duaer.com/close-approaches.md — Duaer Asteroid close approaches

## 相关技能

- [在 Duaer 里查空间天气预警](https://skills.duaer.com/zh/space-weather.md)
- [在 Duaer 里查小行星近地掠过](https://skills.duaer.com/zh/close-approaches.md)
