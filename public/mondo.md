> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mondo.md

---
name: duaer-mondo
description: >-
  Duaer Mondo. Search diseases from Mondo.
  One successful search uses 1 Duaer credit.
---

# Duaer Mondo

Search diseases from Mondo. Data comes from Mondo.

## When to use

- Find diseases and Mondo ids.
- Map disease names across ontologies.

## When not to use

- Rare disease codes. Use https://skills.duaer.com/orphanet.md.

## Call

`GET https://api.duaer.com/v1/data/mondo?words=diabetes&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — disease words, such as diabetes.
- `id` — Optional. Mondo id such as MONDO:0005148.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mondo?words=diabetes&limit=10` — Mondo diseases matching diabetes.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Mondo`), `title`, `url`, and `summary`, plus:

- `mondoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search Orphanet in Duaer](https://skills.duaer.com/orphanet.md)
- [Search Monarch in Duaer](https://skills.duaer.com/monarch.md)
