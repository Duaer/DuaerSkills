> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/interpro.md

---
name: duaer-interpro
description: >-
  Search protein domains in InterPro through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer InterPro

Search protein domains in InterPro through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/interpro?words=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search words or UniProt accession, such as kinase or P04637.
- `id` — optional. InterPro id such as IPR000023, or UniProt accession.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Pfam in Duaer](https://skills.duaer.com/pfam.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search domains in Duaer](https://skills.duaer.com/domains.md)
