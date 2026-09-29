> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/public-holidays.md

---
name: duaer-public-holidays
description: >-
  Duaer Public holidays. Nager.Date: public holidays of a country for a year, with local names, types, and regions.
  One successful search uses 1 Duaer credit.
---

# Duaer Public holidays

Duaer Public holidays lists the public holidays of about 120 countries for a year, with the local name, the English name, the holiday type, and the regions where it applies.

## When to use

- Plan a delivery schedule around Singapore holidays.
- List next year's Chinese public holidays.

## When not to use

- Sunrise and sunset times. Use https://skills.duaer.com/sunrise.md.
- Weather on a date. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/public-holidays?country=SG`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `country`.

- `country` — Two-letter country code such as CN, US, DE, or SG.
- `year` — Optional. Four-digit year. Default this year.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/public-holidays?country=SG` — Singapore public holidays this year.
- `GET https://api.duaer.com/v1/data/public-holidays?country=CN&year=2027&limit=20` — Chinese public holidays in 2027.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `date`, `name`, `localName` — date, English name, and local name.
- `types`, `regions`, `nationwide`, `country` — holiday type, regions where it applies, and whether it is nationwide.

Make-up working days are not included.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sunrise.md — Duaer Sunrise and sunset
- https://skills.duaer.com/weather.md — Duaer Weather forecast

## 相关技能

- [在 Duaer 里查日出日落](https://skills.duaer.com/zh/sunrise.md)
- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
