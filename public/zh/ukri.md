> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ukri.md

---
name: duaer-ukri
description: >-
  Duaer UKRI. Search UK Research and Innovation Gateway to Research projects.
  One successful search uses 1 Duaer credit.
---

# Duaer UKRI

Search UK Research and Innovation Gateway to Research projects. Data comes from UKRI.

## When to use

- Find UKRI-funded research projects.
- Look up one project id.

## When not to use

- NIH grants. Use https://skills.duaer.com/grants.md.

## Call

`GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as crispr.
- `id` — Optional. Id such as F71A563C-4DDC-4ED3-AAE2-A9D1D19618BE.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ukri?words=crispr&limit=10` — UKRI projects matching crispr.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UKRI`), `title`, `url`, and `summary`, plus:

- `projectId`, `status` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/nsf-awards.md — Duaer NSF Awards
- https://skills.duaer.com/grants.md — Duaer grants

## 相关技能

- [在 Duaer 里检索 NSF Awards](https://skills.duaer.com/zh/nsf-awards.md)
- [在 Duaer 里检索基金](https://skills.duaer.com/zh/grants.md)
