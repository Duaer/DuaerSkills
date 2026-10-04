> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/crossrefs.md

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

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/indications.md — Duaer indications

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
