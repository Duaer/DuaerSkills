> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/openalex-publishers.md

---
name: duaer-openalex-publishers
description: >-
  Duaer OpenAlex Publishers. Search publishers in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Publishers

Search publishers in OpenAlex. Data comes from OpenAlex Publishers.

## When to use

- Find publishers in OpenAlex.
- Look up one publisher id.

## When not to use

- Sources. Use https://skills.duaer.com/openalex-sources.md.

## Call

`GET https://api.duaer.com/v1/data/openalex-publishers?words=biology&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as biology.
- `id` — Optional. Id such as P4310319965.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openalex-publishers?words=biology&limit=10` — OpenAlex publishers matching biology.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAlex Publishers`), `title`, `url`, and `summary`, plus:

- `openAlexId` — text.
- `worksCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md — Duaer papers

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
