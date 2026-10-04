> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/openaire.md

---
name: duaer-openaire
description: >-
  Duaer OpenAIRE. Search publications in OpenAIRE.
  One successful search uses 1 Duaer credit.
---

# Duaer OpenAIRE

Search publications in OpenAIRE. Data comes from OpenAIRE.

## When to use

- Find publications in OpenAIRE.
- Look up one OpenAIRE record.

## When not to use

- OpenAlex papers. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/openaire?words=genomics&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as genomics.
- `id` — Optional. Id such as 10.1234/ex.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/openaire?words=genomics&limit=10` — OpenAIRE publications matching genomics.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OpenAIRE`), `title`, `url`, and `summary`, plus:

- `openaireId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
