> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/uk-mps.md

---
name: duaer-uk-mps
description: >-
  Duaer UK Parliament members. UK Parliament: current MPs and peers by name and house, with party, constituency or peerage, and start date.
  One successful search uses 1 Duaer credit.
---

# Duaer UK Parliament members

Duaer UK Parliament members looks up current Members of Parliament and members of the House of Lords by name. Commons rows carry the constituency; Lords rows carry the peerage type.

## When to use

- Find the constituency and party of an MP by surname.
- List current members of the House of Lords with a given name.

## When not to use

- US Congress members. Use https://skills.duaer.com/congress-members.md.
- UK bills. Use https://skills.duaer.com/uk-bills.md.

## Call

`GET https://api.duaer.com/v1/data/uk-mps?name=Smith`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `name` or `house`.

- `name` — Words in the member name, such as Smith.
- `house` — Optional. `commons` or `lords`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/uk-mps?name=Smith` — current MPs and peers named Smith.
- `GET https://api.duaer.com/v1/data/uk-mps?name=Badenoch&house=commons` — one MP in the House of Commons.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `memberId`, `name`, `party`, `house` — who, which party, Commons or Lords.
- `constituency` or `peerage` — the seat for an MP, or the peerage type for a peer.
- `memberSince`, `portrait` — start of the current membership and a portrait link.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/uk-bills.md — Duaer UK Parliament bills
- https://skills.duaer.com/congress-members.md — Duaer US Congress members

## Related skills

- [UK Parliament bills in Duaer](https://skills.duaer.com/uk-bills.md)
- [US Congress members in Duaer](https://skills.duaer.com/congress-members.md)
