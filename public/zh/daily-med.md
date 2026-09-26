> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/daily-med.md

---
name: duaer-daily-med
description: >-
  Search drug labeling in DailyMed through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer DailyMed

Search drug labeling in DailyMed through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/daily-med?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as aspirin.
- `id` — optional. Id such as d49f3e4f-7e0e-467d-a0c4-c6b109af245e.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 NDC](https://skills.duaer.com/zh/ndc.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索 Drugs@FDA](https://skills.duaer.com/zh/drugs-fda.md)
