> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/variant-validator.md

---
name: duaer-variant-validator
description: >-
  Duaer VariantValidator. Validate an HGVS description with VariantValidator.
  One successful search uses 1 Duaer credit.
---

# Duaer VariantValidator

Validate an HGVS description with VariantValidator. Data comes from VariantValidator.

## When to use

- Validate an HGVS description with VariantValidator.
- Map a variant between transcript and genome.

## When not to use

- Normalize HGVS syntax. Use https://skills.duaer.com/mutalyzer.md.

## Call

`GET https://api.duaer.com/v1/data/variant-validator?words=NM_007294.4:c.68_69del`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — HGVS description, such as NM_007294.4:c.68_69del.
- `id` — Optional. HGVS description.

## Examples

- `GET https://api.duaer.com/v1/data/variant-validator?words=NM_007294.4:c.68_69del` — VariantValidator check of one BRCA1 HGVS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`VariantValidator`), `title`, `url`, and `summary`, plus:

- `variantId`, `gene`, `genomicHgvs`, `maneSelect` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 Mutalyzer](https://skills.duaer.com/zh/mutalyzer.md)
- [在 Duaer 里检索 ClinVar](https://skills.duaer.com/zh/clinvar.md)
