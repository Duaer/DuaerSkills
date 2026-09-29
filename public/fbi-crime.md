> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/fbi-crime.md

---
name: duaer-fbi-crime
description: >-
  Duaer FBI crime statistics. FBI Crime Data Explorer: monthly rates and counts of violent and property crime for the US or a state.
  One successful search uses 1 Duaer credit.
---

# Duaer FBI crime statistics

Duaer FBI crime statistics returns monthly offense rates per 100,000 people and counts from the FBI Crime Data Explorer, newest month first. A state row also shows the US rate for comparison. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Compare the burglary rate in California with the US.
- Chart monthly violent crime for last year.

## When not to use

- Population and income. Use https://skills.duaer.com/census.md.
- Global health indicators. Use https://skills.duaer.com/who-gho.md.

## Call

`GET https://api.duaer.com/v1/data/fbi-crime?offense=violent-crime`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `offense` or `state`.

- `offense` — `violent-crime`, `property-crime`, `homicide`, `rape`, `robbery`, `aggravated-assault`, `burglary`, `larceny`, `motor-vehicle-theft`, or `arson`. Default violent-crime.
- `state` — Optional. Two-letter code such as CA. Default is the whole US.
- `year` — Optional. Four-digit year. Default is last year.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/fbi-crime?offense=violent-crime` — monthly US violent crime for last year.
- `GET https://api.duaer.com/v1/data/fbi-crime?offense=burglary&state=CA&year=2023` — California burglary by month in 2023.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `place`, `offense`, `month` — area, offense, and YYYY-MM.
- `ratePer100k`, `offenses` — rate per 100,000 people and reported count.
- `clearances` — offenses cleared by arrest or other means, when reported.
- `population` — population covered by reporting agencies.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/census.md — Duaer US Census ACS
- https://skills.duaer.com/congress-members.md — Duaer US Congress members

## Related skills

- [US Census ACS in Duaer](https://skills.duaer.com/census.md)
- [US Congress members in Duaer](https://skills.duaer.com/congress-members.md)
