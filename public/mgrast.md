> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mgrast.md

---
name: duaer-mgrast
description: >-
  Duaer MG-RAST. Search MG-RAST metagenome projects.
  One successful search uses 1 Duaer credit.
---

# Duaer MG-RAST

Search MG-RAST metagenome projects. Data comes from MG-RAST.

## When to use

- Find MG-RAST metagenome projects.
- Look up one project id.

## When not to use

- MGnify studies. Use https://skills.duaer.com/mgnify.md.

## Call

`GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as soil.
- `id` — Optional. Id such as mgp128.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mgrast?words=soil&limit=10` — MG-RAST projects matching soil.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MG-RAST`), `title`, `url`, and `summary`, plus:

- `projectId` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search expression in Duaer](https://skills.duaer.com/expression.md)
