> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/civic.md

---
name: duaer-civic
description: >-
  Duaer CIViC. Search clinical interpretation features in CIViC.
  One successful search uses 1 Duaer credit.
---

# Duaer CIViC

Search clinical interpretation features in CIViC. Data comes from CIViC.

## When to use

- Find clinical interpretation features in CIViC.
- Look up one CIViC id.

## When not to use

- ClinVar records. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/civic?words=BRAF&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRAF.
- `id` — Optional. Feature name such as BRAF.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/civic?words=BRAF&limit=10` — CIViC features for BRAF.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`CIViC`), `title`, `url`, and `summary`, plus:

- `civicId`, `resultType` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/clinvar.md — Duaer ClinVar
- https://skills.duaer.com/gwas.md — Duaer GWAS

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 ClinVar](https://skills.duaer.com/zh/clinvar.md)
- [在 Duaer 里检索 GWAS](https://skills.duaer.com/zh/gwas.md)
