> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mechanisms.md

---
name: duaer-mechanisms
description: >-
  Duaer mechanisms. Search ChEMBL mechanisms of action by molecule.
  One successful search uses 1 Duaer credit.
---

# Duaer mechanisms

Search ChEMBL mechanisms of action by molecule. Data comes from ChEMBL.

## When to use

- Get the mechanism of action and target of a drug.
- Check the action type, such as inhibitor or agonist.

## When not to use

- Measured bioactivities. Use https://skills.duaer.com/activities.md.

## Call

`GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`molecule` is required.

- `molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- `limit` — Optional. From 1 to 20. Default 10. Results prefer higher max phase.

## Examples

- `GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10` — mechanisms of aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEMBL`), `title`, `url`, and `summary`, plus:

- `mechanismId`, `moleculeChemblId`, `mechanismOfAction`, `actionType`, `targetChemblId` — text.
- `maxPhase` — number.
- `directInteraction` — true or false.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
If you send a `molecule` that ChEMBL does not know, Duaer returns no items and uses 0.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search activities in Duaer](https://skills.duaer.com/activities.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
