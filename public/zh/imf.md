> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/imf.md

---
name: duaer-imf
description: >-
  Duaer IMF indicators. IMF World Economic Outlook figures by country, including forecasts: GDP growth, inflation, unemployment, debt, and current account. Also finds indicator codes by words.
  One successful search uses 1 Duaer credit.
---

# Duaer IMF indicators

Duaer IMF indicators reads the IMF DataMapper. With an indicator and countries it returns yearly values, newest first, up to the current year unless you set `to` later to include projections. With only `words` it lists matching indicator codes.

## When to use

- Get growth or inflation forecasts for a country plan or a budget.
- Find the right IMF code first with `words`, then fetch values.

## When not to use

- Long historical series with many indicators. Use https://skills.duaer.com/world-bank.md.
- Monthly or quarterly data. The DataMapper is yearly.

## Call

`GET https://api.duaer.com/v1/data/imf?indicator=NGDP_RPCH&country=CHN,USA&from=2020&to=2027`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `indicator` with `country`, or `words` to find indicator codes.

- `indicator` — IMF indicator code, such as NGDP_RPCH (real GDP growth, %).
- `country` — Three-letter ISO code, or several joined by commas, such as CHN,USA.
- `words` — Optional. Find indicator codes by words, such as inflation, when no indicator is given.
- `from` — Optional. First year.
- `to` — Optional. Last year. Later years may be IMF projections.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common codes: `NGDP_RPCH` real GDP growth (%), `PCPIPCH` inflation (%), `LUR` unemployment (%), `GGXWDG_NGDP` government debt (% of GDP), `BCA_NGDPD` current account (% of GDP), `NGDPDPC` GDP per person (US$).

## Examples

- `GET https://api.duaer.com/v1/data/imf?indicator=NGDP_RPCH&country=CHN,USA&from=2020&to=2027` — real GDP growth with forecasts.
- `GET https://api.duaer.com/v1/data/imf?words=inflation` — find inflation indicator codes.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `country` — ISO3 code (value rows).
- `indicator`, `indicatorName`, `unit` — IMF code, label, and unit.
- `year`, `value` — year and value (value rows).
- `dataset` — dataset name (indicator rows).

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators
- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates

## 相关技能

- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
- [在 Duaer 里查汇率](https://skills.duaer.com/zh/exchange-rates.md)
