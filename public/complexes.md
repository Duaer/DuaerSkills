> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/complexes.md

---
name: duaer-complexes
description: >-
  Duaer complexes. Search protein complexes from Complex Portal.
  One successful search uses 1 Duaer credit.
---

# Duaer complexes

Search protein complexes from Complex Portal. Data comes from Complex Portal.

## When to use

- Find curated protein complexes for a protein or process.
- Filter complexes by organism.

## When not to use

- Pairwise interaction partners. Use https://skills.duaer.com/interactions.md.

## Call

`GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`words` is required.

- `words` — words in the complex name or description, or a Complex Portal id (`CPX-4305`).
- `organism` — Optional. Keep complexes whose organism contains this text, or an NCBI taxonomy id (`9606`).
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/complexes?words=insulin&organism=Homo%20sapiens&limit=10` — human complexes matching insulin.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Complex Portal`), `title`, `url`, and `summary`, plus:

- `complexAc`, `organism`, `description` — text.
- `predicted` — true or false.
- `interactors` — text.
- `interactorCount` — number.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related skills

- [Search interactions in Duaer](https://skills.duaer.com/interactions.md)
- [Search proteins in Duaer](https://skills.duaer.com/proteins.md)
- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
