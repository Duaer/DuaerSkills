> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ocean-datasets.md

---
name: duaer-ocean-datasets
description: >-
  Duaer Ocean datasets (NOAA). NOAA CoastWatch ERDDAP: ocean and climate datasets such as sea surface temperature, chlorophyll, and winds.
  One successful search uses 1 Duaer credit.
---

# Duaer Ocean datasets (NOAA)

Duaer Ocean datasets (NOAA) searches the NOAA CoastWatch ERDDAP catalog and returns datasets with their data and graph links.

## When to use

- Find a daily sea surface temperature dataset.
- Locate chlorophyll data for an ocean study.

## When not to use

- Tide times. Use https://skills.duaer.com/tides.md.
- Marine weather forecasts. Use https://skills.duaer.com/marine.md.

## Call

`GET https://api.duaer.com/v1/data/ocean-datasets?words=chlorophyll`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words such as sea surface temperature or chlorophyll.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ocean-datasets?words=chlorophyll` — chlorophyll datasets.
- `GET https://api.duaer.com/v1/data/ocean-datasets?words=sea%20surface%20temperature` — sea surface temperature datasets.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `datasetId`, `institution` — ERDDAP dataset and provider.
- `kind`, `dataUrl` — grid or table and the data access link.
- `graphUrl`, `background` — graph builder and background page.
- `description` — dataset summary.

No match returns no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/marine.md — Duaer Marine forecast
- https://skills.duaer.com/tides.md — Duaer US tide predictions

## Related skills

- [Marine forecast in Duaer](https://skills.duaer.com/marine.md)
- [US tide predictions in Duaer](https://skills.duaer.com/tides.md)
