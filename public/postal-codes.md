> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/postal-codes.md

---
name: duaer-postal-codes
description: >-
  Duaer Postal codes. Zippopotam.us: the places for a postal code, or the postal codes of a city, in about 60 countries.
  One successful search uses 1 Duaer credit.
---

# Duaer Postal codes

Duaer Postal codes turns a postal code into places with coordinates, or lists the postal codes of a city when you give a state and city.

## When to use

- Check which city a ZIP code belongs to.
- List all postal codes in Beverly Hills.

## When not to use

- Full street addresses. Use https://skills.duaer.com/geocoding.md.
- Places around a point. Use https://skills.duaer.com/places-nearby.md.

## Call

`GET https://api.duaer.com/v1/data/postal-codes?country=US&postalCode=90210`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `postalCode`, or `state` and `city`.

- `country` — Optional. Two-letter code such as US, DE, or FR. Default US.
- `postalCode` — Postal code such as 90210.
- `state` — Optional. State code such as CA, used with `city` instead of a postal code.
- `city` — Optional. City name, used with `state`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/postal-codes?country=US&postalCode=90210` — the place for ZIP 90210.
- `GET https://api.duaer.com/v1/data/postal-codes?country=US&state=CA&city=Beverly%20Hills` — the ZIP codes of Beverly Hills.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `postalCode`, `place` — code and place name.
- `state`, `stateCode`, `country`, `countryCode` — region and country.
- `latitude`, `longitude` — approximate center.

An unknown code returns no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geocoding.md — Duaer Place lookup
- https://skills.duaer.com/places-nearby.md — Duaer Places nearby

## Related skills

- [Place lookup in Duaer](https://skills.duaer.com/geocoding.md)
- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
