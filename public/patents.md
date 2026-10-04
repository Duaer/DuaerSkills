> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/patents.md

---
name: duaer-patents
description: >-
  Duaer patents. Search patents from Europe PMC.
  One successful search uses 1 Duaer credit.
---

# Duaer patents

Search patents from Europe PMC. Data comes from Europe PMC.

## When to use

- Find patents on a topic in a range of years.
- Filter patents by country.

## When not to use

- Published papers. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`words` is required.

- `words` — words in the patent title or abstract.
- `yearFrom` / `yearTo` — Optional. Publication year range (YYYY).
- `country` — Optional. Country code on the patent id (`US`, `EP`, `WO`, …).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/patents?words=insulin&yearFrom=2010&yearTo=2020&country=US&limit=10` — US insulin patents from 2010 to 2020.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Europe PMC`), `title`, `url`, and `summary`, plus:

- `patentId`, `country`, `typeCode`, `pubYear`, `applicationNumber`, `applicationDate`, `assignee`, `authors` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Search compounds in Duaer](https://skills.duaer.com/compounds.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
