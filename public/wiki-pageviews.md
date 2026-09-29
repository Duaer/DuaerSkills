> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/wiki-pageviews.md

---
name: duaer-wiki-pageviews
description: >-
  Duaer Wikipedia pageviews. Wikimedia: daily views of a Wikipedia article, or the most read articles of yesterday, in any language.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikipedia pageviews

Duaer Wikipedia pageviews returns daily human views of one article up to yesterday, newest first. Leave the article empty to get yesterday’s most read articles.

## When to use

- See what people read most on Wikipedia yesterday.
- Measure interest in a person or topic over a month.

## When not to use

- Article text. Use https://skills.duaer.com/wikipedia.md.
- Tech news discussion. Use https://skills.duaer.com/hacker-news.md.

## Call

`GET https://api.duaer.com/v1/data/wiki-pageviews?article=Albert%20Einstein`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `article` or `language`.

- `article` — Optional. Article title such as Albert Einstein. Empty lists yesterday’s top articles.
- `language` — Optional. Wikipedia code such as en, de, ja, or zh. Default en.
- `days` — Optional. Days up to yesterday, 1 to 90. Default 30.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/wiki-pageviews?article=Albert%20Einstein&days=7` — daily views for the last week.
- `GET https://api.duaer.com/v1/data/wiki-pageviews?language=de` — yesterday’s most read German articles.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `article`, `language`, `date` — article, wiki, and day.
- `views` — views that day.
- `rank` — position in the most read list.

The summary of an article row also shows the total over the days asked.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia
- https://skills.duaer.com/hacker-news.md — Duaer Hacker News

## Related skills

- [Wikipedia in Duaer](https://skills.duaer.com/wikipedia.md)
- [Hacker News in Duaer](https://skills.duaer.com/hacker-news.md)
