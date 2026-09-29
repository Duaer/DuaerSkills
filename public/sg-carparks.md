> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/sg-carparks.md

---
name: duaer-sg-carparks
description: >-
  Duaer Singapore HDB car parks. data.gov.sg: HDB car parks by address with live car lots available, total lots, and free or night parking.
  One successful search uses 1 Duaer credit.
---

# Duaer Singapore HDB car parks

Duaer Singapore HDB car parks finds HDB car parks whose address has every word you give, then adds the live count of free car lots.

## When to use

- Find free lots at car parks along Tampines Avenue 9.
- Check which Ang Mo Kio car parks allow night parking.

## When not to use

- Available taxis. Use https://skills.duaer.com/sg-taxis.md.
- Parking outside HDB estates. Use https://skills.duaer.com/places-nearby.md.

## Call

`GET https://api.duaer.com/v1/data/sg-carparks?address=Tampines%20Avenue%209`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `address`.

- `address` — Words in the car park address, such as Tampines Avenue 9. Every word must match; Ave, St, Rd, Dr, Cres, Lor, and Ctrl are spelled out.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/sg-carparks?address=Tampines%20Avenue%209` — car parks on Tampines Avenue 9.
- `GET https://api.duaer.com/v1/data/sg-carparks?address=Ang%20Mo%20Kio%20Ave%203` — car parks on Ang Mo Kio Avenue 3.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `carparkNumber`, `address` — HDB car park code and address.
- `lotsAvailable`, `totalLots`, `updatedAt` — live car lots.
- `carparkType`, `parkingSystem`, `shortTermParking`, `freeParking`, `nightParking`, `gantryHeight` — car park details.

A car park without a live feed keeps its details but has no lot counts.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/sg-taxis.md — Duaer Singapore taxis nearby
- https://skills.duaer.com/places-nearby.md — Duaer Places nearby

## Related skills

- [Singapore taxis nearby in Duaer](https://skills.duaer.com/sg-taxis.md)
- [Places nearby in Duaer](https://skills.duaer.com/places-nearby.md)
