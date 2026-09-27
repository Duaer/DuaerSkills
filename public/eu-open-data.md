> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/eu-open-data.md

---
name: duaer-eu-open-data
description: >-
  Duaer EU open data. Find public datasets from EU institutions and national portals on data.europa.eu: title, publisher, country, file formats, and last update.
  One successful search uses 1 Duaer credit.
---

# Duaer EU open data

Duaer EU open data searches the data.europa.eu catalog of more than a million datasets. Titles come in English when the publisher provides a translation.

## When to use

- Find an official dataset on energy, transport, environment, or statistics in Europe.
- List what a country publishes on a topic before building a pipeline.

## When not to use

- Reading the rows of a dataset. Open the dataset link to download its files.
- Research data repositories. Use https://skills.duaer.com/zenodo.md or https://skills.duaer.com/re3data.md.

## Call

`GET https://api.duaer.com/v1/data/eu-open-data?words=air%20quality&country=de`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words in the dataset, such as air quality.
- `country` — Optional. Two-letter code of the publishing country, such as de.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/eu-open-data?words=air%20quality&country=de` — German air-quality datasets.
- `GET https://api.duaer.com/v1/data/eu-open-data?words=energy%20prices&limit=5` — energy price datasets across Europe.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `datasetId` — catalog id.
- `publisher`, `country` — who publishes it.
- `formats` — distribution formats, such as CSV or JSON.
- `modified` — last update date.
- `description` — short description.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/re3data.md

## Related skills

- [World Bank indicators in Duaer](https://skills.duaer.com/world-bank.md)
- [Search re3data in Duaer](https://skills.duaer.com/re3data.md)
