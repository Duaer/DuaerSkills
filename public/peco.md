> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/peco.md

---
name: duaer-peco
description: >-
  Duaer PECO. Search Plant Experimental Conditions Ontology terms in OLS.
  One successful search uses 1 Duaer credit.
---

# Duaer PECO

Search Plant Experimental Conditions Ontology terms in OLS. Data comes from PECO.

## When to use

- Find plant experimental condition terms and PECO ids.
- Look up one PECO id.

## When not to use

- Plant traits. Use https://skills.duaer.com/to.md.

## Call

`GET https://api.duaer.com/v1/data/peco?words=drought&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as drought.
- `id` — Optional. Id such as PECO:0007008.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/peco?words=drought&limit=10` — PECO terms matching drought.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`PECO`), `title`, `url`, and `summary`, plus:

- `pecoId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search ENVO in Duaer](https://skills.duaer.com/envo.md)
- [Search PO in Duaer](https://skills.duaer.com/po.md)
- [Search TO in Duaer](https://skills.duaer.com/to.md)
