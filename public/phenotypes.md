> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/phenotypes.md

---
name: duaer-phenotypes
description: >-
  Look up HPO phenotype terms through Duaer (EBI OLS). One successful search uses 1 Duaer credit.
---

# Duaer phenotypes

Look up HPO phenotype terms through Duaer (EBI OLS). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/phenotypes?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id` (or both; id wins).
- `words` — HPO phenotype label.
- `id` — optional. HPO id (HP:0000819). Overrides words when set.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search MeSH in Duaer](https://skills.duaer.com/mesh.md)
- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
