> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/exchange-rates.md

---
name: duaer-exchange-rates
description: >-
  Duaer Exchange rates. European Central Bank reference exchange rates for about 30 currencies, latest or on any working day since 1999, one day or a date range.
  One successful search uses 1 Duaer credit.
---

# Duaer Exchange rates

Duaer Exchange rates returns ECB reference rates through Frankfurter. Rates are published once per working day around 16:00 CET; weekends and holidays have no new rate.

## When to use

- Convert invoice or sales amounts to one currency for a report.
- Chart a currency pair over a few weeks.

## When not to use

- Intraday or trading prices. ECB rates are one daily reference fix.
- Currencies the ECB does not publish, such as many African and Central Asian ones.

## Call

`GET https://api.duaer.com/v1/data/exchange-rates?base=USD&symbols=CNY,EUR,JPY`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of `base`, `symbols`, `date`, or `from`.

- `base` — Three-letter currency code to convert from. Default EUR.
- `symbols` — Optional. Target codes joined by commas, such as CNY,EUR,JPY. Default all.
- `date` — Optional. One past day, YYYY-MM-DD. Data starts 1999-01-04.
- `from` — Optional. Start of a date range, YYYY-MM-DD.
- `to` — Optional. End of a date range, YYYY-MM-DD. Default today.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/exchange-rates?base=USD&symbols=CNY,EUR,JPY` — latest USD rates.
- `GET https://api.duaer.com/v1/data/exchange-rates?base=EUR&symbols=CNY&from=2024-01-01&to=2024-01-19` — EUR to CNY for three weeks.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `base`, `currency` — from and to currency codes.
- `rate` — units of currency for 1 base.
- `date` — ECB publication day.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/imf.md — Duaer IMF indicators
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators

## 相关技能

- [在 Duaer 里查 IMF 经济指标](https://skills.duaer.com/zh/imf.md)
- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
