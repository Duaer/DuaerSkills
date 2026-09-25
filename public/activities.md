> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/activities.md

---
name: duaer-activities
description: >-
  Search ChEMBL bioactivities through Duaer by molecule or target. One successful search uses 1 Duaer credit.
---

# Duaer activities

Search ChEMBL bioactivities through Duaer by molecule or target. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/activities?molecule=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least `molecule` or `target` is required.
- `molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- `target` — optional. Target name, gene symbol, or ChEMBL id. Alone, returns activities for that target. With `molecule`, filters both. Look up gene–disease targets with https://skills.duaer.com/targets.md.
- `limit` — optional. From 1 to 20. Default 10. Results prefer higher pChEMBL values.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search targets in Duaer](https://skills.duaer.com/targets.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search mechanisms in Duaer](https://skills.duaer.com/mechanisms.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
