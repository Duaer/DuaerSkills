> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/amap-route.md

---
name: duaer-amap-route
description: >-
  Duaer Amap routes in China. Amap: driving or walking routes in China with distance, time, tolls, and steps.
  One successful search uses 1 Duaer credit.
---

# Duaer Amap routes in China

Duaer Amap routes in China plans driving or walking routes in mainland China between two coordinates or addresses. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Estimate the drive from a station to an airport.
- Get walking steps between two points.

## When not to use

- Driving routes outside China. Use https://skills.duaer.com/driving-route.md.
- Coordinates only. Use https://skills.duaer.com/amap-geocode.md.

## Call

`GET https://api.duaer.com/v1/data/amap-route?origin=116.378888,39.865243&destination=116.397477,39.908692`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `origin` and `destination`.

- `origin` — Longitude,latitude such as 116.481028,39.989643, or a URL-encoded address.
- `destination` — Longitude,latitude or a URL-encoded address.
- `mode` — Optional. `driving` or `walking`. Default `driving`.
- `city` — Optional. City name or adcode used to find addresses.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/amap-route?origin=116.378888,39.865243&destination=116.397477,39.908692` — drive from Beijing South Station to Tiananmen.
- `GET https://api.duaer.com/v1/data/amap-route?origin=120.155,30.274&destination=120.148,30.259&mode=walking` — a walk in Hangzhou.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `mode`, `rank`, `distanceMeters`, `durationMinutes`, `strategy` — route and Amap strategy.
- `tollsYuan`, `tollDistanceMeters`, `trafficLights`, `taxiCostYuan` — tolls, traffic lights, and estimated taxi fare.
- `origin`, `destination`, `steps` — coordinates used and turn-by-turn steps.

Driving returns up to three routes; an address is geocoded first in the same search.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/amap-geocode.md — Duaer Amap geocoding in China
- https://skills.duaer.com/amap-poi.md — Duaer Amap places in China

## 相关技能

- [在 Duaer 里查高德地理编码](https://skills.duaer.com/zh/amap-geocode.md)
- [在 Duaer 里查高德地点搜索](https://skills.duaer.com/zh/amap-poi.md)
