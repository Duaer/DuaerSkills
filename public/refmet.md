> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/refmet.md

---
name: duaer-refmet
description: >-
  Duaer RefMet. Search metabolites in Metabolomics Workbench RefMet.
  One successful search uses 1 Duaer credit.
---

# Duaer RefMet

Search metabolites in Metabolomics Workbench RefMet. Data comes from RefMet.

## When to use

- Find standardized metabolite names in RefMet.
- Look up one RefMet name.

## When not to use

- ChEBI metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

`GET https://api.duaer.com/v1/data/refmet?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — such as glucose.
- `id` — optional.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/refmet?words=glucose&limit=10` — RefMet names matching glucose.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RefMet`), `title`, `url`, and `summary`, plus:

- `refmetId`, `formula`, `pubchemCid`, `hmdbId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search MetaboLights in Duaer](https://skills.duaer.com/metabolights.md)
- [Search ChEBI in Duaer](https://skills.duaer.com/chebi.md)
- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
