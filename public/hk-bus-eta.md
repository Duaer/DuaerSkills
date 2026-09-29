> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/hk-bus-eta.md

---
name: duaer-hk-bus-eta
description: >-
  Duaer Hong Kong KMB bus arrivals. KMB: the next buses at each stop of a Hong Kong route, in minutes and clock times.
  One successful search uses 1 Duaer credit.
---

# Duaer Hong Kong KMB bus arrivals

Duaer Hong Kong KMB bus arrivals returns one row per stop of a KMB route in route order, with the next buses in minutes and their clock times.

## When to use

- Show when the next 1A bus reaches a stop.
- List every stop of a route with live arrivals.

## When not to use

- MTR trains. Use https://skills.duaer.com/hk-mtr.md.
- Hong Kong weather. Use https://skills.duaer.com/hk-weather.md.

## Call

`GET https://api.duaer.com/v1/data/hk-bus-eta?route=1A`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `route`.

- `route` — KMB route such as 1A or 960.
- `direction` — Optional. `outbound` or `inbound`. Default `outbound`.
- `stop` — Optional. Words in the stop name, in English or Chinese.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hk-bus-eta?route=1A` — next buses at every outbound stop of route 1A.
- `GET https://api.duaer.com/v1/data/hk-bus-eta?route=960&direction=inbound&stop=tuen%20mun` — inbound 960 stops in Tuen Mun.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `route`, `direction`, `stopSeq`, `stopId` — route, direction, stop order, and KMB stop id.
- `stopName`, `stopNameZh`, `destination`, `destinationZh` — stop and destination in English and Chinese.
- `nextMinutes`, `nextEta`, `etas`, `remark` — minutes to the next bus, its time, the next few times, and the KMB remark.
- `latitude`, `longitude` — stop location.

A stop with no bus scheduled still appears, without `nextMinutes`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/hk-mtr.md — Duaer Hong Kong MTR next trains
- https://skills.duaer.com/hk-weather.md — Duaer Hong Kong weather

## Related skills

- [Hong Kong MTR next trains in Duaer](https://skills.duaer.com/hk-mtr.md)
- [Hong Kong weather in Duaer](https://skills.duaer.com/hk-weather.md)
