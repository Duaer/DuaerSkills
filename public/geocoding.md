> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/geocoding.md

---
name: duaer-geocoding
description: >-
  Duaer Place lookup. Turn a place name into coordinates, country, region, time zone, population, and elevation from the GeoNames gazetteer via Open-Meteo.
  One successful search uses 1 Duaer credit.
---

# Duaer Place lookup

Duaer Place lookup turns a city, town, or place name into coordinates and basic facts. Several places can share a name, so Duaer returns the best matches first; add `country` to narrow them.

## When to use

- Get latitude and longitude before calling a point-based source.
- Tell apart places that share a name, such as Springfield.

## When not to use

- Weather at a place. Use https://skills.duaer.com/weather.md.
- Ground height only. Use https://skills.duaer.com/elevation.md.

## Call

`GET https://api.duaer.com/v1/data/geocoding?place=Springfield&country=US`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`.

- `place` — City, town, or place name, such as Springfield.
- `country` — Optional. Two-letter country code, such as US.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/geocoding?place=Springfield&country=US` — places called Springfield in the United States.
- `GET https://api.duaer.com/v1/data/geocoding?place=Kyoto&limit=1` — the best match for Kyoto.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `country`, `countryCode`, `region`, `district` — place and its administrative areas.
- `latitude`, `longitude`, `timezone` — position and IANA time zone.
- `population`, `elevationM` — people and height above sea level, when known.
- `featureCode`, `geonameId` — GeoNames feature class and id.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/elevation.md — Duaer Elevation
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## Related skills

- [Elevation in Duaer](https://skills.duaer.com/elevation.md)
- [Weather forecast in Duaer](https://skills.duaer.com/weather.md)
