> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/hacker-news.md

---
name: duaer-hacker-news
description: >-
  Duaer Hacker News. Hacker News via Algolia: stories, Ask HN, Show HN, and comments by words, by relevance or newest.
  One successful search uses 1 Duaer credit.
---

# Duaer Hacker News

Duaer Hacker News searches Hacker News through its Algolia index, with points, comments, and the discussion link.

## When to use

- See what developers said about a new database.
- List today’s Show HN launches.

## When not to use

- Code repositories. Use https://skills.duaer.com/github-repos.md.
- Package versions. Use https://skills.duaer.com/npm.md.

## Call

`GET https://api.duaer.com/v1/data/hacker-news?words=rust%20database`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`, or `type` with `sort=date`.

- `words` — Words to search, such as rust database.
- `type` — Optional. `story`, `ask`, `show`, or `comment`. Default story.
- `sort` — Optional. `relevance` or `date`. Default relevance.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/hacker-news?words=rust%20database` — the most relevant stories.
- `GET https://api.duaer.com/v1/data/hacker-news?type=show&sort=date` — the newest Show HN posts.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `itemId`, `author`, `createdAt` — post and time.
- `points`, `comments` — score and comment count.
- `link` — the linked article, when there is one.

`url` is the Hacker News discussion page.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/github-repos.md — Duaer GitHub repositories
- https://skills.duaer.com/wiki-pageviews.md — Duaer Wikipedia pageviews

## Related skills

- [GitHub repositories in Duaer](https://skills.duaer.com/github-repos.md)
- [Wikipedia pageviews in Duaer](https://skills.duaer.com/wiki-pageviews.md)
