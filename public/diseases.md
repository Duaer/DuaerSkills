> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/diseases.md

---
name: duaer-diseases
description: >-
  Search disease names through Duaer. Use the formal name with proteins.disease. One successful search uses 1 Duaer credit.
---

# Duaer diseases

Search disease names through Duaer. Use the formal name with proteins.disease. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/diseases?q=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- At least one search field is required. Fields combine.
- Search with `q` first; use `id` or `acronym` only when you already have them from a result.
- `q` — words in the disease name or definition.
- `id` — optional. UniProt disease id from a result (`diseaseId`), such as `DI-02060`.
- `name` — optional. Disease name.
- `acronym` — optional. Disease acronym from a result, such as `T2D`.
- `limit` — optional. From 1 to 20. Default 10.
- Use `title` as `disease` when searching proteins. Reuse `diseaseId` in `id` for an exact lookup.

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
- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
- [Search indications in Duaer](https://skills.duaer.com/indications.md)
- [Search cell lines in Duaer](https://skills.duaer.com/cell-lines.md)
