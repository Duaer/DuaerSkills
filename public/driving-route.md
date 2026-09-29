> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/driving-route.md

---
name: duaer-driving-route
description: >-
  Duaer Driving route. OSRM on OpenStreetMap: driving distance, time, and main roads between two points, with alternatives.
  One successful search uses 1 Duaer credit.
---

# Duaer Driving route

Duaer Driving route asks the public OSRM router for the fastest car route between two points, plus alternatives. Times assume free-flowing traffic.

## When to use

- Estimate the drive time between two sites.
- Compare route distances for a delivery plan.

## When not to use

- Places around a point. Use https://skills.duaer.com/places-nearby.md.
- Addresses to coordinates. Use https://skills.duaer.com/geocoding.md.

## Call

`GET https://api.duaer.com/v1/data/driving-route?from=51.5007,-0.1246&to=51.5081,-0.0759`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `from` and `to`.

- `from` — Start as latitude,longitude such as 51.5007,-0.1246.
- `to` — End as latitude,longitude such as 51.5081,-0.0759.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/driving-route?from=51.5007,-0.1246&to=51.5081,-0.0759` — Westminster to the Tower of London.
- `GET https://api.duaer.com/v1/data/driving-route?from=40.7580,-73.9855&to=40.6413,-73.7781` — Times Square to JFK airport.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `route` — fastest or alternative number.
- `distanceKm`, `durationMin` — driving distance and time.
- `via` — main roads on the route.

No drivable route returns no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/places-nearby.md — Duaer Places nearby
- https://skills.duaer.com/geocoding.md — Duaer Place lookup

## Related skills

- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
- [Place lookup in Duaer](https://skills.duaer.com/geocoding.md)
