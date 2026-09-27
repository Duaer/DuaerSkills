> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/signor.md

---
name: duaer-signor
description: >-
  Duaer SIGNOR signaling. Causal signaling relations from SIGNOR: who activates, inhibits, or phosphorylates a protein, with mechanism, modified residue, PubMed evidence, and score.
  One successful search uses 1 Duaer credit.
---

# Duaer SIGNOR signaling

Duaer SIGNOR signaling returns curated causal relations (regulator → effect → target) for a protein from SIGNOR. Duaer resolves a gene symbol to its reviewed UniProt accession first, and orders rows by SIGNOR score.

## When to use

- Explain a pathway step: which kinase phosphorylates a protein, and at which residue.
- List upstream regulators and downstream targets of a gene with evidence.

## When not to use

- Physical binding without direction. Use https://skills.duaer.com/interactions.md or https://skills.duaer.com/intact.md.
- Whole pathway diagrams. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/signor?gene=TP53&limit=20`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `gene`.

- `gene` — Gene symbol or UniProt accession, such as TP53 or P04637.
- `organism` — Optional. human, mouse, or rat. Default human.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/signor?gene=TP53&limit=20` — regulators and targets of p53.
- `GET https://api.duaer.com/v1/data/signor?gene=P04637` — the same by UniProt accession.
- `GET https://api.duaer.com/v1/data/signor?gene=Trp53&organism=mouse` — mouse relations.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `signorId` — SIGNOR relation id.
- `regulator`, `regulatorType`, `regulatorId` — the acting entity.
- `target`, `targetType`, `targetId` — the affected entity.
- `effect`, `mechanism`, `residue` — such as up-regulates activity, phosphorylation, Ser15.
- `pmid`, `evidence` — PubMed id and the curated sentence.
- `score` — SIGNOR confidence from 0 to 1.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/interactions.md
- https://skills.duaer.com/pathways.md
- https://skills.duaer.com/omnipath.md

## Related skills

- [Search interactions in Duaer](https://skills.duaer.com/interactions.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search Omnipath in Duaer](https://skills.duaer.com/omnipath.md)
