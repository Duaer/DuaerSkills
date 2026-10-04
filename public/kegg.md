> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/kegg.md

---
name: duaer-kegg
description: >-
  Duaer KEGG. Search KEGG pathways, diseases, or compounds.
  One successful search uses 1 Duaer credit.
---

# Duaer KEGG

Search KEGG pathways, diseases, or compounds. Data comes from KEGG.

## When to use

- Find KEGG pathways, diseases, or compounds by words.
- Look up one KEGG entry by id.

## When not to use

- Reactome pathways. Use https://skills.duaer.com/pathways.md.

## Call

`GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search text, such as apoptosis.
- `id` — Optional. KEGG id such as map04210, H00409, or C01405.
- `db` — Optional. pathway (default), disease, or compound. Used with words.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10` — KEGG pathways matching apoptosis.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`KEGG`), `title`, `url`, and `summary`, plus:

- `keggId`, `name`, `database`, `description`, `keggClass` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
