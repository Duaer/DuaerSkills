> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/ensembl.md

---
name: duaer-ensembl
description: >-
  Look up Ensembl genes by symbol or id through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Ensembl

Look up Ensembl genes by symbol or id through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/ensembl?words=TP53&species=homo_sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` (gene symbol) or `id` (Ensembl gene id).
- `words` — gene symbol, such as TP53.
- `id` — optional. Ensembl id such as ENSG00000141510.
- `species` — optional. Default homo_sapiens. Used with words.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search variants in Duaer](https://skills.duaer.com/variants.md)
- [Search orthologs in Duaer](https://skills.duaer.com/orthologs.md)
