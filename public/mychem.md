> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mychem.md

---
name: duaer-mychem
description: >-
  Search aggregated compound annotations in MyChem through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer MyChem

Search aggregated compound annotations in MyChem through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mychem?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as aspirin.
- `id` — optional. Id such as CHEBI:15365.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search ChEBI in Duaer](https://skills.duaer.com/chebi.md)
- [Search ChEMBL in Duaer](https://skills.duaer.com/chembl.md)
