> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mirna.md

---
name: duaer-mirna
description: >-
  Duaer miRNA. Search microRNA entries in RNAcentral.
  One successful search uses 1 Duaer credit.
---

# Duaer miRNA

Search microRNA entries in RNAcentral. Data comes from miRNA.

## When to use

- Find microRNA entries in RNAcentral.
- Look up one microRNA id.

## When not to use

- All non-coding RNA. Use https://skills.duaer.com/rnacentral.md.

## Call

`GET https://api.duaer.com/v1/data/mirna?words=hsa-miR-21&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as hsa-miR-21.
- `id` — Optional. Id such as URS000075C808.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mirna?words=hsa-miR-21&limit=10` — microRNA entries for hsa-miR-21.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`miRNA`), `title`, `url`, and `summary`, plus:

- `rnacentralId`, `description`, `length` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/rnacentral.md — Duaer RNAcentral
- https://skills.duaer.com/rfam.md — Duaer Rfam
- https://skills.duaer.com/genes.md — Duaer genes

## 相关技能

- [在 Duaer 里检索 RNAcentral](https://skills.duaer.com/zh/rnacentral.md)
- [在 Duaer 里检索 Rfam](https://skills.duaer.com/zh/rfam.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
