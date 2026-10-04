> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/ensembl-vep.md

---
name: duaer-ensembl-vep
description: >-
  Duaer Ensembl VEP. Predict variant effects with Ensembl VEP.
  One successful search uses 1 Duaer credit.
---

# Duaer Ensembl VEP

Predict variant effects with Ensembl VEP. Data comes from Ensembl VEP.

## When to use

- Predict the consequence of a variant with Ensembl VEP.
- Annotate an rs id or HGVS description.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/ensembl-vep?words=rs699&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as rs699.
- `id` — Optional. Id such as rs699.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ensembl-vep?words=rs699&limit=10` — VEP consequences for rs699.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Ensembl VEP`), `title`, `url`, and `summary`, plus:

- `variantId`, `mostSevere` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/ensembl.md — Duaer Ensembl
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 Ensembl](https://skills.duaer.com/zh/ensembl.md)
- [在 Duaer 里检索 dbSNP](https://skills.duaer.com/zh/dbsnp.md)
