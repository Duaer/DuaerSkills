> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/omicsdi.md

---
name: duaer-omicsdi
description: >-
  Duaer OmicsDI. Search multi-omics datasets in OmicsDI.
  One successful search uses 1 Duaer credit.
---

# Duaer OmicsDI

Search multi-omics datasets in OmicsDI. Data comes from OmicsDI.

## When to use

- Find multi-omics datasets in OmicsDI.
- Look up one dataset id.

## When not to use

- BioStudies studies. Use https://skills.duaer.com/biostudies.md.

## Call

`GET https://api.duaer.com/v1/data/omicsdi?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as BRCA1.
- `id` — Optional. Dataset id such as MTBLS12109.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/omicsdi?words=BRCA1&limit=10` — OmicsDI datasets for BRCA1.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`OmicsDI`), `title`, `url`, and `summary`, plus:

- `datasetId`, `omicsSource` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/geo.md — Duaer GEO
- https://skills.duaer.com/pride.md — Duaer PRIDE
- https://skills.duaer.com/expression-atlas.md — Duaer Expression Atlas

## Related skills

- [Search GEO in Duaer](https://skills.duaer.com/geo.md)
- [Search PRIDE in Duaer](https://skills.duaer.com/pride.md)
- [Search Expression Atlas in Duaer](https://skills.duaer.com/expression-atlas.md)
