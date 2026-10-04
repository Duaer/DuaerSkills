> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/bio-tools.md

---
name: duaer-bio-tools
description: >-
  Duaer bio.tools. Search bioinformatics tools in bio.tools.
  One successful search uses 1 Duaer credit.
---

# Duaer bio.tools

Search bioinformatics tools in bio.tools. Data comes from bio.tools.

## When to use

- Find bioinformatics tools in bio.tools.
- Look up one tool id.

## When not to use

- Workflows. Use https://skills.duaer.com/dockstore.md.

## Call

`GET https://api.duaer.com/v1/data/bio-tools?words=blast&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as blast.
- `id` — Optional. Id such as blast.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bio-tools?words=blast&limit=10` — tools matching blast.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`bio.tools`), `title`, `url`, and `summary`, plus:

- `toolId`, `homepage` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/dockstore.md — Duaer Dockstore

## Related skills

- [Search assays in Duaer](https://skills.duaer.com/assays.md)
- [Search Dockstore in Duaer](https://skills.duaer.com/dockstore.md)
