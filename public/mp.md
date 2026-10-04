> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/mp.md

---
name: duaer-mp
description: >-
  Duaer MP. Search mammalian phenotypes from MP.
  One successful search uses 1 Duaer credit.
---

# Duaer MP

Search mammalian phenotypes from MP. Data comes from MP.

## When to use

- Find mammalian phenotype terms and MP ids.
- Describe mouse model phenotypes.

## When not to use

- Human phenotypes. Use https://skills.duaer.com/phenotypes.md.

## Call

`GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `id`. If you send both, Duaer uses `id`.

- `words` — phenotype words, such as obesity.
- `id` — Optional. MP id such as MP:0001261.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/mp?words=obesity&limit=10` — MP terms matching obesity.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`MP`), `title`, `url`, and `summary`, plus:

- `mpId`, `description`, `synonyms`, `iri` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search phenotypes in Duaer](https://skills.duaer.com/phenotypes.md)
- [Search Monarch in Duaer](https://skills.duaer.com/monarch.md)
- [Search GWAS associations in Duaer](https://skills.duaer.com/gwas.md)
