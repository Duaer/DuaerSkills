> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/reactions.md

---
name: duaer-reactions
description: >-
  Search biochemical reactions through Duaer via Rhea. One successful search uses 1 Duaer credit.
---

# Duaer reactions

Search biochemical reactions through Duaer via Rhea. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/reactions?words=kinase&ec=2.7.10.1&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `ec` (or both).
- `words` — words in the equation, or a Rhea id (`RHEA:10596`).
- `ec` — optional. Enzyme Commission number (`2.7.10.1` or `ec:2.7.10.1`). Alone is enough.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
