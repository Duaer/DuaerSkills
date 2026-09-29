> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/college-scorecard.md

---
name: duaer-college-scorecard
description: >-
  Duaer US College Scorecard. US Department of Education: college admission rate, tuition, size, completion rate, and graduate earnings.
  One successful search uses 1 Duaer credit.
---

# Duaer US College Scorecard

Duaer US College Scorecard searches US colleges by name or state, largest first, with cost and outcome figures from the Department of Education. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Compare admission rate and tuition of two universities.
- List the largest colleges in a state.

## When not to use

- Research grants. Use https://skills.duaer.com/nih-reporter.md.
- Books and authors. Use https://skills.duaer.com/open-library.md.

## Call

`GET https://api.duaer.com/v1/data/college-scorecard?words=Stanford`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `state`.

- `words` — Words in the school name, such as Stanford.
- `state` — Optional. Two-letter code such as CA.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/college-scorecard?words=Stanford` — Stanford University figures.
- `GET https://api.duaer.com/v1/data/college-scorecard?state=CA` — the largest colleges in California.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `schoolId`, `name`, `city`, `state`, `website` — school identity.
- `admissionRatePct`, `students` — admission rate and undergraduate size.
- `tuitionInState`, `tuitionOutOfState` — yearly tuition in USD.
- `completionRatePct`, `medianEarnings10yr` — completion rate and median earnings 10 years after entry.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/census.md — Duaer US Census ACS
- https://skills.duaer.com/nih-reporter.md — Duaer NIH RePORTER grants

## 相关技能

- [在 Duaer 里查美国人口普查 ACS](https://skills.duaer.com/zh/census.md)
- [在 Duaer 里查NIH RePORTER 科研资助](https://skills.duaer.com/zh/nih-reporter.md)
