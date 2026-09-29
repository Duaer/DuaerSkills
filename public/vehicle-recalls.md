> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/vehicle-recalls.md

---
name: duaer-vehicle-recalls
description: >-
  Duaer Vehicle recalls. US NHTSA: safety recalls for a vehicle make, model, and model year, with the defect, risk, and remedy.
  One successful search uses 1 Duaer credit.
---

# Duaer Vehicle recalls

Duaer Vehicle recalls lists NHTSA safety recall campaigns for one make, model, and model year, newest first, with park-it warnings.

## When to use

- Check a used car for open recall campaigns.
- List airbag recalls for a fleet model.

## When not to use

- Decoding a VIN. Use https://skills.duaer.com/vin-decode.md.
- Drug or device safety. Use https://skills.duaer.com/cdc-data.md.

## Call

`GET https://api.duaer.com/v1/data/vehicle-recalls?make=Honda&model=Accord&year=2018`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `make`, `model`, and `year`.

- `make` — Vehicle make such as Honda.
- `model` — Model such as Accord.
- `year` — Four-digit model year.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/vehicle-recalls?make=Honda&model=Accord&year=2018` — recalls for the 2018 Honda Accord.
- `GET https://api.duaer.com/v1/data/vehicle-recalls?make=Tesla&model=Model%203&year=2021` — recalls for the 2021 Tesla Model 3.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `campaign`, `reportDate`, `manufacturer` — NHTSA campaign and date.
- `component` — affected system, such as AIR BAGS.
- `description`, `consequence`, `remedy` — defect, risk, and fix.
- `parkIt`, `parkOutside` — warnings not to drive or to park outdoors.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/vin-decode.md — Duaer VIN decoder
- https://skills.duaer.com/places-nearby.md — Duaer Places nearby

## Related skills

- [VIN decoder in Duaer](https://skills.duaer.com/vin-decode.md)
- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
