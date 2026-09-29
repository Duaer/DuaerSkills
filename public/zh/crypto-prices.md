> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/crypto-prices.md

---
name: duaer-crypto-prices
description: >-
  Duaer Crypto prices. Kraken: live prices of Bitcoin, Ether, and other cryptocurrencies with today’s change, 24-hour range, and volume.
  One successful search uses 1 Duaer credit.
---

# Duaer Crypto prices

Duaer Crypto prices reads the Kraken public ticker for up to 10 symbols in one quote currency. Change is measured from the 00:00 UTC open.

## When to use

- Show BTC, ETH, and SOL prices in a dashboard.
- Alert when Bitcoin moves more than 5% today.

## When not to use

- Currency exchange rates. Use https://skills.duaer.com/exchange-rates.md.
- Company results. Use https://skills.duaer.com/company-financials.md.

## Call

`GET https://api.duaer.com/v1/data/crypto-prices?symbols=BTC,ETH,SOL`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `symbols`.

- `symbols` — Up to 10 symbols separated by commas, such as BTC,ETH,SOL.
- `quote` — Optional. `USD`, `EUR`, `GBP`, `CAD`, `JPY`, `AUD`, `CHF`, `USDT`, or `USDC`. Default USD.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/crypto-prices?symbols=BTC,ETH,SOL` — three prices in US dollars.
- `GET https://api.duaer.com/v1/data/crypto-prices?symbols=DOGE,XRP&quote=EUR` — two prices in euros.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `symbol`, `quote` — pair, such as BTC and USD.
- `last`, `bid`, `ask` — last trade and best prices.
- `openToday`, `changeTodayPct` — 00:00 UTC open and change since then.
- `high24h`, `low24h`, `volume24h`, `vwap24h`, `trades24h` — 24-hour range and activity.

A symbol Kraken does not list in that currency returns 400.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/exchange-rates.md — Duaer Exchange rates
- https://skills.duaer.com/company-financials.md — Duaer Company financials (SEC)

## 相关技能

- [在 Duaer 里查汇率](https://skills.duaer.com/zh/exchange-rates.md)
- [在 Duaer 里查上市公司财务（SEC）](https://skills.duaer.com/zh/company-financials.md)
