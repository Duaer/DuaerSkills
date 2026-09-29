> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/hk-mtr.md

---
name: duaer-hk-mtr
description: >-
  Duaer Hong Kong MTR next trains. MTR: the next trains at a Hong Kong station with line, destination, platform, and minutes.
  One successful search uses 1 Duaer credit.
---

# Duaer Hong Kong MTR next trains

Duaer Hong Kong MTR next trains returns the next trains at one MTR station on every line that stops there, soonest first.

## When to use

- Show the next trains at Admiralty.
- Check the platform for the next train to LOHAS Park.

## When not to use

- KMB buses. Use https://skills.duaer.com/hk-bus-eta.md.
- Singapore transport. Use https://skills.duaer.com/sg-taxis.md.

## Call

`GET https://api.duaer.com/v1/data/hk-mtr?station=Tseung%20Kwan%20O`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `station`.

- `station` — MTR station in English or Chinese, or its code, such as Tseung Kwan O or TKO.
- `line` — Optional. Line code: AEL, TCL, TML, TKL, EAL, SIL, TWL, ISL, KTL, or DRL.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hk-mtr?station=Tseung%20Kwan%20O` — next trains at Tseung Kwan O.
- `GET https://api.duaer.com/v1/data/hk-mtr?station=ADM&line=ISL` — Island Line trains at Admiralty.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `line`, `lineName`, `station`, `stationName`, `stationNameZh` — line and station.
- `direction`, `destination`, `destinationName`, `destinationNameZh` — up or down and the terminus.
- `platform`, `minutes`, `time`, `delayed` — platform, minutes to departure, departure time, and whether MTR reports a delay.

A partial name that fits several stations returns 400 listing them.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/hk-bus-eta.md — Duaer Hong Kong KMB bus arrivals
- https://skills.duaer.com/hk-weather.md — Duaer Hong Kong weather

## 相关技能

- [在 Duaer 里查香港九巴到站](https://skills.duaer.com/zh/hk-bus-eta.md)
- [在 Duaer 里查香港天气](https://skills.duaer.com/zh/hk-weather.md)
