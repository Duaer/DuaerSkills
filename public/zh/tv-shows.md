> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/tv-shows.md

---
name: duaer-tv-shows
description: >-
  Duaer TV shows. TVmaze: TV and streaming shows by name, with network, status, genres, rating, and summary.
  One successful search uses 1 Duaer credit.
---

# Duaer TV shows

Duaer TV shows searches TVmaze for TV and streaming series by name and returns the network or streaming service, status, genres, rating, and summary.

## When to use

- Check whether a series is still running and where it streams.
- Compare ratings of shows with the same title.

## When not to use

- Podcasts, apps, and music. Use https://skills.duaer.com/apple-search.md.
- Background on a show or actor. Use https://skills.duaer.com/wikipedia.md.

## Call

`GET https://api.duaer.com/v1/data/tv-shows?words=the%20office`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words in the show name, such as the office.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/tv-shows?words=the%20office` — the US and UK versions of The Office.
- `GET https://api.duaer.com/v1/data/tv-shows?words=dark` — shows named Dark.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `type`, `language`, `genres` — show identity.
- `status`, `premiered`, `ended`, `network` — whether it runs and where.
- `rating`, `text`, `image`, `officialSite` — TVmaze rating, summary, poster, and site.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/apple-search.md — Duaer Apple catalog search
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia

## 相关技能

- [在 Duaer 里查Apple 目录检索](https://skills.duaer.com/zh/apple-search.md)
- [在 Duaer 里查维基百科](https://skills.duaer.com/zh/wikipedia.md)
