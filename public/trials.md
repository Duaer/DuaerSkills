> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/trials.md

---
name: duaer-trials
description: >-
  Search clinical trials through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer trials

Search clinical trials through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Sort alone is not a search. Fields combine.
- `condition` — disease or condition.
- `term` — other words.
- `intervention` — drug, device, or other intervention.
- `location` — where the study runs.
- `title` — words in the title.
- `outcome` — words in the outcome.
- `sponsor` — sponsor name.
- `lead` — lead sponsor name.
- `nctId` — study id.
- `status` — recruitment status, such as `RECRUITING` or `COMPLETED`.
- `phase` — `EARLY_PHASE1`, `PHASE1`, `PHASE2`, `PHASE3`, `PHASE4`, or `NA`.
- `sort` — `recent` orders by last update. Omit it for relevance.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search papers in Duaer](https://skills.duaer.com/papers.md)
