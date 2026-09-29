> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ecb.md

---
name: duaer-ecb
description: >-
  Duaer ECB statistics. European Central Bank series by dataflow and key: euro reference exchange rates, interest rates, inflation, and money statistics.
  One successful search uses 1 Duaer credit.
---

# Duaer ECB statistics

Duaer ECB statistics reads series from the ECB Data Portal. A series is a dataflow plus a dotted key; use + to ask for several values in one position.

## When to use

- Get monthly euro reference rates for several currencies.
- Pull euro area inflation or policy rates into a table.

## When not to use

- Daily market rates for any pair. Use https://skills.duaer.com/exchange-rates.md.
- Central bank rates outside the euro area. Use https://skills.duaer.com/bis.md.

## Call

`GET https://api.duaer.com/v1/data/ecb?dataflow=EXR&key=M.USD%2BJPY.EUR.SP00.A`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `dataflow` and `key`.

- `dataflow` — Dataflow such as EXR (exchange rates), FM (financial markets), or ICP (inflation).
- `key` — Series key with + for several values, such as M.USD+JPY.EUR.SP00.A. Encode + as %2B in a URL.
- `observations` — Optional. Latest periods per series, 1 to 60. Default 5.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

Common keys: `EXR` `D.USD.EUR.SP00.A` daily dollar rate; `ICP` `M.U2.N.000000.4.ANR` euro area inflation; `FM` `D.U2.EUR.4F.KR.DFR.LEV` deposit facility rate.

## Examples

- `GET https://api.duaer.com/v1/data/ecb?dataflow=EXR&key=M.USD%2BJPY.EUR.SP00.A` — monthly dollar and yen rates against the euro.
- `GET https://api.duaer.com/v1/data/ecb?dataflow=ICP&key=M.U2.N.000000.4.ANR&observations=12` — euro area inflation for a year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `series`, `seriesTitle` — series key and ECB title.
- `period`, `value` — time period and figure, newest first.
- One field per key dimension, such as `CURRENCY`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/bis.md — Duaer BIS statistics
- https://skills.duaer.com/eurostat.md — Duaer Eurostat statistics

## 相关技能

- [在 Duaer 里查国际清算银行统计](https://skills.duaer.com/zh/bis.md)
- [在 Duaer 里查欧盟统计局数据](https://skills.duaer.com/zh/eurostat.md)
