> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/tides.md

---
name: duaer-tides
description: >-
  Duaer US tide predictions. High and low tide times and heights from NOAA for a US coastal station or the nearest station to a place.
  One successful search uses 1 Duaer credit.
---

# Duaer US tide predictions

Duaer US tide predictions returns NOAA high and low water predictions in metres above mean lower low water, in station local time. It covers US coasts and territories.

## When to use

- Plan a beach walk, launch, or survey around low tide.
- List the tides for the next few days at a harbour.

## When not to use

- Waves and swell. Use https://skills.duaer.com/marine.md.
- Coasts outside the US. NOAA has no stations there.

## Call

`GET https://api.duaer.com/v1/data/tides?place=Seattle&days=2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `station`, `place`, or `latitude` and `longitude`.

- `station` — Seven-digit NOAA station id, such as 9414290 (San Francisco).
- `place` — Place name, such as Seattle. Duaer uses the nearest station.
- `latitude`, `longitude` — Optional. Coordinates instead of a place name.
- `date` — Optional. Start date, YYYY-MM-DD. Default today.
- `days` — Optional. 1 to 7. Default 2.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/tides?place=Seattle&days=2` — two days of tides in Seattle.
- `GET https://api.duaer.com/v1/data/tides?station=9414290&date=2026-10-01` — San Francisco tides from October 1.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `stationId`, `station`, `state` — the station used.
- `time`, `tide`, `heightM` — local time, high or low, and height in metres.

A place with no US station nearby returns no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/marine.md — Duaer Marine forecast
- https://skills.duaer.com/sunrise.md — Duaer Sunrise and sunset

## Related skills

- [Marine forecast in Duaer](https://skills.duaer.com/marine.md)
- [Sunrise and sunset in Duaer](https://skills.duaer.com/sunrise.md)
