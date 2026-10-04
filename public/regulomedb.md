> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/regulomedb.md

---
name: duaer-regulomedb
description: >-
  Duaer RegulomeDB. Score regulatory evidence for a variant in RegulomeDB.
  One successful search uses 1 Duaer credit.
---

# Duaer RegulomeDB

Score regulatory evidence for a variant in RegulomeDB. Data comes from RegulomeDB.

## When to use

- Score regulatory evidence for a variant in RegulomeDB.
- Rank noncoding variants by regulatory evidence.

## When not to use

- Variant consequences. Use https://skills.duaer.com/ensembl-vep.md.

## Call

`GET https://api.duaer.com/v1/data/regulomedb?words=rs33980857&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as rs33980857.
- `id` — Optional. Id such as chr1:1000205-1000205.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/regulomedb?words=rs33980857&limit=10` — RegulomeDB score for rs33980857.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RegulomeDB`), `title`, `url`, and `summary`, plus:

- `rsid`, `chrom`, `position`, `ranking`, `probability` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search dbSNP in Duaer](https://skills.duaer.com/dbsnp.md)
- [Search ENCODE in Duaer](https://skills.duaer.com/encode.md)
