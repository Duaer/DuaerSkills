> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/nih-reporter.md

---
name: duaer-nih-reporter
description: >-
  Duaer NIH RePORTER grants. NIH-funded research projects from NIH RePORTER by words, fiscal year, and institution, with investigators, institute, and award amount.
  One successful search uses 1 Duaer credit.
---

# Duaer NIH RePORTER grants

Duaer NIH RePORTER grants searches NIH-funded projects by title and terms, newest fiscal year first.

## When to use

- Find who NIH funds to work on a topic.
- List an institution’s NIH projects in a year range.

## When not to use

- Papers. Use https://skills.duaer.com/inspire-hep.md for physics or a literature source.
- US federal budgets. Use https://skills.duaer.com/usaspending.md.

## Call

`GET https://api.duaer.com/v1/data/nih-reporter?words=CRISPR%20sickle%20cell`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words in the title or terms, such as CRISPR sickle cell.
- `fromYear`, `toYear` — Optional. Fiscal years, at most 30 years apart.
- `organization` — Optional. Institution name as NIH lists it, such as STANFORD UNIVERSITY.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nih-reporter?words=CRISPR%20sickle%20cell` — NIH projects on CRISPR for sickle cell.
- `GET https://api.duaer.com/v1/data/nih-reporter?words=Alzheimer&fromYear=2024&toYear=2025&organization=STANFORD%20UNIVERSITY` — Stanford Alzheimer projects.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `applicationId`, `projectNumber`, `activityCode` — NIH ids.
- `fiscalYear`, `awardUsd`, `institute` — funding.
- `organization`, `investigators` — institution and principal investigators.
- `startDate`, `endDate`, `abstract` — project period and abstract.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/usaspending.md — Duaer US federal agency budgets
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia

## Related skills

- [US federal agency budgets in Duaer](https://skills.duaer.com/usaspending.md)
- [Wikipedia in Duaer](https://skills.duaer.com/wikipedia.md)
