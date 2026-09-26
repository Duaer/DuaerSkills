> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gdc.md

---
name: duaer-gdc
description: >-
  Search NCI GDC cancer projects through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer GDC

Search NCI GDC cancer projects through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/gdc?words=breast&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — project words, such as breast.
- `id` — optional. Project id such as TCGA-BRCA.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search cBioPortal in Duaer](https://skills.duaer.com/cbioportal.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
