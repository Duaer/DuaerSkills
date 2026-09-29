> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/space-news.md

---
name: duaer-space-news
description: >-
  Duaer Space news. Spaceflight News API: space industry news, blogs, and reports from dozens of sites, newest first.
  One successful search uses 1 Duaer credit.
---

# Duaer Space news

Duaer Space news searches the Spaceflight News API, which gathers space industry articles, blogs, and mission reports from NASA, ESA, SpaceX, and news sites.

## When to use

- Follow the latest Starship coverage.
- Read recent mission reports from space agencies.

## When not to use

- Technology discussion threads. Use https://skills.duaer.com/hacker-news.md.
- NASA picture of the day. Use https://skills.duaer.com/apod.md.

## Call

`GET https://api.duaer.com/v1/data/space-news?words=Starship`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `kind`.

- `words` — Words to search, such as Starship.
- `kind` — Optional. `articles`, `blogs`, or `reports`. Default `articles`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/space-news?words=Starship` — the newest articles about Starship.
- `GET https://api.duaer.com/v1/data/space-news?kind=reports` — the newest mission reports.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `headline`, `newsSite`, `authors` — article title, site, and authors.
- `publishedAt`, `text`, `image` — publish time, summary, and image link.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/hacker-news.md — Duaer Hacker News
- https://skills.duaer.com/apod.md — Duaer NASA Astronomy Picture of the Day

## Related skills

- [Hacker News in Duaer](https://skills.duaer.com/hacker-news.md)
- [NASA Astronomy Picture of the Day in Duaer](https://skills.duaer.com/apod.md)
