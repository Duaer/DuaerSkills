> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cpic.md

---
name: duaer-cpic
description: >-
  Duaer CPIC. Search CPIC pharmacogenomic genes and drugs.
  One successful search uses 1 Duaer credit.
---

# Duaer CPIC

Search CPIC pharmacogenomic genes and drugs. Data comes from CPIC.

## When to use

- Find CPIC pharmacogenomic genes and drugs.
- Look up one CPIC gene or drug.

## When not to use

- ClinPGx records. Use https://skills.duaer.com/clinpgx.md.

## Call

`GET https://api.duaer.com/v1/data/cpic?words=CYP2C19&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as CYP2C19.
- `id` — Optional. Id such as CYP2C19.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cpic?words=CYP2C19&limit=10` — CPIC records for CYP2C19.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`CPIC`), `title`, `url`, and `summary`, plus:

- `kind`, `cpicId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search ClinPGx in Duaer](https://skills.duaer.com/clinpgx.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
