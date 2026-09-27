> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/sec-filings.md

---
name: duaer-sec-filings
description: >-
  Duaer SEC filings. Latest SEC EDGAR filings of a US-listed company by ticker, name, or CIK: 10-K, 10-Q, 8-K, insider Form 4, and more, with direct document links.
  One successful search uses 1 Duaer credit.
---

# Duaer SEC filings

Duaer SEC filings resolves a ticker or company name to its SEC CIK, then lists the newest filings from EDGAR with a link to each primary document.

## When to use

- Get the latest annual or quarterly report of a company for an analyst brief.
- Watch 8-K events or insider trades (Form 4) of a company.

## When not to use

- Finding filings that mention a topic across companies. Use https://skills.duaer.com/sec-search.md.
- Non-US company registers. Use https://skills.duaer.com/lei.md.

## Call

`GET https://api.duaer.com/v1/data/sec-filings?company=AAPL&form=10-K&limit=5`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `company`.

- `company` — Ticker, company name, or CIK number, such as AAPL.
- `form` — Optional. Form type such as 10-K, 10-Q, 8-K, or 4. Amendments are included.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sec-filings?company=AAPL&form=10-K&limit=5` — the last five Apple annual reports.
- `GET https://api.duaer.com/v1/data/sec-filings?company=Tesla&form=8-K` — recent Tesla 8-K events.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `company`, `cik`, `tickers` — company, SEC CIK, and tickers.
- `form` — form type; `/A` marks an amendment.
- `filingDate`, `reportDate` — filed date and period end.
- `accessionNumber` — EDGAR accession number.
- `description` — primary document description.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-search.md — Duaer SEC full-text search
- https://skills.duaer.com/lei.md — Duaer Legal entities (LEI)

## 相关技能

- [在 Duaer 里查 SEC 全文检索](https://skills.duaer.com/zh/sec-search.md)
- [在 Duaer 里查法人机构识别码（LEI）](https://skills.duaer.com/zh/lei.md)
