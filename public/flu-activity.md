> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/flu-activity.md

---
name: duaer-flu-activity
description: >-
  Duaer US flu activity. Delphi Epidata FluView: weekly influenza-like illness rates from CDC ILINet by US region or state.
  One successful search uses 1 Duaer credit.
---

# Duaer US flu activity

Duaer US flu activity returns weekly influenza-like illness (ILI) rates from CDC ILINet through Delphi Epidata, newest week first.

## When to use

- Track national flu activity this season.
- Compare a state week by week.

## When not to use

- Other CDC datasets. Use https://skills.duaer.com/cdc-data.md.
- Global health indicators. Use https://skills.duaer.com/who-gho.md.

## Call

`GET https://api.duaer.com/v1/data/flu-activity?region=nat`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `region` or `weeks`.

- `region` — Optional. `nat`, `hhs1` to `hhs10`, `cen1` to `cen9`, or a state code such as `ca`. Default `nat`.
- `weeks` — Optional. Newest weeks to return, 1 to 20. Default 8.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/flu-activity?region=nat` — the last 8 weeks nationally.
- `GET https://api.duaer.com/v1/data/flu-activity?region=ca&weeks=12` — the last 12 weeks in California.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `region`, `regionName`, `epiweek` — region and epidemiological week such as 2026-W37.
- `weightedIliPct`, `iliPct` — weighted and unweighted share of visits for influenza-like illness.
- `iliVisits`, `patients`, `providers`, `issue`, `releaseDate` — counts and the report issue.

Recent weeks are revised as late reports arrive.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/cdc-data.md — Duaer CDC open data
- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics

## Related skills

- [CDC open data in Duaer](https://skills.duaer.com/cdc-data.md)
- [WHO health statistics in Duaer](https://skills.duaer.com/who-gho.md)
