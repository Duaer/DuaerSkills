> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/impc.md

---
name: duaer-impc
description: >-
  Duaer IMPC mouse phenotypes. Significant phenotypes of knockout mice from the International Mouse Phenotyping Consortium: phenotype term, zygosity, sex, p-value, effect size, and test.
  One successful search uses 1 Duaer credit.
---

# Duaer IMPC mouse phenotypes

Duaer IMPC mouse phenotypes returns statistically significant genotype–phenotype calls from IMPC, strongest p-values first. It shows what happens in a mouse when a gene is knocked out.

## When to use

- Check what a knockout of a gene does in mice before a target study.
- Find genes whose knockout causes a phenotype, such as abnormal eye morphology.

## When not to use

- Curated mouse gene records and alleles. Use https://skills.duaer.com/mgi.md.
- Human disease phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

`GET https://api.duaer.com/v1/data/impc?gene=Pax6`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `gene` or `phenotype`.

- `gene` — Mouse gene symbol, such as Pax6.
- `phenotype` — Optional. Mammalian Phenotype term name, such as abnormal eye morphology.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/impc?gene=Pax6` — phenotypes of Pax6 mutants.
- `GET https://api.duaer.com/v1/data/impc?phenotype=abnormal%20eye%20morphology&limit=20` — genes with that phenotype.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `gene`, `mgiId` — mouse gene symbol and MGI id.
- `phenotype`, `mpId`, `topPhenotype` — Mammalian Phenotype term and its top-level class.
- `zygosity`, `sex`, `lifeStage` — which mice showed it.
- `pValue`, `effectSize` — statistics of the call.
- `allele`, `procedure`, `parameter`, `center` — allele and test details.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/mgi.md
- https://skills.duaer.com/mp.md
- https://skills.duaer.com/phenotypes.md

## Related skills

- [Search MGI in Duaer](https://skills.duaer.com/mgi.md)
- [Search MP in Duaer](https://skills.duaer.com/mp.md)
- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
