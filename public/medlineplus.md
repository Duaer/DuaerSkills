> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/medlineplus.md

---
name: duaer-medlineplus
description: >-
  Duaer MedlinePlus. Look up consumer health topics in MedlinePlus.
  One successful search uses 1 Duaer credit.
---

# Duaer MedlinePlus

Look up consumer health topics in MedlinePlus. Data comes from MedlinePlus.

## When to use

- Find consumer health topics for a code or term.
- Give patients plain-language health information.

## When not to use

- ICD-10 codes. Use https://skills.duaer.com/icd10.md.

## Call

`GET https://api.duaer.com/v1/data/medlineplus?words=E11&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as E11.
- `id` — Optional. Id such as E11.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/medlineplus?words=E11&limit=10` — MedlinePlus topics for code E11.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MedlinePlus`), `title`, `url`, and `summary`, plus:

- `code` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search MeSH in Duaer](https://skills.duaer.com/mesh.md)
