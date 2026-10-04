> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/chembl.md

---
name: duaer-chembl
description: >-
  Duaer ChEMBL. Search bioactive molecules from ChEMBL.
  One successful search uses 1 Duaer credit.
---

# Duaer ChEMBL

Search bioactive molecules from ChEMBL. Data comes from ChEMBL.

## When to use

- Find a bioactive molecule and its ChEMBL id.
- Check development phase and molecule type.

## When not to use

- Measured bioactivities. Use https://skills.duaer.com/activities.md.

## Call

`GET https://api.duaer.com/v1/data/chembl?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — molecule name, such as aspirin.
- `id` — Optional. ChEMBL id such as CHEMBL25.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/chembl?words=aspirin&limit=10` — ChEMBL molecules matching aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`ChEMBL`), `title`, `url`, and `summary`, plus:

- `chemblId`, `name`, `formula`, `weight`, `maxPhase`, `smiles`, `inchiKey` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/ligands.md — Duaer ligands
- https://skills.duaer.com/crossrefs.md — Duaer crossrefs
- https://skills.duaer.com/metabolites.md — Duaer metabolites

## Related skills

- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search ligands in Duaer](https://skills.duaer.com/ligands.md)
- [Search crossrefs in Duaer](https://skills.duaer.com/crossrefs.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
