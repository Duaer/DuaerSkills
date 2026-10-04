> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/bindingdb.md

---
name: duaer-bindingdb
description: >-
  Duaer BindingDB. Search BindingDB ligand affinities by UniProt accession.
  One successful search uses 1 Duaer credit.
---

# Duaer BindingDB

Search BindingDB ligand affinities by UniProt accession. Data comes from BindingDB.

## When to use

- Find ligand binding affinities for a UniProt accession.
- Compare binders of one target.

## When not to use

- ChEMBL bioactivities. Use https://skills.duaer.com/activities.md.

## Call

`GET https://api.duaer.com/v1/data/bindingdb?words=P00533&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as P00533.
- `id` — Optional. Id such as P00533.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/bindingdb?words=P00533&limit=10` — BindingDB affinities for P00533.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`BindingDB`), `title`, `url`, and `summary`, plus:

- `uniprot`, `monomerId`, `affinityType`, `affinity`, `smiles` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/compounds.md — Duaer compounds
- https://skills.duaer.com/targets.md — Duaer targets
- https://skills.duaer.com/ligands.md — Duaer ligands

## 相关技能

- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索靶点关联](https://skills.duaer.com/zh/targets.md)
- [在 Duaer 里检索配体](https://skills.duaer.com/zh/ligands.md)
