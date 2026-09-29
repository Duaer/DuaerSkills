> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/sg-taxis.md

---
name: duaer-sg-taxis
description: >-
  Duaer Singapore taxis nearby. data.gov.sg: available taxis near a point in Singapore, nearest first, with distance and the count in the radius.
  One successful search uses 1 Duaer credit.
---

# Duaer Singapore taxis nearby

Duaer Singapore taxis nearby reads the live positions of available taxis across Singapore and returns the ones within a radius of your point, nearest first.

## When to use

- See how many taxis are free near Raffles Place.
- Find the nearest available taxis around Changi Airport.

## When not to use

- Car park lots. Use https://skills.duaer.com/sg-carparks.md.
- Driving time between two points. Use https://skills.duaer.com/driving-route.md.

## Call

`GET https://api.duaer.com/v1/data/sg-taxis?latitude=1.2839&longitude=103.8515`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `latitude` and `longitude`.

- `latitude`, `longitude` — A point in Singapore, such as 1.2839 and 103.8515.
- `radius` — Optional. Meters, 50 to 5000. Default 500.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sg-taxis?latitude=1.2839&longitude=103.8515` — free taxis within 500 m of Raffles Place.
- `GET https://api.duaer.com/v1/data/sg-taxis?latitude=1.3644&longitude=103.9915&radius=2000` — free taxis within 2 km of Changi Airport.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `rank`, `distanceMeters` — order and distance from your point.
- `latitude`, `longitude` — taxi position.
- `withinRadius`, `observedAt` — free taxis in the radius and when the positions were taken.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sg-carparks.md — Duaer Singapore HDB car parks
- https://skills.duaer.com/driving-route.md — Duaer Driving route

## 相关技能

- [在 Duaer 里查新加坡组屋停车场](https://skills.duaer.com/zh/sg-carparks.md)
- [在 Duaer 里查驾车路线](https://skills.duaer.com/zh/driving-route.md)
