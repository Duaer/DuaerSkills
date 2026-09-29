> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/treasury.md

---
name: duaer-treasury
description: >-
  Duaer US Treasury fiscal data. US Treasury Fiscal Data: daily total public debt, average interest rates on Treasury securities, and Treasury reporting exchange rates.
  One successful search uses 1 Duaer credit.
---

# Duaer US Treasury fiscal data

Duaer US Treasury fiscal data reads three official US Treasury datasets, newest first: debt to the penny, average interest rates by security, and quarterly reporting exchange rates.

## When to use

- Get the latest US total public debt.
- Look up the rate the US Treasury uses to convert a foreign currency.

## When not to use

- Market exchange rates. Use https://skills.duaer.com/exchange-rates.md.
- Agency budgets. Use https://skills.duaer.com/usaspending.md.

## Call

`GET https://api.duaer.com/v1/data/treasury?dataset=debt`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `dataset`.

- `dataset` — `debt` (debt to the penny), `interest` (average rates by security), or `exchange` (rates per US dollar).
- `words` — Optional. Filter rows, such as Treasury Bills or China.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/treasury?dataset=debt&limit=5` — the last five days of total public debt.
- `GET https://api.duaer.com/v1/data/treasury?dataset=exchange&words=China` — Treasury rates for the renminbi.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `date` — record date.
- Debt: `totalDebtUsd`, `debtHeldByPublicUsd`, `intragovernmentalUsd`.
- Interest: `security`, `securityType`, `averageRatePercent`.
- Exchange: `country`, `currency`, `perUsd`, `effectiveDate`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates

## Related skills

- [US federal agency budgets in Duaer](https://skills.duaer.com/usaspending.md)
- [Exchange rates in Duaer](https://skills.duaer.com/exchange-rates.md)
