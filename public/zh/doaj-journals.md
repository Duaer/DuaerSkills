> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/doaj-journals.md

---
name: duaer-doaj-journals
description: >-
  Duaer DOAJ Journals. Search open access journals in DOAJ.
  One successful search uses 1 Duaer credit.
---

# Duaer DOAJ Journals

Search open access journals in DOAJ. Data comes from DOAJ Journals.

## When to use

- Find open access journals in DOAJ.
- Look up one journal by ISSN or id.

## When not to use

- Articles. Use https://skills.duaer.com/doaj.md.

## Call

`GET https://api.duaer.com/v1/data/doaj-journals?words=biology&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as biology.
- `id` — Optional. Id such as 1234-5678.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/doaj-journals?words=biology&limit=10` — DOAJ journals matching biology.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`DOAJ Journals`), `title`, `url`, and `summary`, plus:

- `journalId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索 DOAJ](https://skills.duaer.com/zh/doaj.md)
