> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/amap-poi.md

---
name: duaer-amap-poi
description: >-
  Duaer Amap places in China. Amap: shops, restaurants, and other places in China by keyword and city, with address and phone.
  One successful search uses 1 Duaer credit.
---

# Duaer Amap places in China

Duaer Amap places in China searches Amap (Gaode) for places in mainland China by keyword, optionally inside one city. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find coffee shops in Shanghai.
- Get the address and phone of a store in China.

## When not to use

- Places outside China. Use https://skills.duaer.com/places-nearby.md.
- Coordinates of a full address. Use https://skills.duaer.com/amap-geocode.md.

## Call

`GET https://api.duaer.com/v1/data/amap-poi?words=Starbucks&city=shanghai`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Place words in Chinese or English. URL-encode Chinese text.
- `city` — Optional. City name in Chinese or pinyin, or adcode, such as shanghai or 310000.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/amap-poi?words=Starbucks&city=shanghai` — Starbucks stores in Shanghai.
- `GET https://api.duaer.com/v1/data/amap-poi?words=%E5%92%96%E5%95%A1&city=330100` — coffee shops in Hangzhou.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `poiId`, `name`, `category` — Amap place id, name, and category path.
- `address`, `province`, `city`, `district`, `phone` — address and phone.
- `longitude`, `latitude` — GCJ-02 coordinates used by Amap.

Amap coordinates use the GCJ-02 system used on maps in China.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/amap-geocode.md — Duaer Amap geocoding in China
- https://skills.duaer.com/amap-route.md — Duaer Amap routes in China

## 相关技能

- [在 Duaer 里查高德地理编码](https://skills.duaer.com/zh/amap-geocode.md)
- [在 Duaer 里查高德路线规划](https://skills.duaer.com/zh/amap-route.md)
