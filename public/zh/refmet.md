> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/refmet.md

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

## Related

- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/metabolights.md — Duaer MetaboLights
- https://skills.duaer.com/chebi.md — Duaer ChEBI
- https://skills.duaer.com/metabolic-dark-matter.md — Duaer: annotate an unknown feature (metabolic dark matter)

## 相关技能

- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索 MetaboLights](https://skills.duaer.com/zh/metabolights.md)
- [在 Duaer 里检索 ChEBI](https://skills.duaer.com/zh/chebi.md)
- [用 Duaer 注释未知特征（代谢暗物质）](https://skills.duaer.com/zh/metabolic-dark-matter.md)
