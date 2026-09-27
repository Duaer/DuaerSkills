> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/sec-search.md

---
name: duaer-sec-search
description: >-
  Duaer SEC full-text search. Find SEC filings since 2001 that mention a word or an exact phrase, across all companies, filtered by form type and filing dates.
  One successful search uses 1 Duaer credit.
---

# Duaer SEC full-text search

Duaer SEC full-text search queries EDGAR full-text search. Duaer keeps one row per filing and prefers the main document over exhibits.

## When to use

- Find which companies discuss a risk, a product, or a supplier in their 10-K.
- Track mentions of a phrase in 8-K filings over a period.

## When not to use

- The filing list of one known company. Use https://skills.duaer.com/sec-filings.md.
- Filings before 2001, which full-text search does not cover.

## Call

`GET https://api.duaer.com/v1/data/sec-search?words=%22supply%20chain%20disruption%22&form=10-K&from=2024-01-01`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words to find. Wrap a phrase in double quotes, such as "supply chain".
- `form` — Optional. Form type such as 10-K or 8-K.
- `from` — Optional. Filed on or after, YYYY-MM-DD.
- `to` — Optional. Filed on or before, YYYY-MM-DD.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sec-search?words=%22supply%20chain%20disruption%22&form=10-K&from=2024-01-01` — 10-Ks since 2024 with that phrase.
- `GET https://api.duaer.com/v1/data/sec-search?words=lithium&form=8-K&limit=20` — 8-K filings mentioning lithium.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `company`, `cik` — filer name with ticker, and CIK.
- `form`, `fileType`, `fileDescription` — form of the filing and the matched document.
- `filingDate`, `periodEnding` — filed date and period end.
- `accessionNumber` — EDGAR accession number.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/patents.md

## 相关技能

- [在 Duaer 里查 SEC 公司公告](https://skills.duaer.com/zh/sec-filings.md)
- [在 Duaer 里检索专利](https://skills.duaer.com/zh/patents.md)
