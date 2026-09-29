> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/national-parks.md

---
name: duaer-national-parks
description: >-
  Duaer US national parks. National Park Service: parks, monuments, and historic sites with location, fees, and activities.
  One successful search uses 1 Duaer credit.
---

# Duaer US national parks

Duaer US national parks searches National Park Service sites by words or state, with location, entrance fee, activities, and an image. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Plan a trip to parks in Utah.
- Show the entrance fee and activities of Yosemite.

## When not to use

- Weather at a park. Use https://skills.duaer.com/weather.md.
- Places nearby on a map. Use https://skills.duaer.com/places-nearby.md.

## Call

`GET https://api.duaer.com/v1/data/national-parks?words=yosemite`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `state`.

- `words` — Optional. Words such as yosemite or canyon.
- `state` — Optional. Two-letter state code such as UT.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/national-parks?words=yosemite` — sites matching Yosemite.
- `GET https://api.duaer.com/v1/data/national-parks?state=UT` — National Park Service sites in Utah.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `parkCode`, `name`, `designation`, `states` — site and type.
- `latitude`, `longitude`, `description` — location and description.
- `entranceFeeUsd`, `entranceFee`, `activities`, `imageUrl`, `imageAlt` — first fee, up to eight activities, and an image.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/weather.md — Duaer Weather forecast
- https://skills.duaer.com/places-nearby.md — Duaer Places nearby

## 相关技能

- [在 Duaer 里查天气预报](https://skills.duaer.com/zh/weather.md)
- [在 Duaer 里查附近地点](https://skills.duaer.com/zh/places-nearby.md)
