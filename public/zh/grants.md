> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/grants.md

---
name: duaer-grants
description: >-
  Duaer grants. Search NIH grants (NIH RePORTER).
  One successful search uses 1 Duaer credit.
---

# Duaer grants

Search NIH grants (NIH RePORTER). Data comes from NIH RePORTER.

## When to use

- Find NIH-funded projects on a topic.
- List grants for a principal investigator or organization.

## When not to use

- NSF awards. Use https://skills.duaer.com/nsf-awards.md.

## Call

`GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least one search field is required. Fields combine.

- `q` — words in the project title, terms, or abstract.
- `pi` — Optional. Principal investigator name.
- `organization` — Optional. Awardee organization name.
- `projectNum` — Optional. NIH project number, such as `5P20GM152335-03`.
- `yearFrom` — Optional. First fiscal year (1000–2100).
- `yearTo` — Optional. Last fiscal year (1000–2100).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10` — NIH grants matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NIH RePORTER`), `title`, `url`, and `summary`, plus:

- `projectNum`, `applId`, `pi`, `organization`, `agency` — text.
- `fiscalYear`, `awardAmount` — number.
- `activityCode`, `startDate`, `endDate` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers
- https://skills.duaer.com/preprints.md — Duaer preprints

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
