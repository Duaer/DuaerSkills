> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/domains.md

---
name: duaer-domains
description: >-
  Duaer domains. Search InterPro domains. Use the domainId with proteins.domain.
  One successful search uses 1 Duaer credit.
---

# Duaer domains

Search InterPro domains. Use the domainId with proteins.domain. Data comes from InterPro.

## When to use

- Get an InterPro domain id before searching proteins.
- Find domain families for a protein function.

## When not to use

- Pfam families only. Use https://skills.duaer.com/pfam.md.

## Call

`GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `q`, `name`, or `id`. An InterPro id in `id` is an exact lookup. Otherwise Duaer searches `q`, else `name`, else the `id` text. Search with `q` first; use `id` only when you already have an InterPro id from a result.

- `q` — words in the domain name or description.
- `id` — Optional. InterPro id from a result (`domainId`), such as `IPR000719`.
- `name` — Optional. Domain name.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/domains?q=kinase&limit=10` — InterPro domains matching kinase.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`InterPro`), `title`, `url`, and `summary`, plus:

- `domainId`, `type`, `shortName`, `goIds`, `memberDatabases` — text.

Use `domainId` as `domain` when searching proteins. Reuse `domainId` in `id` for an exact lookup.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search Gene Ontology in Duaer](https://skills.duaer.com/gene-ontology.md)
- [Search pathways in Duaer](https://skills.duaer.com/pathways.md)
