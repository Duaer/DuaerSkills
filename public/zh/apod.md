> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/apod.md

---
name: duaer-apod
description: >-
  Duaer NASA Astronomy Picture of the Day. NASA APOD: the daily astronomy image or video with its explanation, for one day or a range of days.
  One successful search uses 1 Duaer credit.
---

# Duaer NASA Astronomy Picture of the Day

Duaer NASA Astronomy Picture of the Day returns the APOD entry for a day or a run of days, newest first, with the image link and the explanation. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Show the astronomy picture of the day in a newsletter or app.
- Collect a week of APOD images with credits.

## When not to use

- Asteroid data. Use https://skills.duaer.com/small-bodies.md.
- Space weather. Use https://skills.duaer.com/solar-flares.md.

## Call

`GET https://api.duaer.com/v1/data/apod?days=1`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `date` or `days`.

- `date` — Optional. YYYY-MM-DD from 1995-06-16. Default is the latest picture.
- `days` — Optional. Pictures for this many days ending on `date`, 1 to 20. Default 1.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/apod?days=1` — the latest picture.
- `GET https://api.duaer.com/v1/data/apod?date=2026-09-28&days=7` — the week ending 28 September 2026.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `date`, `mediaType` — day and image or video.
- `imageUrl`, `thumbnailUrl` — full image (or video) and video thumbnail.
- `copyright` — credit; empty means public domain.
- `explanation` — the APOD text.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/exoplanets.md — Duaer Exoplanets
- https://skills.duaer.com/solar-flares.md — Duaer NASA solar flares

## 相关技能

- [在 Duaer 里查系外行星](https://skills.duaer.com/zh/exoplanets.md)
- [在 Duaer 里查NASA 太阳耀斑](https://skills.duaer.com/zh/solar-flares.md)
