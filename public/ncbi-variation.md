> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ncbi-variation.md

---
name: duaer-ncbi-variation
description: >-
  Duaer NCBI Variation. Look up RefSNP records in NCBI Variation.
  One successful search uses 1 Duaer credit.
---

# Duaer NCBI Variation

Look up RefSNP records in NCBI Variation. Data comes from NCBI Variation.

## When to use

- Look up a RefSNP record by number.
- Confirm a RefSNP record exists.

## When not to use

- Clinical significance. Use https://skills.duaer.com/clinvar.md.

## Call

`GET https://api.duaer.com/v1/data/ncbi-variation?words=7412&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as 7412.
- `id` — Optional. Id such as 7412.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/ncbi-variation?words=7412&limit=10` — RefSNP 7412.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`NCBI Variation`), `title`, `url`, and `summary`, plus:

- `refsnpId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
