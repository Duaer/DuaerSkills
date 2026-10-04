> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/rxterms.md

---
name: duaer-rxterms
description: >-
  Duaer RxTerms. Search drug terms in RxTerms.
  One successful search uses 1 Duaer credit.
---

# Duaer RxTerms

Search drug terms in RxTerms. Data comes from RxTerms.

## When to use

- Find drug names and strengths in RxTerms.
- Pick a prescribable drug term.

## When not to use

- RxNorm concepts. Use https://skills.duaer.com/rxnorm.md.

## Call

`GET https://api.duaer.com/v1/data/rxterms?words=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — search words, such as aspirin.
- `id` — Optional. Id such as 1191.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/rxterms?words=aspirin&limit=10` — RxTerms entries for aspirin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`RxTerms`), `title`, `url`, and `summary`, plus:

- `rxcui` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search RxNorm in Duaer](https://skills.duaer.com/rxnorm.md)
