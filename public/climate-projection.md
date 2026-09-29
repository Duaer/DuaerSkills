> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/climate-projection.md

---
name: duaer-climate-projection
description: >-
  Duaer Climate projection. High-resolution CMIP6 climate model projections to 2050 for a place: mean temperature and yearly rainfall by year or decade.
  One successful search uses 1 Duaer credit.
---

# Duaer Climate projection

Duaer Climate projection aggregates daily output of HighResMIP CMIP6 climate models (through Open-Meteo) for one point, from 1950 to 2050. Compare models to see the spread.

## When to use

- Estimate how warm a city may be in the 2040s.
- Compare rainfall trends between climate models.

## When not to use

- Past observations. Use https://skills.duaer.com/weather-history.md.
- Next week. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/climate-projection?place=Shanghai`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `place`, or `latitude` and `longitude`.

- `place` — Place name, such as Seattle. Duaer looks up its coordinates.
- `latitude`, `longitude` — Optional. Coordinates instead of a place name.
- `from`, `to` — Optional. Years from 1950 to 2050. Default 2021 to 2050.
- `step` — Optional. `year` or `decade`. Default `decade`.
- `models` — Optional. Up to 3 of EC_Earth3P_HR, MRI_AGCM3_2_S, CMCC_CM2_VHR4, FGOALS_f3_H, HiRAM_SIT_HR, MPI_ESM1_2_XR, NICAM16_8S. Default EC_Earth3P_HR.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/climate-projection?place=Shanghai` — Shanghai by decade to 2050.
- `GET https://api.duaer.com/v1/data/climate-projection?place=Madrid&step=year&from=2040&models=EC_Earth3P_HR,MRI_AGCM3_2_S` — yearly values from two models.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `latitude`, `longitude` — the point.
- `period`, `model` — year or decade, and the climate model.
- `meanTemperatureC`, `precipitationMmPerYear`, `years` — averages and years in the period.

These are model projections, not forecasts; single years vary a lot between models.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather-history.md — Duaer Weather history
- https://skills.duaer.com/nasa-power.md — Duaer Solar and climate (NASA POWER)

## Related skills

- [Weather history in Duaer](https://skills.duaer.com/weather-history.md)
- [Solar and climate (NASA POWER) in Duaer](https://skills.duaer.com/nasa-power.md)
