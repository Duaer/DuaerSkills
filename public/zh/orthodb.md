> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/orthodb.md

---
name: duaer-orthodb
description: >-
  Duaer OrthoDB. Search orthologs in OrthoDB.
  One successful search uses 1 Duaer credit.
---

# Duaer OrthoDB

Search orthologs in OrthoDB. Data comes from OrthoDB.

## When to use

- Find ortholog groups in OrthoDB.
- Look up one group id.

## When not to use

- Gene orthologs by species. Use https://skills.duaer.com/orthologs.md.

## Call

`GET https://api.duaer.com/v1/data/orthodb?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Id such as 9606_0:001234.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/orthodb?words=BRCA1&limit=10` — OrthoDB groups for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OrthoDB`), `title`, `url`, and `summary`, plus:

- `orthodbId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/orthologs.md — Duaer orthologs
- https://skills.duaer.com/oma.md — Duaer OMA

## 相关技能

- [在 Duaer 里检索同源基因](https://skills.duaer.com/zh/orthologs.md)
- [在 Duaer 里检索 OMA](https://skills.duaer.com/zh/oma.md)
