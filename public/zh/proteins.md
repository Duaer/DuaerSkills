> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/proteins.md

---
name: duaer-proteins
description: >-
  Duaer proteins. UniProt proteins by gene, name, organism, accession, review status, length, disease, keyword, location, function, GO term, pathway, domain, or taxonomy id.
  One successful search uses 1 Duaer credit.
---

# Duaer proteins

Duaer proteins searches UniProtKB. Fields combine, so each one narrows the search.

## When to use

- Get the reviewed human protein for a gene symbol.
- List proteins linked to a disease, a pathway, or a domain.
- Find proteins in a cell location with a given function.

## When not to use

- Gene ids, aliases, and map locations. Use https://skills.duaer.com/genes.md.
- Predicted 3D models. Use https://skills.duaer.com/alphafold.md.
- Experimental structures. Use https://skills.duaer.com/structures.md.

## Call

`GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one search field.

- `q` — Optional. Words in the protein record.
- `gene` — Optional. Gene symbol, such as `INS`. Look up symbols with https://skills.duaer.com/genes.md.
- `name` — Optional. Protein name.
- `organism` — Optional. Organism name, such as `Homo sapiens`. Look up names with https://skills.duaer.com/organisms.md.
- `accession` — Optional. UniProt accession, such as `P01308`.
- `reviewed` — Optional. `yes` for Swiss-Prot, `no` for TrEMBL.
- `lengthFrom`, `lengthTo` — Optional. Sequence length. `0` means no bound.
- `disease` — Optional. Disease name. Look up names with https://skills.duaer.com/diseases.md.
- `keyword` — Optional. UniProt keyword. Look up keywords with https://skills.duaer.com/keywords.md.
- `location` — Optional. Subcellular location. Look up names with https://skills.duaer.com/locations.md.
- `function` — Optional. Words in the function text.
- `go` — Optional. Gene Ontology term. Look up terms with https://skills.duaer.com/gene-ontology.md.
- `pathway` — Optional. Reactome pathway id or words. Look up pathways with https://skills.duaer.com/pathways.md.
- `domain` — Optional. InterPro domain id or words. Look up domains with https://skills.duaer.com/domains.md.
- `taxonomyId` — Optional. NCBI taxonomy id, such as `9606`. Look up ids with https://skills.duaer.com/organisms.md.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/proteins?gene=INS&organism=Homo%20sapiens&reviewed=yes` — reviewed human insulin.
- `GET https://api.duaer.com/v1/data/proteins?disease=Alzheimer%20disease&taxonomyId=9606&reviewed=yes` — reviewed human proteins linked to Alzheimer disease.
- `GET https://api.duaer.com/v1/data/proteins?accession=P04637` — one protein by accession.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`UniProt`), `title`, `url`, and `summary`, plus:

- `accession` — UniProt accession.
- `gene` — primary gene symbol.
- `organism` — scientific name.
- `length` — sequence length.
- `reviewed` — true for Swiss-Prot entries.
- `disease`, `location` — linked diseases and subcellular locations.

For interaction partners of a gene or protein, use https://skills.duaer.com/interactions.md.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/structures.md — Duaer structures
- https://skills.duaer.com/pathways.md — Duaer pathways
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/interactions.md — Duaer interactions
- https://skills.duaer.com/atlas.md — Duaer tissue atlas
- https://skills.duaer.com/alphafold.md — Duaer AlphaFold
- https://skills.duaer.com/complexes.md — Duaer complexes

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索互作](https://skills.duaer.com/zh/interactions.md)
- [在 Duaer 里检索组织图谱](https://skills.duaer.com/zh/atlas.md)
- [在 Duaer 里查询 AlphaFold 预测结构](https://skills.duaer.com/zh/alphafold.md)
- [在 Duaer 里检索蛋白复合物](https://skills.duaer.com/zh/complexes.md)
