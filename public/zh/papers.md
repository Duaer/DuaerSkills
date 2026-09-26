> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/papers.md

---
name: duaer-papers
description: >-
  Search published papers through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer papers

Search published papers through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/papers?title=lithium&author=Zhang&yearFrom=2020&yearTo=2024&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `q` — words in the title, abstract, or full text.
- `title` — words in the title.
- `abstract` — words in the abstract.
- `author` — author name.
- `yearFrom`, `yearTo` — publication year. Leave a year out, or send `0`, for any year. A set year is from 1000 to 2100.
- `type` — work type, such as `article`, `preprint`, or `review`.
- `openAccess` — `yes` or `no`.
- `citationsFrom`, `citationsTo` — citation count. `0` means no bound.
- `language` — code such as `en` or `zh`.
- `doi` — digital object identifier.
- `journal`, `institution`, `topic` — names. Duaer uses the closest match.
- `sort` — `citations` orders by most cited. Omit it for relevance.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索预印本](https://skills.duaer.com/zh/preprints.md)
- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
- [在 Duaer 里检索专利](https://skills.duaer.com/zh/patents.md)
- [Duaer 生命科学文献简报员工](https://skills.duaer.com/zh/life-research-brief.md)
