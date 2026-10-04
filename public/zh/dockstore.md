> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/dockstore.md

---
name: duaer-dockstore
description: >-
  Duaer Dockstore. Search workflows in Dockstore.
  One successful search uses 1 Duaer credit.
---

# Duaer Dockstore

Search workflows in Dockstore. Data comes from Dockstore.

## When to use

- Find workflows in Dockstore.
- Look up one workflow.

## When not to use

- WorkflowHub workflows. Use https://skills.duaer.com/workflowhub.md.

## Call

`GET https://api.duaer.com/v1/data/dockstore?words=rna&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as rna.
- `id` — Optional. Id such as github.com/org/tool.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/dockstore?words=rna&limit=10` — Dockstore workflows matching rna.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Dockstore`), `title`, `url`, and `summary`, plus:

- `toolId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 bio.tools](https://skills.duaer.com/zh/bio-tools.md)
- [在 Duaer 里检索 WorkflowHub](https://skills.duaer.com/zh/workflowhub.md)
