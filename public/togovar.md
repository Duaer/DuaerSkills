> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/togovar.md

---
name: duaer-togovar
description: >-
  Duaer TogoVar. Search TogoVar Japanese genome variants by rsID or gene.
  One successful search uses 1 Duaer credit.
---

# Duaer TogoVar

Search TogoVar Japanese genome variants by rsID or gene. Data comes from TogoVar.

## When to use

- Find Japanese genome variants in TogoVar by rs id or gene.
- Look up one TogoVar id.

## When not to use

- Global allele frequencies. Use https://skills.duaer.com/gnomad.md.

## Call

`GET https://api.duaer.com/v1/data/togovar?words=rs671&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as rs671.
- `id` — Optional. Id such as tgv47264307.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/togovar?words=rs671&limit=10` — TogoVar records for rs671.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`TogoVar`), `title`, `url`, and `summary`, plus:

- `togovarId`, `rsid`, `gene`, `chromosome`, `position` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/variants.md — Duaer variants
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP
- https://skills.duaer.com/clinvar.md — Duaer ClinVar

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search dbSNP in Duaer](https://skills.duaer.com/dbsnp.md)
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
