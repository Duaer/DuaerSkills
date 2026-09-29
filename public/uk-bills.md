> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/uk-bills.md

---
name: duaer-uk-bills
description: >-
  Duaer UK Parliament bills. UK Parliament: bills by title words and house, newest update first, with the current stage and next sitting.
  One successful search uses 1 Duaer credit.
---

# Duaer UK Parliament bills

Duaer UK Parliament bills lists bills from the UK Parliament Bills API, most recently updated first. Each row says whether the bill is in progress, an Act, defeated, or withdrawn, with its current stage.

## When to use

- Follow energy bills moving through the House of Commons.
- See which bills the House of Lords is working on now.

## When not to use

- US bills. Use https://skills.duaer.com/congress-bills.md.
- Members of Parliament. Use https://skills.duaer.com/uk-mps.md.

## Call

`GET https://api.duaer.com/v1/data/uk-bills?words=energy`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `house`.

- `words` — Words in the bill title, such as energy.
- `house` — Optional. `commons` or `lords`: the house the bill is in now.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/uk-bills?words=energy` — recently updated bills about energy.
- `GET https://api.duaer.com/v1/data/uk-bills?house=lords` — bills now in the House of Lords.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `billId`, `status` — bill number and In progress, Act, Defeated, or Withdrawn.
- `stage`, `stageHouse`, `nextSitting` — current stage, its house, and the next sitting date.
- `currentHouse`, `originatingHouse`, `lastUpdate` — where the bill is, where it started, and the last change.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/uk-mps.md — Duaer UK Parliament members
- https://skills.duaer.com/congress-bills.md — Duaer US Congress bills

## Related skills

- [UK Parliament members in Duaer](https://skills.duaer.com/uk-mps.md)
- [US Congress bills in Duaer](https://skills.duaer.com/congress-bills.md)
