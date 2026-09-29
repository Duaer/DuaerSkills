> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metabolites.md

---
name: duaer-metabolites
description: >-
  Search metabolites through Duaer via ChEBI. One successful search uses 1 Duaer credit.
---

# Duaer metabolites

Search metabolites through Duaer via ChEBI. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id` (or both; id wins).
- `words` — metabolite or small-molecule name.
- `id` — optional. ChEBI id (`CHEBI:17234` or `17234`). Overrides words when set.
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
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
