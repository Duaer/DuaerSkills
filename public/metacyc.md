> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/metacyc.md

---
name: duaer-metacyc
description: >-
  Duaer MetaCyc. Search pathways in MetaCyc.
  One successful search uses 1 Duaer credit.
---

# Duaer MetaCyc

Search pathways in MetaCyc. Data comes from MetaCyc.

## When to use

- Find MetaCyc pathways for a protein or term.
- Look up one MetaCyc pathway.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/metacyc?words=P04637&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`.

- `words` — UniProt accession or pathway id, such as P04637 or META:GLYCOLYSIS.
- `id` — Optional. Pathway id such as META:GLYCOLYSIS.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/metacyc?words=P04637&limit=10` — MetaCyc pathways for P04637.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MetaCyc`), `title`, `url`, and `summary`, plus:

- `pathwayId`, `orgId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search WikiPathways in Duaer](https://skills.duaer.com/wikipathways.md)
