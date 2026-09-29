> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/hk-interbank.md

---
name: duaer-hk-interbank
description: >-
  Duaer Hong Kong interbank rates. HKMA: daily HIBOR overnight and 1-month, the base rate, and the aggregate balance, newest first.
  One successful search uses 1 Duaer credit.
---

# Duaer Hong Kong interbank rates

Duaer Hong Kong interbank rates returns HKMA daily interbank liquidity figures, newest day first.

## When to use

- Track HIBOR for a Hong Kong mortgage report.
- Watch the aggregate balance and the base rate.

## When not to use

- Currency exchange rates. Use https://skills.duaer.com/exchange-rates.md.
- Central bank series from other economies. Use https://skills.duaer.com/bis.md.

## Call

`GET https://api.duaer.com/v1/data/hk-interbank?days=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `days`.

- `days` — Days to return, newest first, 1 to 20. Default 5.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hk-interbank?days=5` — the last five business days.
- `GET https://api.duaer.com/v1/data/hk-interbank?days=20` — about the last month.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `date`, `hiborOvernightPct`, `hibor1mPct`, `baseRatePct` — day, HIBOR overnight and 1-month, and the base rate.
- `openingBalanceHkdMn`, `closingBalanceHkdMn` — aggregate balance in HK$ million.
- `tradeWeightedIndex`, `weakSideCu`, `strongSideCu` — effective exchange rate index and the convertibility undertakings.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates
- https://skills.duaer.com/bis.md — Duaer BIS statistics

## 相关技能

- [在 Duaer 里查汇率](https://skills.duaer.com/zh/exchange-rates.md)
- [在 Duaer 里查国际清算银行统计](https://skills.duaer.com/zh/bis.md)
