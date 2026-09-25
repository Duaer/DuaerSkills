> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/uberon.md

---
name: duaer-uberon
description: >-
  Search anatomy terms via Uberon through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Uberon

Search anatomy terms via Uberon through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/uberon?words=liver&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — anatomy words, such as liver.
- `id` — optional. Uberon id such as UBERON:0002107.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search locations in Duaer](https://skills.duaer.com/locations.md)
- [Search tissue atlas in Duaer](https://skills.duaer.com/atlas.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
