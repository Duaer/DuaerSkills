> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/bioregistry.md

---
name: duaer-bioregistry
description: >-
  Duaer Bioregistry. Search prefix registry entries in Bioregistry.
  One successful search uses 1 Duaer credit.
---

# Duaer Bioregistry

Search prefix registry entries in Bioregistry. Data comes from Bioregistry.

## When to use

- Find identifier prefixes and their registry entries.
- Check how to resolve a CURIE prefix.

## When not to use

- Normalize one CURIE. Use https://skills.duaer.com/node-norm.md.

## Call

`GET https://api.duaer.com/v1/data/bioregistry?words=chebi&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as chebi.
- `id` — Optional. Id such as chebi.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bioregistry?words=chebi&limit=10` — Bioregistry entries matching chebi.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Bioregistry`), `title`, `url`, and `summary`, plus:

- `prefix`, `name` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search crossrefs in Duaer](https://skills.duaer.com/crossrefs.md)
- [Search NodeNorm in Duaer](https://skills.duaer.com/node-norm.md)
