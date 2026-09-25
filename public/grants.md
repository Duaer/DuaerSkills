> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/grants.md

---
name: duaer-grants
description: >-
  Search NIH grants through Duaer (NIH RePORTER). One successful search uses 1 Duaer credit.
---

# Duaer grants

Search NIH grants through Duaer (NIH RePORTER). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/grants?q=insulin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- `q` — words in the project title, terms, or abstract.
- `pi` — optional. Principal investigator name.
- `organization` — optional. Awardee organization name.
- `projectNum` — optional. NIH project number, such as `5P20GM152335-03`.
- `yearFrom` — optional. First fiscal year (1000–2100).
- `yearTo` — optional. Last fiscal year (1000–2100).
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search preprints in Duaer](https://skills.duaer.com/preprints.md)
