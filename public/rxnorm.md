> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rxnorm.md

---
name: duaer-rxnorm
description: >-
  Look up drug names through Duaer via RxNorm (NLM RxNav). One successful search uses 1 Duaer credit.
---

# Duaer RxNorm

Look up drug names through Duaer via RxNorm (NLM RxNav). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/rxnorm?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id` (or both; id wins).
- `words` — drug or ingredient name.
- `id` — optional. RxNorm concept id (RxCUI). Overrides words when set.
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
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
