> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gnomad.md

---
name: duaer-gnomad
description: >-
  Duaer gnomAD. Look up a gene symbol in gnomAD (GRCh38).
  One successful search uses 1 Duaer credit.
---

# Duaer gnomAD

Look up a gene symbol in gnomAD (GRCh38). Data comes from gnomAD.

## When to use

- Look up a gene in gnomAD (GRCh38).
- Check gnomAD gene records before variant work.

## When not to use

- Clinical variants. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as PCSK9.
- `id` — Optional. Id such as BRCA1.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10` — gnomAD record for PCSK9.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`gnomAD`), `title`, `url`, and `summary`, plus:

- `geneId`, `symbol` — text.

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

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
- [Search dbSNP in Duaer](https://skills.duaer.com/dbsnp.md)
