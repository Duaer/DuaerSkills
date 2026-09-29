> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/eurostat.md

---
name: duaer-eurostat
description: >-
  Duaer Eurostat statistics. Official EU statistics by Eurostat dataset code: GDP, prices, jobs, trade, energy, and population, by country and period.
  One successful search uses 1 Duaer credit.
---

# Duaer Eurostat statistics

Duaer Eurostat statistics reads a Eurostat dataset and returns one row per value, newest period first. Narrow it with country codes and dimension filters so each row is a single figure.

## When to use

- Compare GDP, inflation, or unemployment across EU countries.
- Pull an official EU time series into a table.

## When not to use

- Finding datasets by topic. Use https://skills.duaer.com/eu-open-data.md.
- Countries worldwide. Use https://skills.duaer.com/world-bank.md.

## Call

`GET https://api.duaer.com/v1/data/eurostat?dataset=nama_10_gdp&country=DE,FR&filters=unit=CP_MEUR,na_item=B1GQ&from=2019`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `dataset`.

- `dataset` — Eurostat dataset code, such as nama_10_gdp (GDP) or prc_hicp_manr (inflation).
- `country` — Optional. Eurostat geo codes joined by commas, such as DE,FR. EU27_2020 is the EU.
- `filters` — Optional. dimension=code pairs joined by commas, such as unit=CP_MEUR,na_item=B1GQ.
- `from` — Optional. First period, such as 2019, 2025-06, or 2025-Q1.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common datasets: `nama_10_gdp` GDP, `prc_hicp_manr` inflation, `une_rt_m` unemployment, `demo_pjan` population, `nrg_bal_c` energy balance.

## Examples

- `GET https://api.duaer.com/v1/data/eurostat?dataset=nama_10_gdp&country=DE,FR&filters=unit=CP_MEUR,na_item=B1GQ&from=2019` — GDP of Germany and France since 2019.
- `GET https://api.duaer.com/v1/data/eurostat?dataset=prc_hicp_manr&country=EU27_2020&filters=coicop=CP00&from=2025-01` — EU inflation this year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `dataset`, `datasetLabel` — code and title.
- `country`, `countryName`, `period` — geo code, name, and period.
- `value`, `unit` — the figure and its unit.
- `breakdown`, `filters` — dimensions that vary between rows, and all dimension codes.
- `status` — Eurostat flag, such as p for provisional.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/eu-open-data.md — Duaer EU open data
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators

## 相关技能

- [在 Duaer 里查欧盟开放数据](https://skills.duaer.com/zh/eu-open-data.md)
- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
