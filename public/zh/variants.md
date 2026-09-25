> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/variants.md

---
name: duaer-variants
description: >-
  Search variants through Duaer (ClinVar / dbSNP via MyVariant.info). One successful search uses 1 Duaer credit.
---

# Duaer variants

Search variants through Duaer (ClinVar / dbSNP via MyVariant.info). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/variants?q=rs113488022&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q`, `rsid`, or `gene` first; use `id` only when you already have an HGVS genomic id from a result.
- `q` — words such as an rs id (`rs113488022`).
- `rsid` — optional. dbSNP rs id, such as `rs113488022`.
- `gene` — optional. Gene symbol with ClinVar annotations, such as `BRAF`. Look up symbols with https://skills.duaer.com/genes.md.
- `id` — optional. HGVS genomic id from a result (`variantId`), such as `chr7:g.140453136A>T`.
- `limit` — optional. From 1 to 20. Default 10.
- Reuse `variantId` in `id` for an exact lookup.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.
