> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/harvard-dataverse.md

---
name: duaer-harvard-dataverse
description: >-
  Duaer Harvard Dataverse. Search datasets in Harvard Dataverse.
  One successful search uses 1 Duaer credit.
---

# Duaer Harvard Dataverse

Search datasets in Harvard Dataverse. Data comes from Harvard Dataverse.

## When to use

- Find datasets in Harvard Dataverse.
- Look up one dataset DOI.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

`GET https://api.duaer.com/v1/data/harvard-dataverse?words=climate&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as climate.
- `id` — Optional. Id such as doi:10.7910/DVN/ABC.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/harvard-dataverse?words=climate&limit=10` — Dataverse datasets matching climate.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Harvard Dataverse`), `title`, `url`, and `summary`, plus:

- `datasetId` — text.

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
