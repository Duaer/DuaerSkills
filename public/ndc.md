> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ndc.md

---
name: duaer-ndc
description: >-
  Search drug NDC records in OpenFDA through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer NDC

Search drug NDC records in OpenFDA through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/ndc?words=tylenol&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — brand words, such as tylenol.
- `id` — optional. Product NDC such as 50580-176.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search RxNorm in Duaer](https://skills.duaer.com/rxnorm.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
