> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/census.md

---
name: duaer-census
description: >-
  Duaer US Census ACS. US Census American Community Survey 5-year: population, household income, age, home value, rent, and poverty by state or county.
  One successful search uses 1 Duaer credit.
---

# Duaer US Census ACS

Duaer US Census ACS reads one measure from the American Community Survey 5-year estimates (2020–2024) for every state, or for the counties of one state, highest first. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Rank US states by median household income.
- Find the counties in a state with the highest poverty rate.

## When not to use

- Country comparisons. Use https://skills.duaer.com/world-bank.md.
- Federal spending. Use https://skills.duaer.com/usaspending.md.

## Call

`GET https://api.duaer.com/v1/data/census?measure=medianIncome`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `measure`, and optionally `state`.

- `measure` — `population`, `medianIncome`, `medianAge`, `medianHomeValue`, `medianRent`, or `povertyRate`. Default population.
- `state` — Optional. Two-letter code such as CA; rows are then its counties.
- `words` — Optional. Words in the place name, such as Los Angeles.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/census?measure=medianIncome` — states by median household income.
- `GET https://api.duaer.com/v1/data/census?measure=povertyRate&state=TX` — Texas counties by poverty rate.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `measure`, `value`, `unit` — place, measure, figure, and unit.
- `stateFips`, `countyFips` — FIPS codes.
- `year` — last year of the 5-year window.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/world-bank.md — Duaer World Bank indicators

## 相关技能

- [在 Duaer 里查美国联邦机构预算](https://skills.duaer.com/zh/usaspending.md)
- [在 Duaer 里查世界银行指标](https://skills.duaer.com/zh/world-bank.md)
