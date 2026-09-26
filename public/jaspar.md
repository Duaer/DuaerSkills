> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/jaspar.md

---
name: duaer-jaspar
description: >-
  Search TF binding motifs in JASPAR through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer JASPAR

Search TF binding motifs in JASPAR through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/jaspar?words=TP53&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — TF words, such as TP53.
- `id` — optional. Matrix id such as MA0106.1.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search ENCODE in Duaer](https://skills.duaer.com/encode.md)
- [Search genes in Duaer](https://skills.duaer.com/genes.md)
- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
