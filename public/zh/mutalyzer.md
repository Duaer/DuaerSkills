> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mutalyzer.md

---
name: duaer-mutalyzer
description: >-
  Duaer Mutalyzer. Normalize an HGVS description with Mutalyzer.
  One successful search uses 1 Duaer credit.
---

# Duaer Mutalyzer

Normalize an HGVS description with Mutalyzer. Data comes from Mutalyzer.

## When to use

- Normalize an HGVS description with Mutalyzer.
- Check HGVS syntax before sharing a variant.

## When not to use

- Validate against transcripts. Use https://skills.duaer.com/variant-validator.md.

## Call

`GET https://api.duaer.com/v1/data/mutalyzer?words=NM_007294.4:c.68_69del`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — HGVS description, such as NM_007294.4:c.68_69del.
- `id` — Optional. HGVS description.

## Examples

- `GET https://api.duaer.com/v1/data/mutalyzer?words=NM_007294.4:c.68_69del` — Mutalyzer check of one BRCA1 HGVS.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Mutalyzer`), `title`, `url`, and `summary`, plus:

- `inputDescription`, `normalizedDescription`, `proteinDescription` — text.

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
- https://skills.duaer.com/dbsnp.md — Duaer dbSNP

## 相关技能

- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
- [在 Duaer 里检索 ClinVar](https://skills.duaer.com/zh/clinvar.md)
- [在 Duaer 里检索 dbSNP](https://skills.duaer.com/zh/dbsnp.md)
