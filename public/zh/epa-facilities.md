> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/epa-facilities.md

---
name: duaer-epa-facilities
description: >-
  Duaer EPA facility compliance. US EPA ECHO: regulated facilities with compliance status, significant violations, and inspections.
  One successful search uses 1 Duaer credit.
---

# Duaer EPA facility compliance

Duaer EPA facility compliance searches active facilities in EPA ECHO by state, city, ZIP, or name, most violations first.

## When to use

- List facilities with significant violations in a city.
- Check the compliance record of a refinery.

## When not to use

- Air quality and weather. Use https://skills.duaer.com/weather.md.
- Federal rules. Use https://skills.duaer.com/regulations.md.

## Call

`GET https://api.duaer.com/v1/data/epa-facilities?state=CA&city=Oakland`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `state` or `zip`.

- `state` — Two-letter code such as CA.
- `city` — Optional. City name such as Oakland.
- `zip` — Optional. Five-digit ZIP code instead of or with the state.
- `name` — Optional. Words in the facility name.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/epa-facilities?state=CA&city=Oakland` — Oakland facilities, most violations first.
- `GET https://api.duaer.com/v1/data/epa-facilities?state=TX&name=refinery` — Texas refineries.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `registryId`, `name`, `street`, `city`, `state`, `zip` — facility.
- `complianceStatus`, `significantViolation` — current status.
- `quartersInNonCompliance`, `inspections`, `lastInspection` — record over three years.
- `programs`, `latitude`, `longitude` — EPA programs and location.

A broad state search can take several seconds.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/regulations.md — Duaer Regulations.gov documents
- https://skills.duaer.com/greenhouse-gases.md — Duaer Greenhouse gas levels

## 相关技能

- [在 Duaer 里查美国联邦法规文件](https://skills.duaer.com/zh/regulations.md)
- [在 Duaer 里查温室气体浓度](https://skills.duaer.com/zh/greenhouse-gases.md)
