> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/owid.md

---
name: duaer-owid
description: >-
  Duaer Our World in Data. Country time series behind any Our World in Data chart, such as life expectancy or CO2 per capita, or find charts by words.
  One successful search uses 1 Duaer credit.
---

# Duaer Our World in Data

Duaer Our World in Data reads the data behind an Our World in Data chart for chosen countries, newest year first. Without a chart, it finds charts that match your words.

## When to use

- Compare countries on a long-run indicator such as life expectancy.
- Find which chart covers a topic, then read its data.

## When not to use

- Official national accounts. Use https://skills.duaer.com/world-bank.md.
- SDG series by code. Use https://skills.duaer.com/un-sdg.md.

## Call

`GET https://api.duaer.com/v1/data/owid?chart=life-expectancy&countries=CHN,USA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `chart`, or `words` to find charts.

- `chart` — Chart slug from the chart URL, such as life-expectancy or co2-emissions-per-capita.
- `countries` — Optional. ISO codes such as CHN,USA; OWID_WRL is the world. Default CHN,USA.
- `words` — Optional. With no chart, list charts that match, such as electricity from solar.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/owid?chart=life-expectancy&countries=CHN,USA` — life expectancy in China and the US.
- `GET https://api.duaer.com/v1/data/owid?words=electricity%20from%20solar` — charts about solar electricity.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- Chart data: `chart`, `entity`, `code`, `year`, `unit`, plus one field per chart column.
- Chart search: `chart` slug and `countries` covered.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/un-sdg.md — Duaer UN SDG indicators

## Related skills

- [World Bank indicators in Duaer](https://skills.duaer.com/world-bank.md)
- [UN SDG indicators in Duaer](https://skills.duaer.com/un-sdg.md)
