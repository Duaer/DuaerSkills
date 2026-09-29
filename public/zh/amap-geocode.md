> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/amap-geocode.md

---
name: duaer-amap-geocode
description: >-
  Duaer Amap geocoding in China. Amap: longitude, latitude, and adcode for a Chinese address.
  One successful search uses 1 Duaer credit.
---

# Duaer Amap geocoding in China

Duaer Amap geocoding in China turns a mainland China address into Amap coordinates and its administrative codes. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Get coordinates for a delivery address in Beijing.
- Find the adcode of a district.

## When not to use

- Places worldwide. Use https://skills.duaer.com/geocoding.md.
- Shops by keyword. Use https://skills.duaer.com/amap-poi.md.

## Call

`GET https://api.duaer.com/v1/data/amap-geocode?address=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%9C%9D%E9%98%B3%E5%8C%BA%E9%98%9C%E9%80%9A%E4%B8%9C%E5%A4%A7%E8%A1%976%E5%8F%B7`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `address`.

- `address` — Address in China, URL-encoded.
- `city` — Optional. City name or adcode to narrow the address.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/amap-geocode?address=%E5%8C%97%E4%BA%AC%E5%B8%82%E6%9C%9D%E9%98%B3%E5%8C%BA%E9%98%9C%E9%80%9A%E4%B8%9C%E5%A4%A7%E8%A1%976%E5%8F%B7` — a street address in Chaoyang, Beijing.
- `GET https://api.duaer.com/v1/data/amap-geocode?address=%E8%A5%BF%E6%B9%96&city=hangzhou` — West Lake in Hangzhou.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `formattedAddress`, `province`, `city`, `district` — address as Amap understands it.
- `adcode`, `level` — administrative code and match level.
- `longitude`, `latitude` — GCJ-02 coordinates.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/amap-poi.md — Duaer Amap places in China
- https://skills.duaer.com/amap-weather.md — Duaer Amap weather in China

## 相关技能

- [在 Duaer 里查高德地点搜索](https://skills.duaer.com/zh/amap-poi.md)
- [在 Duaer 里查高德天气](https://skills.duaer.com/zh/amap-weather.md)
