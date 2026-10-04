> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/massive.md

---
name: duaer-massive
description: >-
  Duaer MassIVE. Search proteomics datasets in MassIVE.
  One successful search uses 1 Duaer credit.
---

# Duaer MassIVE

Search proteomics datasets in MassIVE. Data comes from MassIVE.

## When to use

- Find proteomics datasets in MassIVE.
- Look up one MSV id.

## When not to use

- PRIDE projects. Use https://skills.duaer.com/pride.md.

## Call

`GET https://api.duaer.com/v1/data/massive?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Accession such as MSV000065795.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/massive?words=BRCA1&limit=10` — MassIVE datasets for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MassIVE`), `title`, `url`, and `summary`, plus:

- `accession` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search PRIDE in Duaer](https://skills.duaer.com/pride.md)
- [Search ProteomeXchange in Duaer](https://skills.duaer.com/proteomexchange.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
