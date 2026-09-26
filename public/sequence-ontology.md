> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sequence-ontology.md

---
name: duaer-sequence-ontology
description: >-
  Search sequence feature terms via Sequence Ontology through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer Sequence Ontology

Search sequence feature terms via Sequence Ontology through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/sequence-ontology?words=exon&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — feature words, such as exon.
- `id` — optional. SO id such as SO:0000147.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search Ensembl in Duaer](https://skills.duaer.com/ensembl.md)
- [Search RNAcentral in Duaer](https://skills.duaer.com/rnacentral.md)
