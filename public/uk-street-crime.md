> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/uk-street-crime.md

---
name: duaer-uk-street-crime
description: >-
  Duaer UK street crime. data.police.uk: street-level crimes within a mile of a point in England, Wales, or Northern Ireland, by category and month.
  One successful search uses 1 Duaer credit.
---

# Duaer UK street crime

Duaer UK street crime reads police-reported street-level crimes within about a mile of a point. Without a category it counts each category; with one it lists the crimes with street and outcome.

## When to use

- Compare crime categories around an address in London.
- List burglaries near a Birmingham street last month.

## When not to use

- US crime rates. Use https://skills.duaer.com/fbi-crime.md.
- Finding coordinates for a postcode. Use https://skills.duaer.com/postal-codes.md.

## Call

`GET https://api.duaer.com/v1/data/uk-street-crime?latitude=51.5074&longitude=-0.1278`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `latitude` and `longitude`.

- `latitude`, `longitude` — A point in England, Wales, or Northern Ireland.
- `month` — Optional. YYYY-MM. Default the latest published month.
- `category` — Optional. `anti-social-behaviour`, `bicycle-theft`, `burglary`, `criminal-damage-arson`, `drugs`, `other-theft`, `possession-of-weapons`, `public-order`, `robbery`, `shoplifting`, `theft-from-the-person`, `vehicle-crime`, `violent-crime`, or `other-crime`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/uk-street-crime?latitude=51.5074&longitude=-0.1278` — crime counts by category around Charing Cross.
- `GET https://api.duaer.com/v1/data/uk-street-crime?latitude=52.4862&longitude=-1.8904&category=burglary` — burglaries near central Birmingham.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `category`, `categoryName`, `count`, `total`, `month` — without a category: one row per category.
- `street`, `outcome`, `latitude`, `longitude`, `crimeId` — with a category: one row per crime.

Police publish a month about two months later. Some forces do not publish street-level data, so an area can return no rows.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/fbi-crime.md — Duaer FBI crime statistics
- https://skills.duaer.com/postal-codes.md — Duaer Postal codes

## Related skills

- [FBI crime statistics in Duaer](https://skills.duaer.com/fbi-crime.md)
- [Postal codes in Duaer](https://skills.duaer.com/postal-codes.md)
