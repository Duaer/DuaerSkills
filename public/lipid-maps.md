> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/lipid-maps.md

---
name: duaer-lipid-maps
description: >-
  Duaer Lipid Maps. Search lipid structures in LIPID MAPS.
  One successful search uses 1 Duaer credit.
---

# Duaer Lipid Maps

Search lipid structures in LIPID MAPS. Data comes from Lipid Maps.

## When to use

- Find lipid structures and LIPID MAPS ids.
- Look up one LM id.

## When not to use

- Other metabolites. Use https://skills.duaer.com/metabolites.md.

## Call

`GET https://api.duaer.com/v1/data/lipid-maps?words=PA&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as PA.
- `id` — Optional. Id such as LMFA01010001.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/lipid-maps?words=PA&limit=10` — lipids matching PA.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Lipid Maps`), `title`, `url`, and `summary`, plus:

- `lmId`, `name`, `sysName` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search ChEBI in Duaer](https://skills.duaer.com/chebi.md)
