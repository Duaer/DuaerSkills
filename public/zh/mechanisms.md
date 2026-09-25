> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/mechanisms.md

---
name: duaer-mechanisms
description: >-
  Search ChEMBL mechanisms of action through Duaer by molecule. One successful search uses 1 Duaer credit.
---

# Duaer mechanisms

Search ChEMBL mechanisms of action through Duaer by molecule. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mechanisms?molecule=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `molecule` is required.
- `molecule` — molecule name or ChEMBL id (`CHEMBL25`). Names resolve via ChEMBL search. Look up PubChem names with https://skills.duaer.com/compounds.md.
- `limit` — optional. From 1 to 20. Default 10. Results prefer higher max phase.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索生物活性](https://skills.duaer.com/zh/activities.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
