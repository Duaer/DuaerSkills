> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/sec-frames.md

---
name: duaer-sec-frames
description: >-
  Duaer Company rankings (SEC). SEC EDGAR XBRL: US-listed companies ranked by revenue, net income, assets, or cash for one calendar year.
  One successful search uses 1 Duaer credit.
---

# Duaer Company rankings (SEC)

Duaer Company rankings (SEC) ranks every company that reported a metric to SEC EDGAR for a calendar year, largest first. Balance sheet metrics use the year-end value.

## When to use

- List the largest US companies by 2024 revenue.
- Rank banks by total assets.

## When not to use

- Several years of one company. Use https://skills.duaer.com/company-financials.md.
- Country economic data. Use https://skills.duaer.com/world-bank.md.

## Call

`GET https://api.duaer.com/v1/data/sec-frames?metric=revenue&year=2024`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `metric` or `year`.

- `metric` — `revenue`, `netIncome`, `operatingIncome`, `eps`, `assets`, `liabilities`, `equity`, or `cash`. Default revenue.
- `year` — Optional. Calendar year from 2009. Default is last year.
- `words` — Optional. Words in the company name, such as bank.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sec-frames?metric=revenue&year=2024` — the top companies by 2024 revenue.
- `GET https://api.duaer.com/v1/data/sec-frames?metric=assets&words=bank` — banks ranked by total assets.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `rank`, `company`, `cik` — position and company.
- `metric`, `value`, `unit` — figure and unit.
- `periodStart`, `periodEnd` — reporting period, or the balance sheet date.
- `location` — state or country code the company reports.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/company-financials.md — Duaer Company financials (SEC)
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators

## 相关技能

- [在 Duaer 里查上市公司财务（SEC）](https://skills.duaer.com/zh/company-financials.md)
- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
