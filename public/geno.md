> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/geno.md

---
name: duaer-geno
description: >-
  Search Genotype Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer GENO

Search Genotype Ontology terms in OLS through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/geno?words=genotype&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as genotype.
- `id` — optional. Id such as GENO:0000000.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Sequence Ontology in Duaer](https://skills.duaer.com/sequence-ontology.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
