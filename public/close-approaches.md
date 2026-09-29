> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/close-approaches.md

---
name: duaer-close-approaches
description: >-
  Duaer Asteroid close approaches. Upcoming asteroid and comet close approaches to Earth from NASA JPL, with date, distance in lunar distances, speed, and size.
  One successful search uses 1 Duaer credit.
---

# Duaer Asteroid close approaches

Duaer Asteroid close approaches lists objects that will pass near Earth, soonest first, from the NASA JPL close-approach data.

## When to use

- See which asteroids pass within ten lunar distances this month.
- Report the closest upcoming flyby.

## When not to use

- Orbit and size of one object. Use https://skills.duaer.com/small-bodies.md.
- Space weather. Use https://skills.duaer.com/space-weather.md.

## Call

`GET https://api.duaer.com/v1/data/close-approaches?days=60&lunarDistances=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `days` or `lunarDistances`.

- `days` — Optional. From now through this many days, 1 to 365. Default 60.
- `lunarDistances` — Optional. Only approaches within this many Moon distances, 0.1 to 100. Default 10.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/close-approaches?days=60&lunarDistances=10` — flybys within ten lunar distances in 60 days.
- `GET https://api.duaer.com/v1/data/close-approaches?days=365&lunarDistances=1` — objects passing closer than the Moon this year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `designation`, `fullName` — object.
- `closeApproachUtc` — time of closest approach.
- `distanceAu`, `distanceKm`, `distanceLunar` — nominal distance.
- `relativeSpeedKms`, `absoluteMagnitude`, `diameterKm` — speed, brightness, and size when known.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/small-bodies.md — Duaer Asteroids and comets (JPL)
- https://skills.duaer.com/space-weather.md — Duaer Space weather alerts

## Related skills

- [Asteroids and comets (JPL) in Duaer](https://skills.duaer.com/small-bodies.md)
- [Space weather alerts in Duaer](https://skills.duaer.com/space-weather.md)
