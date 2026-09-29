> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/congress-bills.md

---
name: duaer-congress-bills
description: >-
  Duaer US Congress bills. Congress.gov: US bills, resolutions, and public laws with their sponsor chamber and latest action.
  One successful search uses 1 Duaer credit.
---

# Duaer US Congress bills

Duaer US Congress bills lists bills from Congress.gov, most recently updated first, with the latest action. Filter by Congress, bill type, or title words, or keep only bills that became law. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Follow new energy or tax bills in the current Congress.
- List the public laws passed by the 118th Congress.

## When not to use

- Federal agency rules. Use https://skills.duaer.com/regulations.md.
- Daily Federal Register notices. Use https://skills.duaer.com/federal-register.md.

## Call

`GET https://api.duaer.com/v1/data/congress-bills?words=energy`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `congress`, `billType`, `lawsOnly`, or `words`.

- `congress` — Optional. Congress number such as 118. Default is the current Congress.
- `billType` — Optional. `hr`, `s`, `hjres`, `sjres`, `hconres`, `sconres`, `hres`, or `sres`.
- `lawsOnly` — Optional. `yes` to list only bills that became law.
- `words` — Optional. Words in the bill title, such as energy.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/congress-bills?words=energy` — recently updated bills about energy.
- `GET https://api.duaer.com/v1/data/congress-bills?congress=118&lawsOnly=yes` — public laws of the 118th Congress.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `congress`, `billType`, `number` — bill identity, such as 119 HR 9340.
- `billTitle`, `originChamber`, `introducedDate` — title, House or Senate, and date.
- `latestActionDate`, `latestAction` — the newest step, such as a vote or a referral.
- `updateDate` — when Congress.gov last changed the bill.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/congress-members.md — Duaer US Congress members
- https://skills.duaer.com/regulations.md — Duaer Regulations.gov documents

## Related skills

- [US Congress members in Duaer](https://skills.duaer.com/congress-members.md)
- [Regulations.gov documents in Duaer](https://skills.duaer.com/regulations.md)
