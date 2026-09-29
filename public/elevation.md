> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/elevation.md

---
name: duaer-elevation
description: >-
  Duaer Elevation. Ground height above sea level for a place or coordinates, from the Copernicus 90 m digital elevation model.
  One successful search uses 1 Duaer credit.
---

# Duaer Elevation

Duaer Elevation returns the ground height above sea level for one point, from the Copernicus 90 m digital elevation model. Give a place name or exact coordinates.

## When to use

- Check the altitude of a city or a site.
- Add height to coordinates in a survey table.

## When not to use

- Coordinates for a name. Use https://skills.duaer.com/geocoding.md.
- Weather at altitude. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/elevation?place=Lhasa`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`.

- `place` — Place name, such as Lhasa. Duaer looks up its coordinates.
- `latitude`, `longitude` — Optional. Coordinates instead of a place name.

## Examples

- `GET https://api.duaer.com/v1/data/elevation?place=Lhasa` — height of Lhasa.
- `GET https://api.duaer.com/v1/data/elevation?latitude=27.9881&longitude=86.925` — height near the summit of Everest.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place` — resolved place name.
- `latitude`, `longitude` — the point used.
- `elevationM` — metres above sea level.

The search returns one row.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geocoding.md — Duaer Place lookup
- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)

## Related skills

- [Place lookup in Duaer](https://skills.duaer.com/geocoding.md)
- [Solar and climate (NASA POWER) in Duaer](https://skills.duaer.com/nasa-power.md)
