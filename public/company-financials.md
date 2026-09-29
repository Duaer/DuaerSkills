> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/company-financials.md

---
name: duaer-company-financials
description: >-
  Duaer Company financials (SEC). SEC EDGAR XBRL: yearly or quarterly revenue, net income, EPS, assets, and cash of a US-listed company.
  One successful search uses 1 Duaer credit.
---

# Duaer Company financials (SEC)

Duaer Company financials (SEC) looks up a ticker in SEC EDGAR and returns one metric from the company’s 10-K (or 10-Q) filings, newest period first.

## When to use

- Get Apple revenue for the last five fiscal years.
- Track Microsoft quarterly net income.

## When not to use

- Ranking many companies. Use https://skills.duaer.com/sec-frames.md.
- Crypto prices. Use https://skills.duaer.com/crypto-prices.md.

## Call

`GET https://api.duaer.com/v1/data/company-financials?ticker=AAPL`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `ticker`.

- `ticker` — US stock ticker such as AAPL.
- `metric` — `revenue`, `netIncome`, `operatingIncome`, `eps`, `assets`, `liabilities`, `equity`, or `cash`. Default revenue.
- `quarterly` — Optional. `yes` for 10-Q quarters instead of 10-K years.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/company-financials?ticker=AAPL` — Apple yearly revenue.
- `GET https://api.duaer.com/v1/data/company-financials?ticker=MSFT&metric=netIncome&quarterly=yes` — Microsoft quarterly net income.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `company`, `ticker`, `cik` — company and SEC ID.
- `metric`, `concept` — metric asked and the US-GAAP concept used.
- `value`, `unit` — figure, such as USD or USD per share.
- `periodStart`, `periodEnd`, `form`, `filed` — period, filing form, and filing date.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-frames.md — Duaer Company rankings (SEC)
- https://skills.duaer.com/treasury.md — Duaer US Treasury fiscal data

## Related skills

- [Company rankings (SEC) in Duaer](https://skills.duaer.com/sec-frames.md)
- [US Treasury fiscal data in Duaer](https://skills.duaer.com/treasury.md)
