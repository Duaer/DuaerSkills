> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/datacite.md

---
name: duaer-datacite
description: >-
  Duaer DataCite. Search DataCite DOI metadata for datasets and works.
  One successful search uses 1 Duaer credit.
---

# Duaer DataCite

Search DataCite DOI metadata for datasets and works. Data comes from DataCite.

## When to use

- Find DOI metadata for datasets and other works in DataCite.
- Look up one DataCite DOI.

## When not to use

- Journal articles in Crossref. Use https://skills.duaer.com/crossref.md.

## Call

`GET https://api.duaer.com/v1/data/datacite?words=crispr&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as crispr.
- `id` — Optional. Id such as 10.5281/zenodo.22963915.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/datacite?words=crispr&limit=10` — DataCite records matching crispr.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DataCite`), `title`, `url`, and `summary`, plus:

- `doi`, `publisher` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 Zenodo](https://skills.duaer.com/zh/zenodo.md)
- [在 Duaer 里检索 Crossref](https://skills.duaer.com/zh/crossref.md)
