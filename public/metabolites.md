> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metabolites.md

---
name: duaer-metabolites
description: >-
  Duaer metabolites. Search metabolites from ChEBI.
  One successful search uses 1 Duaer credit.
---

# Duaer metabolites

Search metabolites from ChEBI. Data comes from ChEBI.

## When to use

- Find a metabolite and its ChEBI id.
- Get synonyms and a description of a small molecule.

## When not to use

- Compound properties from PubChem. Use https://skills.duaer.com/compounds.md.

## Call

`GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id` (or both; id wins).

- `words` — metabolite or small-molecule name.
- `id` — Optional. ChEBI id (`CHEBI:17234` or `17234`). Overrides words when set.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/metabolites?words=glucose&limit=10` — metabolites matching glucose.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEBI`), `title`, `url`, and `summary`, plus:

- `chebiId`, `description`, `synonyms` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Annotate an unknown feature with Duaer](https://skills.duaer.com/metabolic-dark-matter.md)
