> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/activities.md

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

Reuse `moleculeChemblId` / names when searching compounds or indications: https://skills.duaer.com/indications.md. Reuse `targetChemblId` / gene symbols when searching targets or genes.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `molecule` or `target` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/mechanisms.md — Duaer mechanisms
- https://skills.duaer.com/assays.md — Duaer assays

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search mechanisms in Duaer](https://skills.duaer.com/mechanisms.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
