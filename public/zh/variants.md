> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/variants.md

---
name: duaer-variants
description: >-
  Duaer variants. ClinVar and dbSNP variants from MyVariant.info by rs id, gene symbol, words, or HGVS id, with clinical significance and alleles.
  One successful search uses 1 Duaer credit.
---

# Duaer variants

Duaer variants searches MyVariant.info, which merges ClinVar and dbSNP. It uses one search field: `id` first, then `rsid`, then `gene`, then `q`.

## When to use

- Check the clinical significance of an rs id.
- List ClinVar variants in a gene.
- Get the reference and alternate allele of a variant.

## When not to use

- Population allele frequencies. Use https://skills.duaer.com/gnomad.md.
- Variant effect prediction. Use https://skills.duaer.com/ensembl-vep.md.
- Trait associations from GWAS. Use https://skills.duaer.com/gwas.md.

## Call

`GET https://api.duaer.com/v1/data/variants?rsid=rs113488022`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `q`, `rsid`, `gene`, or `id`. When you send more than one, Duaer uses `id`, else `rsid`, else `gene`, else `q`.

- `q` — Words, such as an rs id.
- `rsid` — dbSNP rs id, such as `rs113488022`. A number without `rs` also works.
- `gene` — Gene symbol with ClinVar records, such as `BRAF`. Look up symbols with https://skills.duaer.com/genes.md.
- `id` — HGVS genomic id, such as `chr7:g.140453136A>T`. Reuse `variantId` from a result for an exact lookup.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/variants?rsid=rs113488022` — BRAF V600E by rs id.
- `GET https://api.duaer.com/v1/data/variants?gene=BRCA1&limit=20` — ClinVar variants in BRCA1.
- `GET https://api.duaer.com/v1/data/variants?id=chr7:g.140453136A%3ET` — one variant by HGVS id.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MyVariant`), `title`, `url`, and `summary`, plus:

- `variantId` — HGVS genomic id.
- `rsid` — dbSNP rs id.
- `gene` — gene symbol.
- `hgvsProtein` — protein change, such as `p.Val600Glu`.
- `clinicalSignificance` — ClinVar significance, such as `Pathogenic`.
- `chrom`, `ref`, `alt` — chromosome and alleles.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/genes.md — Duaer genes
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/proteins.md — Duaer proteins
- https://skills.duaer.com/life-research-brief.md — Digital employee: Life research brief

## 相关技能

- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [Duaer 生命科学文献简报员工](https://skills.duaer.com/zh/life-research-brief.md)
