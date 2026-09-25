> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/gwas.md

---
name: duaer-gwas
description: >-
  Search GWAS Catalog associations through Duaer (REST API v2). One successful search uses 1 Duaer credit.
---

# Duaer GWAS

Search GWAS Catalog associations through Duaer (REST API v2). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/gwas?words=TCF7L2&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words`, `gene`, `rsId`, or `trait` (or combine).
- `words` — gene symbol or rs id (`rs…`).
- `gene` — optional. Mapped gene symbol.
- `rsId` — optional. Variant rs id (`rs7903146`).
- `trait` — optional. EFO trait text.
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
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search adverse events in Duaer](https://skills.duaer.com/adverse-events.md)
