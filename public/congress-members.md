> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/congress-members.md

---
name: duaer-congress-members
description: >-
  Duaer US Congress members. Congress.gov: current US senators and representatives for a state or House district, with party and start year.
  One successful search uses 1 Duaer credit.
---

# Duaer US Congress members

Duaer US Congress members lists the current members of Congress for a state, senators first, then representatives by district. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find the senators and representatives for a state.
- Look up who represents one House district.

## When not to use

- Bills and laws. Use https://skills.duaer.com/congress-bills.md.
- Federal spending by recipient. Use https://skills.duaer.com/usaspending.md.

## Call

`GET https://api.duaer.com/v1/data/congress-members?state=CA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `state`.

- `state` — Two-letter code such as CA.
- `district` — Optional. House district number, such as 12.
- `words` — Optional. Words in the member name.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/congress-members?state=CA` — both California senators and its representatives.
- `GET https://api.duaer.com/v1/data/congress-members?state=NY&district=12` — the representative for New York district 12.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `bioguideId`, `name` — Congress member ID and name.
- `party`, `state`, `district` — party, state, and House district.
- `chamber`, `startYear` — Senate or House and the start of the current term run.
- `imageUrl` — official portrait when available.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/congress-bills.md — Duaer US Congress bills
- https://skills.duaer.com/census.md — Duaer US Census ACS

## Related skills

- [US Congress bills in Duaer](https://skills.duaer.com/congress-bills.md)
- [US Census ACS in Duaer](https://skills.duaer.com/census.md)
