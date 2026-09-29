> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cn-holidays.md

---
name: duaer-cn-holidays
description: >-
  Duaer China holidays and make-up workdays. State Council schedule: each Chinese public holiday of a year with its days off and make-up working days.
  One successful search uses 1 Duaer credit.
---

# Duaer China holidays and make-up workdays

Duaer China holidays and make-up workdays returns one row per Chinese public holiday of a year, with the days off, the date range, and the weekend days that become working days, linked to the State Council notice.

## When to use

- Plan shipping or staffing around Spring Festival and National Day.
- Check whether a Saturday is a make-up working day in China.

## When not to use

- Holidays in other countries. Use https://skills.duaer.com/public-holidays.md.
- Weather on a date. Use https://skills.duaer.com/weather.md.

## Call

`GET https://api.duaer.com/v1/data/cn-holidays?year=current`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `year`.

- `year` — Four-digit year from 2007, or `current`. Default `current`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cn-holidays?year=current` — this year in China.
- `GET https://api.duaer.com/v1/data/cn-holidays?year=2027` — the 2027 schedule once it is published.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `nameZh`, `year` — English and Chinese holiday names and the year.
- `start`, `end`, `daysOff`, `offDays` — first and last day off, the count, and every day off.
- `makeupWorkdays`, `notice` — weekend days that become working days, and the State Council notice.

The schedule for next year usually appears in November or December; before that the year finds nothing.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/public-holidays.md — Duaer Public holidays
- https://skills.duaer.com/amap-weather.md — Duaer Amap weather in China

## 相关技能

- [在 Duaer 里查公共假期](https://skills.duaer.com/zh/public-holidays.md)
- [在 Duaer 里查高德天气](https://skills.duaer.com/zh/amap-weather.md)
