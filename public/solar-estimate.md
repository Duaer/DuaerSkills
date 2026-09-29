> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/solar-estimate.md

---
name: duaer-solar-estimate
description: >-
  Duaer Solar power estimate. NREL PVWatts: yearly and monthly electricity a rooftop solar system would make at a location.
  One successful search uses 1 Duaer credit.
---

# Duaer Solar power estimate

Duaer Solar power estimate runs NREL PVWatts for a location and returns the yearly total first, then one row per month. Set the system size, tilt, and facing to match a roof. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Estimate how much a 6 kW roof system would make in Denver.
- Compare summer and winter solar output.

## When not to use

- Daily sunshine and weather history. Use https://skills.duaer.com/nasa-power.md.
- Sunrise and sunset times. Use https://skills.duaer.com/sunrise.md.

## Call

`GET https://api.duaer.com/v1/data/solar-estimate?latitude=40.0&longitude=-105.2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `latitude` and `longitude`.

- `latitude`, `longitude` — Decimal degrees, such as 40.0 and -105.2.
- `systemKw` — Optional. DC size in kW. Default 4.
- `tilt` — Optional. Panel tilt in degrees, 0 to 90. Default 20.
- `azimuth` — Optional. Compass direction the panels face; 180 is south. Default 180.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/solar-estimate?latitude=40.0&longitude=-105.2` — a 4 kW system near Boulder.
- `GET https://api.duaer.com/v1/data/solar-estimate?latitude=33.45&longitude=-112.07&systemKw=6&tilt=30` — a 6 kW system in Phoenix.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `period` — `year` or a month name.
- `acKwh` — AC electricity in kWh.
- `sunKwhPerM2Day`, `capacityFactorPct` — sunshine on the panels and capacity factor.
- `systemKw`, `tilt`, `azimuth`, `weatherSite` — inputs used and the weather station.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)
- https://skills.duaer.com/ev-stations.md — Duaer EV charging and fuel stations

## Related skills

- [Solar and climate (NASA POWER) in Duaer](https://skills.duaer.com/nasa-power.md)
- [EV charging and fuel stations in Duaer](https://skills.duaer.com/ev-stations.md)
