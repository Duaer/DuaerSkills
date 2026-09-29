> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/federal-register.md

---
name: duaer-federal-register
description: >-
  Duaer US Federal Register. US federal rules, proposed rules, notices, and presidential documents, newest first, with agencies, abstract, and PDF.
  One successful search uses 1 Duaer credit.
---

# Duaer US Federal Register

Duaer US Federal Register searches the daily journal of the US government, newest first. Filter by words, agency, document type, and date.

## When to use

- Track new or proposed US regulations on a topic.
- List recent notices from one agency.

## When not to use

- Company filings. Use https://skills.duaer.com/sec-filings.md.
- EU datasets. Use https://skills.duaer.com/eu-open-data.md.

## Call

`GET https://api.duaer.com/v1/data/federal-register?words=artificial%20intelligence&type=rule`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `agency`.

- `words` — Words to search, such as artificial intelligence.
- `agency` — Optional. Agency slug, such as environmental-protection-agency.
- `type` — Optional. `rule`, `proposed`, `notice`, or `presidential`.
- `from` — Optional. Published on or after, YYYY-MM-DD.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/federal-register?words=artificial%20intelligence&type=rule` — final rules that mention AI.
- `GET https://api.duaer.com/v1/data/federal-register?agency=environmental-protection-agency&type=proposed&from=2026-01-01` — EPA proposed rules this year.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `documentNumber`, `type`, `published` — id, document type, and publication date.
- `agencies` — issuing agencies.
- `abstract` — summary text.
- `url`, `pdfUrl` — web page and PDF.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sec-filings.md — Duaer SEC filings
- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets

## Related skills

- [SEC filings in Duaer](https://skills.duaer.com/sec-filings.md)
- [US federal agency budgets in Duaer](https://skills.duaer.com/usaspending.md)
