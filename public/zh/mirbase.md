> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mirbase.md

---
name: duaer-mirbase
description: >-
  Duaer miRBase. Search miRNA entries from RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer miRBase

Search miRNA entries from RNAcentral. Data comes from miRBase via RNAcentral.

## When to use

- Find miRNA entries from miRBase via RNAcentral.
- Look up one miRNA id.

## When not to use

- All non-coding RNA. Use https://skills.duaer.com/rnacentral.md.

## Call

`GET https://api.duaer.com/v1/data/mirbase?words=hsa-let-7a&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — such as hsa-let-7a.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mirbase?words=hsa-let-7a&limit=10` — miRNA entries for hsa-let-7a.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`miRBase via RNAcentral`), `title`, `url`, and `summary`, plus:

- `ursId`, `description` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/mirna.md — Duaer miRNA
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索 RNAcentral](https://skills.duaer.com/zh/rnacentral.md)
- [在 Duaer 里检索 miRNA](https://skills.duaer.com/zh/mirna.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
