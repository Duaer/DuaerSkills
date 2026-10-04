> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cell-lines.md

---
name: duaer-cell-lines
description: >-
  Duaer cell lines. Search cell lines from Cellosaurus.
  One successful search uses 1 Duaer credit.
---

# Duaer cell lines

Search cell lines from Cellosaurus. Data comes from Cellosaurus.

## When to use

- Find a cell line by name, species, or category.
- Check the Cellosaurus id of a cell line.

## When not to use

- Cell line ontology terms. Use https://skills.duaer.com/clo.md.

## Call

`GET https://api.duaer.com/v1/data/cell-lines?words=HeLa&species=Homo%20sapiens&category=Cancer&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

`words` is required.

- `words` — cell line name, synonym, or Cellosaurus accession (`CVCL_0030`).
- `species` — Optional. Keep lines whose species contains this text.
- `category` — Optional. Keep lines whose category contains this text.
- `limit` — Optional. From 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cell-lines?words=HeLa&species=Homo%20sapiens&category=Cancer&limit=10` — human cancer cell lines matching HeLa.

## Result

The response is `{ "items": [...] }`. Each item has `source` (`Cellosaurus`), `title`, `url`, and `summary`, plus:

- `accession`, `synonyms`, `species`, `category`, `sex`, `age`, `disease` — text.

Fields without a value are empty strings.

## Credits

A successful search uses 1 credit, even when it finds nothing.
Wrong input or a missing search field returns 400 with a message and uses 0.
A failed upstream search returns 503 and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/organisms.md — Duaer organisms
- https://skills.duaer.com/diseases.md — Duaer diseases
- https://skills.duaer.com/assays.md — Duaer assays

## Related skills

- [Search organisms in Duaer](https://skills.duaer.com/organisms.md)
- [Search diseases in Duaer](https://skills.duaer.com/diseases.md)
- [Search assays in Duaer](https://skills.duaer.com/assays.md)
