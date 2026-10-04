> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/trials.md

---
name: duaer-trials
description: >-
  Duaer clinical trials. ClinicalTrials.gov studies by condition, intervention, location, title, outcome, sponsor, NCT id, status, or phase.
  One successful search uses 1 Duaer credit.
---

# Duaer clinical trials

Duaer clinical trials searches ClinicalTrials.gov. Fields combine, so each one narrows the search. Results are ordered by relevance unless you sort by last update.

## When to use

- Find recruiting trials for a condition and a drug.
- List phase 3 trials a sponsor runs.
- Look up one study by its NCT id.

## When not to use

- Published trial results in papers. Use https://skills.duaer.com/papers.md.
- Drug adverse event reports. Use https://skills.duaer.com/adverse-events.md.

## Call

`GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one search field. `status` or `phase` alone counts. `sort` and `limit` alone are not a search.

- `condition` — Optional. Disease or condition.
- `term` — Optional. Other words.
- `intervention` — Optional. Drug, device, or other intervention.
- `location` — Optional. Where the study runs, such as a city or country.
- `title` — Optional. Words in the title.
- `outcome` — Optional. Words in the outcome measures.
- `sponsor` — Optional. Sponsor or collaborator name.
- `lead` — Optional. Lead sponsor name.
- `nctId` — Optional. Study id, such as `NCT04368728`.
- `status` — Optional. `NOT_YET_RECRUITING`, `RECRUITING`, `ENROLLING_BY_INVITATION`, `ACTIVE_NOT_RECRUITING`, `SUSPENDED`, `TERMINATED`, `COMPLETED`, `WITHDRAWN`, or `UNKNOWN`.
- `phase` — Optional. `EARLY_PHASE1`, `PHASE1`, `PHASE2`, `PHASE3`, `PHASE4`, or `NA`.
- `sort` — Optional. `recent` orders by last update. Omit it for relevance.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/trials?condition=diabetes&intervention=insulin&status=RECRUITING` — recruiting insulin trials for diabetes.
- `GET https://api.duaer.com/v1/data/trials?lead=Pfizer&phase=PHASE3&sort=recent` — Pfizer phase 3 trials, latest update first.
- `GET https://api.duaer.com/v1/data/trials?nctId=NCT04368728` — one study by NCT id.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ClinicalTrials.gov`), `title`, `url`, and `summary`, plus:

- `nctId` — study id.
- `status`, `phase` — recruitment status and phase.
- `conditions`, `interventions` — conditions and interventions studied.
- `sponsor` — lead sponsor.
- `startDate` — start date.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/papers.md — Duaer papers

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search papers in Duaer](https://skills.duaer.com/papers.md)
