> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/biomodels.md

---
name: duaer-biomodels
description: >-
  Search systems biology models in EBI BioModels through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer BioModels

Search systems biology models in EBI BioModels through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/biomodels?words=apoptosis&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as apoptosis.
- `id` — optional. Model id such as BIOMD0000000001.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索 BiGG](https://skills.duaer.com/zh/bigg.md)
