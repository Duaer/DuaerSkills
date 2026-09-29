> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/bis.md

---
name: duaer-bis
description: >-
  Duaer BIS statistics. Bank for International Settlements series by dataflow and key: central bank policy rates, credit, property prices, and exchange rates by country.
  One successful search uses 1 Duaer credit.
---

# Duaer BIS statistics

Duaer BIS statistics reads series from the BIS Data Portal, which compiles central bank data for about 60 economies. Use + in the key to compare countries.

## When to use

- Compare central bank policy rates across countries.
- Track residential property prices or credit to GDP.

## When not to use

- Euro area only. Use https://skills.duaer.com/ecb.md.
- Broad development indicators. Use https://skills.duaer.com/world-bank.md.

## Call

`GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.US%2BGB%2BCN`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `dataflow` and `key`.

- `dataflow` — Dataflow such as WS_CBPOL (policy rates), WS_SPP (property prices), or WS_XRU (exchange rates).
- `key` — Series key with + for several countries, such as M.US+GB+CN. Encode + as %2B in a URL.
- `observations` — Optional. Latest periods per series, 1 to 60. Default 5.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.US%2BGB%2BCN` — policy rates of the US, UK, and China.
- `GET https://api.duaer.com/v1/data/bis?dataflow=WS_CBPOL&key=M.JP&observations=24` — two years of Japan policy rates.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `series`, `seriesTitle` — series key and BIS title.
- `period`, `value`, `unit` — time period, figure, and unit, newest first.
- One field per key dimension, such as `REF_AREA`.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/ecb.md — Duaer ECB statistics
- https://skills.duaer.com/imf.md — Duaer IMF indicators

## Related skills

- [ECB statistics in Duaer](https://skills.duaer.com/ecb.md)
- [IMF indicators in Duaer](https://skills.duaer.com/imf.md)
