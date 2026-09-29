> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/usaspending.md

---
name: duaer-usaspending
description: >-
  Duaer US federal agency budgets. Budget authority, obligations, and outlays of US federal agencies for the current fiscal year, from USAspending.
  One successful search uses 1 Duaer credit.
---

# Duaer US federal agency budgets

Duaer US federal agency budgets lists US federal agencies with their current fiscal year budget authority, obligations, and outlays from USAspending, largest first.

## When to use

- Rank US agencies by budget.
- Get one agency’s share of federal spending.

## When not to use

- Regulations and notices. Use https://skills.duaer.com/federal-register.md.
- Company finances. Use https://skills.duaer.com/sec-filings.md.

## Call

`GET https://api.duaer.com/v1/data/usaspending?sort=budget&limit=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `sort` or `words`.

- `sort` — `budget`, `obligated`, or `outlays`. Largest first.
- `words` — Optional. Agency name or abbreviation, such as defense or NASA.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/usaspending?sort=budget&limit=5` — the five largest agencies by budget authority.
- `GET https://api.duaer.com/v1/data/usaspending?words=NASA` — NASA’s budget and outlays.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `agency`, `abbreviation`, `toptierCode` — agency and its codes.
- `fiscalYear`, `fiscalQuarter` — reporting period.
- `budgetAuthorityUsd`, `obligatedUsd`, `outlaysUsd` — US dollars.
- `shareOfTotalPct` — share of all federal budget authority.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/federal-register.md — Duaer US Federal Register
- https://skills.duaer.com/imf.md — Duaer IMF indicators

## 相关技能

- [在 Duaer 里查美国联邦公报](https://skills.duaer.com/zh/federal-register.md)
- [在 Duaer 里查 IMF 经济指标](https://skills.duaer.com/zh/imf.md)
