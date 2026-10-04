> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/nsf-awards.md

---
name: duaer-nsf-awards
description: >-
  Duaer NSF Awards. Search NSF awards.
  One successful search uses 1 Duaer credit.
---

# Duaer NSF Awards

Search NSF awards. Data comes from NSF Awards.

## When to use

- Find NSF awards on a topic.
- Look up one award id.

## When not to use

- NIH grants. Use https://skills.duaer.com/grants.md.

## Call

`GET https://api.duaer.com/v1/data/nsf-awards?words=proteomics&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as proteomics.
- `id` — Optional. Id such as 1234567.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nsf-awards?words=proteomics&limit=10` — NSF awards matching proteomics.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NSF Awards`), `title`, `url`, and `summary`, plus:

- `awardId`, `agency` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
