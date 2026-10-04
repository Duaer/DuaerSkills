> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/openalex-topics.md

---
name: duaer-openalex-topics
description: >-
  Duaer OpenAlex Topics. Search topics in OpenAlex.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAlex Topics

Search topics in OpenAlex. Data comes from OpenAlex Topics.

## When to use

- Find research topics in OpenAlex.
- Look up one topic id.

## When not to use

- OpenAlex concepts. Use https://skills.duaer.com/openalex-concepts.md.

## Call

`GET https://api.duaer.com/v1/data/openalex-topics?words=cancer&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as cancer.
- `id` — Optional. Id such as T10001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openalex-topics?words=cancer&limit=10` — topics matching cancer.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAlex Topics`), `title`, `url`, and `summary`, plus:

- `openAlexId` — text.
- `worksCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Crossref](https://skills.duaer.com/zh/crossref.md)
