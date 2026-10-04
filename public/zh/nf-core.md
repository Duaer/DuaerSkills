> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/nf-core.md

---
name: duaer-nf-core
description: >-
  Duaer nf-core. Search nf-core pipelines.
  One successful search uses 1 Duaer credit.
---

# Duaer nf-core

Search nf-core pipelines. Data comes from nf-core.

## When to use

- Find nf-core pipelines.
- Look up one pipeline.

## When not to use

- Galaxy tools. Use https://skills.duaer.com/galaxy.md.

## Call

`GET https://api.duaer.com/v1/data/nf-core?words=rnaseq&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as rnaseq.
- `id` — Optional. Id such as rnaseq.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/nf-core?words=rnaseq&limit=10` — nf-core pipelines matching rnaseq.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`nf-core`), `title`, `url`, and `summary`, plus:

- `pipelineId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/workflowhub.md — Duaer WorkflowHub

## 相关技能

- [在 Duaer 里检索 WorkflowHub](https://skills.duaer.com/zh/workflowhub.md)
