> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/compounds.md

---
name: duaer-compounds
description: >-
  Duaer compounds. PubChem compounds and drugs by name, CID, formula, SMILES, or InChIKey, with weight, structure, and drug-likeness properties.
  One successful search uses 1 Duaer credit.
---

# Duaer compounds

Duaer compounds looks up PubChem compounds by one identifier and returns structure and computed properties.

## When to use

- Get the formula, weight, SMILES, and InChIKey of a drug by name.
- Check drug-likeness properties such as XLogP, TPSA, and hydrogen bond counts.
- Resolve an InChIKey or SMILES to a PubChem CID.

## When not to use

- Bioactivity against targets. Use https://skills.duaer.com/activities.md.
- Drug labels and indications. Use https://skills.duaer.com/drug-labels.md.
- Ids for one compound in other databases. Use https://skills.duaer.com/crossrefs.md.

## Call

`GET https://api.duaer.com/v1/data/compounds?name=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide exactly one of `name`, `cid`, `formula`, `smiles`, or `inchikey`.

- `name` — Compound or drug name, such as `aspirin`. A name can match several compounds, up to `limit`.
- `cid` — PubChem compound id, such as `2244`.
- `formula` — Molecular formula, such as `C9H8O4`. Can match several compounds, up to `limit`.
- `smiles` — SMILES string. URL-encode it.
- `inchikey` — InChIKey, such as `BSYNRYMUTXBXSQ-UHFFFAOYSA-N`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/compounds?name=aspirin` — aspirin and close name matches.
- `GET https://api.duaer.com/v1/data/compounds?inchikey=BSYNRYMUTXBXSQ-UHFFFAOYSA-N` — one compound by InChIKey.
- `GET https://api.duaer.com/v1/data/compounds?formula=C9H8O4&limit=5` — compounds with one formula.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PubChem`), `title`, `url`, and `summary`, plus:

- `cid` — PubChem compound id.
- `formula`, `weight` — molecular formula and weight.
- `iupacName`, `smiles`, `inchi`, `inchiKey` — names and structure strings.
- `xlogp`, `tpsa` — computed lipophilicity and polar surface area.
- `hbondDonors`, `hbondAcceptors`, `rotatableBonds` — counts used in drug-likeness rules.
- `complexity`, `charge` — structural complexity and formal charge.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
A `name` that PubChem does not know, or an identifier PubChem answers with not found, returns no items and uses 0.
Wrong input, a missing identifier, or more than one identifier returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
- [Search protein structures in Duaer](https://skills.duaer.com/structures.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search activities in Duaer](https://skills.duaer.com/activities.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search mechanisms in Duaer](https://skills.duaer.com/mechanisms.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
- [Search patents in Duaer](https://skills.duaer.com/patents.md)
- [Search drug–gene interactions in Duaer](https://skills.duaer.com/drug-gene.md)
- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search metabolites in Duaer](https://skills.duaer.com/metabolites.md)
- [Search drug labels in Duaer](https://skills.duaer.com/drug-labels.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
