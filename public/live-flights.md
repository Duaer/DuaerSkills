> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/live-flights.md

---
name: duaer-live-flights
description: >-
  Duaer Live flights. OpenSky Network: aircraft in the air now over an area, with callsign, position, altitude, and speed.
  One successful search uses 1 Duaer credit.
---

# Duaer Live flights

Duaer Live flights reads OpenSky Network state vectors for a box of up to 30 degrees on each side. Filter by callsign to follow one airline.

## When to use

- Count aircraft over Switzerland right now.
- Find British Airways flights over the UK.

## When not to use

- Satellites and space weather. Use https://skills.duaer.com/space-weather.md.
- Weather at an airport. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/live-flights?area=45.8,5.9,47.8,10.5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `area`.

- `area` — south,west,north,east in degrees, such as 45.8,5.9,47.8,10.5 for Switzerland.
- `callsign` — Optional. Callsign or its start, such as BAW for British Airways.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/live-flights?area=45.8,5.9,47.8,10.5` — aircraft over Switzerland.
- `GET https://api.duaer.com/v1/data/live-flights?area=49,-6,56,2&callsign=BAW` — British Airways flights over the UK.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `icao24`, `callsign`, `originCountry` — aircraft address, flight, and registration country.
- `latitude`, `longitude`, `altitudeM`, `onGround` — position.
- `speedKmh`, `headingDeg`, `verticalRateMs` — motion.
- `squawk`, `lastContact` — transponder code and last signal time.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/places-nearby.md — Duaer Places nearby

## Related skills

- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
