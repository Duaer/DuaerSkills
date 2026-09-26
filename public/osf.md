> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/osf.md

---
name: duaer-osf
description: >-
  Search Open Science Framework project nodes through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer OSF

Search Open Science Framework project nodes through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/osf?words=crispr&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words, such as crispr.
- `id` — optional. Id such as bdwxr.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Zenodo in Duaer](https://skills.duaer.com/zenodo.md)
- [Search Dryad in Duaer](https://skills.duaer.com/dryad.md)
