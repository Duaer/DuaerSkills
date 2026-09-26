> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/dbsnp.md

---
name: duaer-dbsnp
description: >-
  Search variant ids in dbSNP through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer dbSNP

Search variant ids in dbSNP through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/dbsnp?words=BRCA1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — gene words, such as BRCA1.
- `id` — optional. rs id such as rs56116432.
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
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
