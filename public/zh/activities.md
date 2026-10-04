> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/activities.md

---
name: duaer-activities
description: >-
  Duaer activities. Search ChEMBL bioactivities by molecule or target.
  One successful search uses 1 Duaer credit.
---

# Duaer activities

Search ChEMBL bioactivities by molecule or target. Data comes from ChEMBL.

## When to use

- List measured bioactivities of a molecule.
- List active molecules against a target.

## When not to use

- Binding affinities by UniProt accession. Use https://skills.duaer.com/bindingdb.md.

## Call

`GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

At least `molecule` or `target` is required.

- `molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- `target` — Optional. Target name, gene symbol, or ChEMBL id. Alone, returns activities for that target. With `molecule`, filters both. Look up gene–disease targets with https://skills.duaer.com/targets.md.
- `limit` — Optional. From 1 to 20. Default 10. Results prefer higher pChEMBL values.

## Examples

- `GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10` — bioactivities of aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEMBL`), `title`, `url`, and `summary`, plus:

- `activityId`, `moleculeChemblId`, `moleculeName`, `targetChemblId`, `targetName`, `targetOrganism`, `standardType`, `standardRelation`, `standardValue`, `standardUnits`, `pchemblValue`, `assayChemblId`, `assayDescription`, `assayType` — text.
- `documentYear` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `molecule` or `target` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索作用机制](https://skills.duaer.com/zh/mechanisms.md)
- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
