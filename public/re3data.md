> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/re3data.md

---
name: duaer-re3data
description: >-
  Duaer re3data. Search research data repositories in re3data.
  One successful search uses 1 Duaer credit.
---

# Duaer re3data

Search research data repositories in re3data. Data comes from re3data.

## When to use

- Find research data repositories in re3data.
- Look up one repository id.

## When not to use

- Datasets themselves. Use https://skills.duaer.com/datacite.md.

## Call

`GET https://api.duaer.com/v1/data/re3data?words=genomics&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as genomics.
- `id` — Optional. Id such as r3d100010468.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/re3data?words=genomics&limit=10` — re3data repositories matching genomics.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`re3data`), `title`, `url`, and `summary`, plus:

- `re3dataId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/zenodo.md — Duaer Zenodo

## Related skills

- [Search Zenodo in Duaer](https://skills.duaer.com/zenodo.md)
