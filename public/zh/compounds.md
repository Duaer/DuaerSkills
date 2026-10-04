> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/compounds.md

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

Reuse a compound name as `molecule` when searching activities: https://skills.duaer.com/activities.md.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
A `name` that PubChem does not know, or an identifier PubChem answers with not found, returns no items and uses 0.
Wrong input, a missing identifier, or more than one identifier returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/trials.md — Duaer clinical trials
- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/activities.md — Duaer activities
- https://skills.duaer.com/indications.md — Duaer indications
- https://skills.duaer.com/mechanisms.md — Duaer mechanisms
- https://skills.duaer.com/assays.md — Duaer assays
- https://skills.duaer.com/patents.md — Duaer patents
- https://skills.duaer.com/drug-gene.md — Duaer drug–gene
- https://skills.duaer.com/reactions.md — Duaer reactions
- https://skills.duaer.com/metabolites.md — Duaer metabolites
- https://skills.duaer.com/drug-labels.md — Duaer drug labels
- https://skills.duaer.com/adverse-events.md — Duaer adverse events

## 相关技能

- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索生物活性](https://skills.duaer.com/zh/activities.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
- [在 Duaer 里检索作用机制](https://skills.duaer.com/zh/mechanisms.md)
- [在 Duaer 里检索实验测定](https://skills.duaer.com/zh/assays.md)
- [在 Duaer 里检索专利](https://skills.duaer.com/zh/patents.md)
- [在 Duaer 里检索药–基因互作](https://skills.duaer.com/zh/drug-gene.md)
- [在 Duaer 里检索生化反应](https://skills.duaer.com/zh/reactions.md)
- [在 Duaer 里检索代谢物](https://skills.duaer.com/zh/metabolites.md)
- [在 Duaer 里检索药品标签](https://skills.duaer.com/zh/drug-labels.md)
- [在 Duaer 里检索不良反应](https://skills.duaer.com/zh/adverse-events.md)
