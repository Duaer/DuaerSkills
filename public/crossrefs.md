> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/crossrefs.md

---
name: duaer-crossrefs
description: >-
  Duaer crossrefs. Look up UniChem compound cross-references by InChIKey.
  One successful search uses 1 Duaer credit.
---

# Duaer crossrefs

Look up UniChem compound cross-references by InChIKey. Data comes from UniChem.

## When to use

- Map a compound InChIKey to ids in ChEMBL, ChEBI, DrugBank, and other sources.
- Link a compound across databases.

## When not to use

- Compound properties. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/crossrefs?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `inchikey`.

- `inchikey` — compound InChIKey (for example aspirin: BSYNRYMUTXBXSQ-UHFFFAOYSA-N).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/crossrefs?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N&limit=10` — cross-references for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniChem`), `title`, `url`, and `summary`, plus:

- `database`, `compoundId`, `srcId`, `inchikey` — text.

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
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
