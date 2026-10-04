> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/interactions.md

---
name: duaer-interactions
description: >-
  Duaer interactions. Search STRING protein interaction partners.
  One successful search uses 1 Duaer credit.
---

# Duaer interactions

Search STRING protein interaction partners. Data comes from STRING.

## When to use

- List interaction partners of a protein.
- Keep only high-confidence partners with a score threshold.

## When not to use

- Experimentally curated binary interactions. Use https://skills.duaer.com/intact.md.

## Call

`GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`protein` is required. Other fields are optional.

- `protein` — gene symbol, UniProt accession, or STRING id. Look up symbols with https://skills.duaer.com/genes.md or proteins with https://skills.duaer.com/proteins.md.
- `species` — Optional. NCBI taxonomy id. Default `9606` (human). Look up ids with https://skills.duaer.com/organisms.md.
- `requiredScore` — Optional. STRING threshold from 0 to 1000. Omit for the STRING default.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/interactions?protein=INS&species=9606&limit=10` — human insulin partners.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`STRING`), `title`, `url`, and `summary`, plus:

- `proteinA`, `proteinB`, `stringIdA`, `stringIdB`, `partner`, `partnerStringId` — text.
- `score`, `neighborhood`, `fusion`, `cooccurrence`, `coexpression`, `experimental`, `database`, `textmining`, `taxId` — number.

Reuse `partner` as `gene` when searching proteins or expression, or as `protein` for further interaction partners.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/expression.md — Duaer expression
- https://skills.duaer.com/complexes.md — Duaer complexes

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search complexes in Duaer](https://skills.duaer.com/complexes.md)
