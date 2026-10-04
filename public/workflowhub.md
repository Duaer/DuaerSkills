> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/workflowhub.md

---
name: duaer-workflowhub
description: >-
  Duaer WorkflowHub. Search workflows in WorkflowHub.
  One successful search uses 1 Duaer credit.
---

# Duaer WorkflowHub

Search workflows in WorkflowHub. Data comes from WorkflowHub.

## When to use

- Find workflows in WorkflowHub.
- Look up one workflow id.

## When not to use

- Dockstore workflows. Use https://skills.duaer.com/dockstore.md.

## Call

`GET https://api.duaer.com/v1/data/workflowhub?words=proteomics&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as proteomics.
- `id` — Optional. Id such as workflowhub.eu/123.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/workflowhub?words=proteomics&limit=10` — WorkflowHub workflows matching proteomics.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`WorkflowHub`), `title`, `url`, and `summary`, plus:

- `toolId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Dockstore in Duaer](https://skills.duaer.com/dockstore.md)
- [Search bio.tools in Duaer](https://skills.duaer.com/bio-tools.md)
