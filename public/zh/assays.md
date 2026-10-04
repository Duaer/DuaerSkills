> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/assays.md

---
name: duaer-assays
description: >-
  Duaer assays. Search ChEMBL assays by words or assay id.
  One successful search uses 1 Duaer credit.
---

# Duaer assays

Search ChEMBL assays by words or assay id. Data comes from ChEMBL.

## When to use

- Find ChEMBL assays for a target and organism.
- Filter assays by type, such as binding or functional.

## When not to use

- PubChem BioAssays for a gene. Use https://skills.duaer.com/pubchem-assay.md.

## Call

`GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`words` is required.

- `words` — words in the assay description, or a ChEMBL assay id (`CHEMBL5344031`).
- `organism` — Optional. Keep assays whose organism contains this text.
- `assayType` — Optional. Letter code (`B`/`F`/`A`/…) or words from the type description.
- `limit` — Optional. From 1 to 20. Default 10. Results prefer higher confidence.

## Examples

- `GET https://api.duaer.com/v1/data/assays?words=EGFR&organism=Homo%20sapiens&assayType=B&limit=10` — human EGFR binding assays.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEMBL`), `title`, `url`, and `summary`, plus:

- `assayChemblId`, `description`, `assayType`, `assayTypeDescription`, `organism`, `targetChemblId` — text.
- `confidenceScore` — number.
- `baoLabel`, `documentChemblId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索生物活性](https://skills.duaer.com/zh/activities.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索专利](https://skills.duaer.com/zh/patents.md)
