> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/checklistbank.md

---
name: duaer-checklistbank
description: >-
  Search Catalogue of Life names in ChecklistBank through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer ChecklistBank

Search Catalogue of Life names in ChecklistBank through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/checklistbank?words=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as Homo sapiens.
- `id` — optional. Id such as 636X2.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search NCBI Taxonomy in Duaer](https://skills.duaer.com/ncbi-taxon.md)
- [Search GBIF in Duaer](https://skills.duaer.com/gbif.md)
