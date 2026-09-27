> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/natural-events.md

---
name: duaer-natural-events
description: >-
  Duaer Natural events. Wildfires, severe storms, volcanoes, floods, sea ice, and other natural events tracked by NASA EONET, with latest position, size, and source link.
  One successful search uses 1 Duaer credit.
---

# Duaer Natural events

Duaer Natural events lists events from NASA EONET (Earth Observatory Natural Event Tracker). Each row carries the latest known position and size, and a link to the agency that reports it.

## When to use

- See which wildfires or storms are active now, for supply-chain or travel risk.
- Count events of one kind in a period for a report.

## When not to use

- Earthquakes with magnitude filters. Use https://skills.duaer.com/earthquakes.md.
- Official evacuation or warning decisions. Follow local authorities.

## Call

`GET https://api.duaer.com/v1/data/natural-events?category=wildfires&days=30`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of `category`, `status`, or `days`.

- `category` — Optional. One of drought, dustHaze, earthquakes, floods, landslides, manmade, seaLakeIce, severeStorms, snow, tempExtremes, volcanoes, waterColor, wildfires.
- `status` — Optional. open, closed, or all. Default open.
- `days` — Optional. Only events active in the last 1 to 3650 days.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/natural-events?category=wildfires&days=30` — wildfires active in the last 30 days.
- `GET https://api.duaer.com/v1/data/natural-events?category=volcanoes&status=all&days=365` — volcanic events in the past year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `eventId` — EONET id.
- `category` — event category.
- `date` — time of the latest position.
- `latitude`, `longitude` — latest point, when the event is a point.
- `magnitude` — size with unit, such as 828 acres or 65 kts.
- `closed` — close date, empty when still open.
- `sourceIds` — reporting sources, such as InciWeb or JTWC.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/earthquakes.md — Duaer Earthquakes
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## Related skills

- [Earthquakes in Duaer](https://skills.duaer.com/earthquakes.md)
- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
