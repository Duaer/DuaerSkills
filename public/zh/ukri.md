> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ukri.md

---
name: duaer-ukri
description: >-
  Search UK Research and Innovation Gateway to Research projects through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer UKRI

Search UK Research and Innovation Gateway to Research projects through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as crispr.
- `id` — optional. Id such as F71A563C-4DDC-4ED3-AAE2-A9D1D19618BE.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 NSF Awards](https://skills.duaer.com/zh/nsf-awards.md)
- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
