> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/greenhouse-gases.md

---
name: duaer-greenhouse-gases
description: >-
  Duaer Greenhouse gas levels. NOAA GML: monthly CO2 at Mauna Loa and global CO2, methane, and nitrous oxide, with the change on a year earlier.
  One successful search uses 1 Duaer credit.
---

# Duaer Greenhouse gas levels

Duaer Greenhouse gas levels reads the NOAA Global Monitoring Laboratory monthly series, newest month first, with the trend and the change on a year earlier.

## When to use

- Report the latest CO2 reading at Mauna Loa.
- Chart the rise of methane over a year.

## When not to use

- Future climate projections. Use https://skills.duaer.com/climate-projection.md.
- Grid carbon intensity. Use https://skills.duaer.com/grid-carbon.md.

## Call

`GET https://api.duaer.com/v1/data/greenhouse-gases?gas=co2`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `gas`.

- `gas` — `co2` (Mauna Loa), `co2-global`, `ch4`, or `n2o`. Default co2.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/greenhouse-gases?gas=co2` — monthly CO2 at Mauna Loa.
- `GET https://api.duaer.com/v1/data/greenhouse-gases?gas=ch4` — global methane.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `gas`, `month` — series and YYYY-MM.
- `value`, `unit` — monthly mean, in ppm or ppb.
- `trend` — seasonally adjusted value.
- `changeOnYear` — change on the same month a year earlier.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/climate-projection.md — Duaer Climate projection
- https://skills.duaer.com/grid-carbon.md — Duaer GB grid carbon intensity

## Related skills

- [Climate projection in Duaer](https://skills.duaer.com/climate-projection.md)
- [GB grid carbon intensity in Duaer](https://skills.duaer.com/grid-carbon.md)
