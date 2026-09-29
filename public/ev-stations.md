> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ev-stations.md

---
name: duaer-ev-stations
description: >-
  Duaer EV charging and fuel stations. NREL Alternative Fuels Data Center: public EV chargers and hydrogen, CNG, and other fuel stations in the US.
  One successful search uses 1 Duaer credit.
---

# Duaer EV charging and fuel stations

Duaer EV charging and fuel stations lists open public stations from the NREL Alternative Fuels Data Center for a state or ZIP code, with ports, network, and hours. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find public EV chargers near a ZIP code.
- List hydrogen stations in California.

## When not to use

- Any kind of place near a point, worldwide. Use https://skills.duaer.com/places-nearby.md.
- Electricity prices. Use https://skills.duaer.com/eia-electricity.md.

## Call

`GET https://api.duaer.com/v1/data/ev-stations?zip=94105`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `state` or `zip`.

- `state` — Two-letter code such as CA.
- `zip` — Optional. Five-digit ZIP code such as 94105.
- `fuel` — Optional. `ELEC`, `CNG`, `LNG`, `LPG`, `E85`, `BD`, `HY`, or `RD`. Default ELEC.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ev-stations?zip=94105` — public EV chargers in ZIP 94105.
- `GET https://api.duaer.com/v1/data/ev-stations?state=CA&fuel=HY` — hydrogen stations in California.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `stationId`, `name`, `fuel` — station and fuel code.
- `address`, `city`, `state`, `zip`, `latitude`, `longitude` — location.
- `network`, `level2Ports`, `connectors`, `pricing` — charging details when EV.
- `accessHours`, `facilityType`, `phone`, `lastConfirmed` — hours, site, contact, and last check.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/places-nearby.md — Duaer Places nearby
- https://skills.duaer.com/solar-estimate.md — Duaer Solar power estimate

## Related skills

- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
- [Solar power estimate in Duaer](https://skills.duaer.com/solar-estimate.md)
