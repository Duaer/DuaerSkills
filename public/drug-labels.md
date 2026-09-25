> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/drug-labels.md

---
name: duaer-drug-labels
description: >-
  Search FDA drug labels through Duaer via OpenFDA. One successful search uses 1 Duaer credit.
---

# Duaer drug labels

Search FDA drug labels through Duaer via OpenFDA. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/drug-labels?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words`, `brand`, or `generic` (or combine; brand/generic narrow when set).
- `words` — brand, generic, or substance name.
- `brand` — optional. OpenFDA brand name.
- `generic` — optional. OpenFDA generic name.
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
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
