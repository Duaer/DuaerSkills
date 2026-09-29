> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/court-opinions.md

---
name: duaer-court-opinions
description: >-
  Duaer US court opinions. CourtListener: US federal and state court opinions by words, court, and filing date, with citations and a snippet.
  One successful search uses 1 Duaer credit.
---

# Duaer US court opinions

Duaer US court opinions searches the full text of US federal and state court opinions on CourtListener. Filter by court and filing date, and sort by relevance or newest first.

## When to use

- Find recent Supreme Court opinions that mention privacy.
- Collect Ninth Circuit copyright opinions filed since 2025.

## When not to use

- Bills and laws in Congress. Use https://skills.duaer.com/congress-bills.md.
- Federal agency rules. Use https://skills.duaer.com/regulations.md.

## Call

`GET https://api.duaer.com/v1/data/court-opinions?words=fourth%20amendment%20cell%20phone`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `court`.

- `words` — Words to search in opinions, such as fourth amendment cell phone.
- `court` — Optional. CourtListener court ids such as `scotus`, `ca9`, or `cadc`, separated by spaces.
- `filedAfter` — Optional. Earliest filing date as YYYY-MM-DD.
- `sort` — Optional. `relevance` or `newest`. Default `relevance`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/court-opinions?words=privacy&court=scotus&sort=newest` — the newest Supreme Court opinions about privacy.
- `GET https://api.duaer.com/v1/data/court-opinions?words=copyright&court=ca9&filedAfter=2025-01-01` — Ninth Circuit copyright opinions since 2025.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `caseName`, `court`, `courtId` — case and court.
- `dateFiled`, `docketNumber`, `citations` — filing date, docket, and reporter citations.
- `citedBy`, `status`, `judge` — how often other opinions cite it, publication status, and judge.
- `snippet` — the start of the opinion text.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/congress-bills.md — Duaer US Congress bills
- https://skills.duaer.com/federal-register.md — Duaer US Federal Register

## Related skills

- [US Congress bills in Duaer](https://skills.duaer.com/congress-bills.md)
- [US Federal Register in Duaer](https://skills.duaer.com/federal-register.md)
