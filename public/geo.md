> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/geo.md

---
name: duaer-geo
description: >-
  Search NCBI GEO series and datasets through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer GEO

Search NCBI GEO series and datasets through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/geo?words=insulin&organism=Homo%20sapiens&entryType=gse&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- `words` is required.
- `words` — words in the GEO record, or an accession such as `GSE10072`.
- `organism` — optional. Scientific name (`Homo sapiens`). Look up names with https://skills.duaer.com/organisms.md.
- `entryType` — optional. `gse` (default), `gds`, `gpl`, `gsm`, or `any`.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
