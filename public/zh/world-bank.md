> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/world-bank.md

---
name: duaer-world-bank
description: >-
  Duaer World Bank indicators. Yearly development data for any country from the World Bank: GDP, population, inflation, trade, health, education, and 1,000+ other indicators by code.
  One successful search uses 1 Duaer credit.
---

# Duaer World Bank indicators

Duaer World Bank indicators reads the World Bank Indicators API. Without years, Duaer returns the most recent non-empty values; with `from` or `to` it returns that span.

## When to use

- Compare countries on GDP, population, or other macro indicators in a market-entry memo.
- Pull a time series for a chart or a model input.

## When not to use

- Forecasts of next years. Use https://skills.duaer.com/imf.md (World Economic Outlook).
- Health statistics by sex or age. Use https://skills.duaer.com/who-gho.md.

## Call

`GET https://api.duaer.com/v1/data/world-bank?country=CN,US,IN&indicator=NY.GDP.MKTP.CD&limit=6`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `country` and `indicator`.

- `country` — ISO code, or several joined by commas, such as CN,US. Use WLD for the world.
- `indicator` — World Bank indicator code, such as NY.GDP.MKTP.CD (GDP in current US$).
- `from` — Optional. First year, such as 2010.
- `to` — Optional. Last year.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: `NY.GDP.MKTP.CD` GDP (current US$), `NY.GDP.PCAP.CD` GDP per person, `SP.POP.TOTL` population, `FP.CPI.TOTL.ZG` inflation (%), `SL.UEM.TOTL.ZS` unemployment (%), `NE.EXP.GNFS.ZS` exports (% of GDP), `SP.DYN.LE00.IN` life expectancy.

## Examples

- `GET https://api.duaer.com/v1/data/world-bank?country=CN,US,IN&indicator=NY.GDP.MKTP.CD&limit=6` — latest GDP of three countries.
- `GET https://api.duaer.com/v1/data/world-bank?country=WLD&indicator=SP.POP.TOTL&from=2000&to=2024&limit=20` — world population since 2000.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `country`, `countryCode` — country name and ISO3 code.
- `indicator`, `indicatorName` — indicator code and name.
- `year` — data year.
- `value` — numeric value in the unit of the indicator.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/imf.md — Duaer IMF indicators
- https://skills.duaer.com/trade.md — Duaer International trade
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## 相关技能

- [在 Duaer 里查 IMF 经济指标](https://skills.duaer.com/zh/imf.md)
- [在 Duaer 里查国际贸易](https://skills.duaer.com/zh/trade.md)
- [在 Duaer 里查 WHO 卫生统计](https://skills.duaer.com/zh/who-gho.md)
