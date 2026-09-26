> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cellosaurus.md

---
name: duaer-cellosaurus
description: >-
  Search the Cellosaurus cell line encyclopedia through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Cellosaurus

Search the Cellosaurus cell line encyclopedia through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/cellosaurus?words=HeLa&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as HeLa.
- `id` — optional. Id such as CVCL_0030.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search cell lines in Duaer](https://skills.duaer.com/cell-lines.md)
- [Search CLO in Duaer](https://skills.duaer.com/clo.md)
