> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mgrast.md

---
name: duaer-mgrast
description: >-
  Search MG-RAST metagenome projects through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer MG-RAST

Search MG-RAST metagenome projects through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as soil.
- `id` — optional. Id such as mgp128.
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
