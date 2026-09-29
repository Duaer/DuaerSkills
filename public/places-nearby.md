> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/places-nearby.md

---
name: duaer-places-nearby
description: >-
  Duaer Places nearby. OpenStreetMap: cafes, pharmacies, hospitals, chargers, and other places near a point, nearest first.
  One successful search uses 1 Duaer credit.
---

# Duaer Places nearby

Duaer Places nearby asks OpenStreetMap for one category of place around a point and returns the nearest first, with address and opening hours when mapped.

## When to use

- Find the nearest pharmacy to a hotel.
- List cafes within 500 m of an office.

## When not to use

- Turning an address into coordinates. Use https://skills.duaer.com/geocoding.md.
- US EV charger details. Use https://skills.duaer.com/ev-stations.md.

## Call

`GET https://api.duaer.com/v1/data/places-nearby?latitude=51.5007&longitude=-0.1246&category=pharmacy`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `latitude` and `longitude`.

- `latitude`, `longitude` — Decimal degrees, such as 51.5007 and -0.1246.
- `category` — `cafe`, `restaurant`, `hospital`, `pharmacy`, `school`, `fuel`, `charging`, `parking`, `atm`, `bank`, `toilets`, `hotel`, `museum`, `park`, or `supermarket`. Default cafe.
- `radius` — Optional. Search radius in meters, 50 to 3000. Default 500.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/places-nearby?latitude=51.5007&longitude=-0.1246&category=pharmacy&radius=1000` — pharmacies within 1 km of Westminster.
- `GET https://api.duaer.com/v1/data/places-nearby?latitude=1.2834&longitude=103.8607` — cafes near Marina Bay.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `category`, `distanceM` — place, kind, and meters away.
- `latitude`, `longitude`, `address` — location.
- `openingHours`, `phone`, `website`, `wheelchair` — details when mapped.
- `osmType`, `osmId` — OpenStreetMap element.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geocoding.md — Duaer Place lookup
- https://skills.duaer.com/driving-route.md — Duaer Driving route

## Related skills

- [Place lookup in Duaer](https://skills.duaer.com/geocoding.md)
- [Driving route in Duaer](https://skills.duaer.com/driving-route.md)
