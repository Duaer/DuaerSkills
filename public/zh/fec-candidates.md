> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/fec-candidates.md

---
name: duaer-fec-candidates
description: >-
  Duaer US election candidates money. OpenFEC: money raised, spent, and on hand by US federal candidates, by name, year, office, or state.
  One successful search uses 1 Duaer credit.
---

# Duaer US election candidates money

Duaer US election candidates money returns OpenFEC totals for US House, Senate, and presidential candidates, most money raised first. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Rank 2024 Senate candidates in a state by money raised.
- Look up a candidate cash on hand.

## When not to use

- Bills and laws. Use https://skills.duaer.com/congress-bills.md.
- Members of Congress. Use https://skills.duaer.com/congress-members.md.

## Call

`GET https://api.duaer.com/v1/data/fec-candidates?electionYear=2024&office=senate&state=PA`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of `name`, `electionYear`, `office`, or `state`.

- `name` — Optional. Candidate name words such as smith.
- `electionYear` — Optional. Even election year such as 2024.
- `office` — Optional. `house`, `senate`, or `president`.
- `state` — Optional. Two-letter state code such as CA.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/fec-candidates?electionYear=2024&office=senate&state=PA` — 2024 Pennsylvania Senate candidates.
- `GET https://api.duaer.com/v1/data/fec-candidates?name=smith&office=house` — House candidates named Smith.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `candidateId`, `name`, `party`, `office`, `state`, `district`, `incumbency` — candidate.
- `electionYear`, `cycle`, `coverageEndDate` — election and reporting period.
- `receiptsUsd`, `disbursementsUsd`, `cashOnHandUsd` — money raised, spent, and on hand.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/congress-members.md — Duaer US Congress members
- https://skills.duaer.com/govinfo.md — Duaer US GovInfo documents

## 相关技能

- [在 Duaer 里查美国国会议员](https://skills.duaer.com/zh/congress-members.md)
- [在 Duaer 里查美国 GovInfo 文献](https://skills.duaer.com/zh/govinfo.md)
