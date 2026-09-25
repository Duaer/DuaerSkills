> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/orphanet.md

---
name: duaer-orphanet
description: >-
  Search rare diseases via Orphanet through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Orphanet

Search rare diseases via Orphanet through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/orphanet?words=Marfan&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — rare disease words, such as Marfan.
- `id` — optional. Orphanet code such as ORPHA:558 or 558.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 Monarch](https://skills.duaer.com/zh/monarch.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索表型](https://skills.duaer.com/zh/phenotypes.md)
