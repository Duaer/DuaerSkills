> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gnomad.md

---
name: duaer-gnomad
description: >-
  Look up a gene symbol in gnomAD (GRCh38) through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer gnomAD

Look up a gene symbol in gnomAD (GRCh38) through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/gnomad?words=PCSK9&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as PCSK9.
- `id` — optional. Id such as BRCA1.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search ClinVar in Duaer](https://skills.duaer.com/clinvar.md)
- [Search dbSNP in Duaer](https://skills.duaer.com/dbsnp.md)
