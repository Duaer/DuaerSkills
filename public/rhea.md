> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rhea.md

---
name: duaer-rhea
description: >-
  Search biochemical reactions in Rhea through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Rhea

Search biochemical reactions in Rhea through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/rhea?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as kinase.
- `id` — optional. Rhea id such as 15465.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search reactions in Duaer](https://skills.duaer.com/reactions.md)
- [Search BiGG in Duaer](https://skills.duaer.com/bigg.md)
- [Search KEGG in Duaer](https://skills.duaer.com/kegg.md)
