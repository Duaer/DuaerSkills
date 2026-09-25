> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/drug-recalls.md

---
name: duaer-drug-recalls
description: >-
  Search FDA drug recall enforcement reports through Duaer via OpenFDA. One successful search uses 1 Duaer credit.
---

# Duaer drug recalls

Search FDA drug recall enforcement reports through Duaer via OpenFDA. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/drug-recalls?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words`, `brand`, or `generic` (or combine brand and generic).
- `words` — brand, generic, substance, or product text.
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

- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search RxNorm in Duaer](https://skills.duaer.com/rxnorm.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
