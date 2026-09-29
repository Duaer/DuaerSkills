> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/solar-flares.md

---
name: duaer-solar-flares
description: >-
  Duaer NASA solar flares. NASA DONKI: recent solar flares with class, peak time, source location, and active region.
  One successful search uses 1 Duaer credit.
---

# Duaer NASA solar flares

Duaer NASA solar flares lists flares from the NASA DONKI database, newest first. Class runs A, B, C, M, X; M and X flares can disturb radio and GPS. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Check whether a strong flare happened this week.
- List X-class flares of the last three months.

## When not to use

- Official alerts and warnings. Use https://skills.duaer.com/space-weather.md.
- Geomagnetic storm level. Use https://skills.duaer.com/kp-index.md.

## Call

`GET https://api.duaer.com/v1/data/solar-flares?days=30`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `days` or `minClass`.

- `days` — Optional. Flares in the last N days, 1 to 90. Default 30.
- `minClass` — Optional. `C`, `M`, or `X`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/solar-flares?days=30` — flares of the last 30 days.
- `GET https://api.duaer.com/v1/data/solar-flares?days=90&minClass=M` — M and X flares of the last 90 days.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `flareId`, `classType` — DONKI id and class such as M1.2.
- `beginTime`, `peakTime`, `endTime` — UTC times.
- `sourceLocation`, `activeRegion` — position on the Sun and NOAA region.
- `instruments` — instruments that saw it.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/space-weather.md — Duaer Space weather alerts
- https://skills.duaer.com/kp-index.md — Duaer Planetary Kp index

## 相关技能

- [在 Duaer 里查空间天气预警](https://skills.duaer.com/zh/space-weather.md)
- [在 Duaer 里查全球地磁 Kp 指数](https://skills.duaer.com/zh/kp-index.md)
