> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/cdc-data.md

---
name: duaer-cdc-data
description: >-
  Duaer CDC open data. CDC open datasets on data.cdc.gov: find datasets by words, then read rows from one dataset, such as influenza deaths or vaccination coverage.
  One successful search uses 1 Duaer credit.
---

# Duaer CDC open data

Duaer CDC open data works in two steps: search the data.cdc.gov catalog for datasets, then read rows from one dataset by its id.

## When to use

- Find the CDC dataset for a disease or indicator.
- Pull the first rows of a CDC dataset into a table.

## When not to use

- Global health statistics. Use https://skills.duaer.com/who-gho.md.
- Hospitals and clinicians. Use https://skills.duaer.com/cms-hospitals.md.

## Call

`GET https://api.duaer.com/v1/data/cdc-data?words=influenza`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, or `dataset`.

- `words` — Words such as influenza deaths or vaccination coverage.
- `dataset` — Optional. Dataset id such as ynw2-4viq to read its rows instead.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cdc-data?words=influenza` — CDC datasets about influenza.
- `GET https://api.duaer.com/v1/data/cdc-data?dataset=ynw2-4viq&limit=5` — rows of the provisional flu, pneumonia, and COVID-19 deaths dataset.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- Dataset search: `dataset`, `description`, `publisher`, `category`, `columns`, `dataUpdated`, `downloads`.
- Dataset rows: `dataset` plus the dataset columns as fields.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/who-gho.md — Duaer WHO health statistics
- https://skills.duaer.com/cms-hospitals.md — Duaer US hospitals (CMS)

## 相关技能

- [在 Duaer 里查 WHO 卫生统计](https://skills.duaer.com/zh/who-gho.md)
- [在 Duaer 里查美国医院（CMS）](https://skills.duaer.com/zh/cms-hospitals.md)
