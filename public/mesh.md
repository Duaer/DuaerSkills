> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mesh.md

---
name: duaer-mesh
description: >-
  Look up MeSH subject headings through Duaer (NLM MeSH). One successful search uses 1 Duaer credit.
---

# Duaer MeSH

Look up MeSH subject headings through Duaer (NLM MeSH). One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/mesh?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id` (or both; id wins).
- `words` — MeSH descriptor label.
- `id` — optional. MeSH unique id (D001241). Overrides words when set.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search keywords in Duaer](https://skills.duaer.com/keywords.md)
- [Search RxNorm in Duaer](https://skills.duaer.com/rxnorm.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search clinical trials in Duaer](https://skills.duaer.com/trials.md)
