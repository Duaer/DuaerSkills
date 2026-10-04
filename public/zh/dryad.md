> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/dryad.md

---
name: duaer-dryad
description: >-
  Duaer Dryad. Search research datasets in Dryad.
  One successful search uses 1 Duaer credit.
---

# Duaer Dryad

Search research datasets in Dryad. Data comes from Dryad.

## When to use

- Find research datasets in Dryad.
- Look up one Dryad DOI.

## When not to use

- Zenodo records. Use https://skills.duaer.com/zenodo.md.

## Call

`GET https://api.duaer.com/v1/data/dryad?words=proteomics&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as proteomics.
- `id` — Optional. Id such as doi:10.5061/dryad.xxx.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/dryad?words=proteomics&limit=10` — Dryad datasets matching proteomics.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Dryad`), `title`, `url`, and `summary`, plus:

- `doi` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索 Zenodo](https://skills.duaer.com/zh/zenodo.md)
