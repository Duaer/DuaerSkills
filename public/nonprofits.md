> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/nonprofits.md

---
name: duaer-nonprofits
description: >-
  Duaer US nonprofits. ProPublica Nonprofit Explorer: US tax-exempt organisations by name and state, with EIN and NTEE code.
  One successful search uses 1 Duaer credit.
---

# Duaer US nonprofits

Duaer US nonprofits searches IRS tax-exempt organisations through ProPublica Nonprofit Explorer. Each row links to the ProPublica page with filings and financials.

## When to use

- Find the EIN of a food bank in New York.
- List charities with a word in their name in one state.

## When not to use

- Federal grants and contracts. Use https://skills.duaer.com/usaspending.md.
- Company identifiers worldwide. Use https://skills.duaer.com/lei.md.

## Call

`GET https://api.duaer.com/v1/data/nonprofits?words=food%20bank`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words in the organisation name, such as food bank.
- `state` — Optional. Two-letter US state such as NY.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nonprofits?words=food%20bank&state=NY` — food banks registered in New York.
- `GET https://api.duaer.com/v1/data/nonprofits?words=red%20cross` — organisations named Red Cross.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `ein` — organisation name and Employer Identification Number.
- `city`, `state` — where it is registered.
- `nteeCode`, `subsection` — NTEE activity code and IRS 501(c) subsection.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/lei.md — Duaer Legal entities (LEI)

## Related skills

- [US federal agency budgets in Duaer](https://skills.duaer.com/usaspending.md)
- [Legal entities (LEI) in Duaer](https://skills.duaer.com/lei.md)
