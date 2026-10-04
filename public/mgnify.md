> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mgnify.md

---
name: duaer-mgnify
description: >-
  Duaer MGnify. Search microbiome studies in MGnify.
  One successful search uses 1 Duaer credit.
---

# Duaer MGnify

Search microbiome studies in MGnify. Data comes from MGnify.

## When to use

- Find microbiome studies in MGnify.
- Look up one study id.

## When not to use

- MG-RAST projects. Use https://skills.duaer.com/mgrast.md.

## Call

`GET https://api.duaer.com/v1/data/mgnify?words=soil&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as soil.
- `id` — Optional. Id such as MGYS00005798.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mgnify?words=soil&limit=10` — MGnify studies matching soil.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MGnify`), `title`, `url`, and `summary`, plus:

- `studyId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search GEO in Duaer](https://skills.duaer.com/geo.md)
- [Search BioSamples in Duaer](https://skills.duaer.com/biosamples.md)
