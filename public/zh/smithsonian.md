> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/smithsonian.md

---
name: duaer-smithsonian
description: >-
  Duaer Smithsonian collections. Smithsonian Open Access: objects, specimens, and archives from Smithsonian museums, with images and 3D models.
  One successful search uses 1 Duaer credit.
---

# Duaer Smithsonian collections

Duaer Smithsonian collections searches Smithsonian Open Access records across its museums, libraries, and archives. Keep only objects with images when you need pictures. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find Apollo 11 objects at the Air and Space Museum.
- Collect CC0 images of historic quilts.

## When not to use

- The Met collection. Use https://skills.duaer.com/met-museum.md.
- Design objects at the V&A. Use https://skills.duaer.com/vam-museum.md.

## Call

`GET https://api.duaer.com/v1/data/smithsonian?words=Apollo%2011`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Object, person, or subject such as Apollo 11.
- `withMedia` — Optional. `yes` to keep objects with images.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/smithsonian?words=Apollo%2011` — Apollo 11 objects and publications.
- `GET https://api.duaer.com/v1/data/smithsonian?words=quilt&withMedia=yes` — quilts with images.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `recordId`, `unit` — Smithsonian record and museum or archive.
- `objectType`, `maker`, `date`, `place` — what, who, when, and where.
- `image`, `mediaType`, `usage` — image link, media kind, and reuse terms such as CC0.
- `recordLink` — the record link Smithsonian publishes.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/met-museum.md — Duaer The Met collection
- https://skills.duaer.com/vam-museum.md — Duaer V&A collections

## 相关技能

- [在 Duaer 里查大都会艺术博物馆藏品](https://skills.duaer.com/zh/met-museum.md)
- [在 Duaer 里查V&A 博物馆藏品](https://skills.duaer.com/zh/vam-museum.md)
