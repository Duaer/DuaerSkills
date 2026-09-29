> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/apple-search.md

---
name: duaer-apple-search
description: >-
  Duaer Apple catalog search. Apple iTunes Search: podcasts, music, apps, books, movies, and TV in any store country, with genre, price, and link.
  One successful search uses 1 Duaer credit.
---

# Duaer Apple catalog search

Duaer Apple catalog search looks up the Apple store catalog. Pick the media type and store country; rows link to Apple Podcasts, Apple Music, or the App Store.

## When to use

- Find popular history podcasts and their feed links.
- Compare note-taking apps and ratings in the Japanese App Store.

## When not to use

- TV series details. Use https://skills.duaer.com/tv-shows.md.
- Music metadata such as recordings and releases. Use https://skills.duaer.com/musicbrainz.md.

## Call

`GET https://api.duaer.com/v1/data/apple-search?words=history`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words to search, such as history.
- `media` — Optional. `podcast`, `music`, `software`, `audiobook`, `ebook`, `movie`, or `tvShow`. Default `podcast`.
- `country` — Optional. Two-letter store country such as US, GB, or JP. Default US.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/apple-search?words=history` — history podcasts in the US store.
- `GET https://api.duaer.com/v1/data/apple-search?words=notes&media=software&country=JP` — note apps in the Japanese App Store.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `name`, `artist`, `kind`, `genre` — item, creator or seller, type, and genre.
- `price`, `rating`, `ratingCount`, `releaseDate` — price, average rating, rating count, and release date.
- `episodes`, `feedUrl`, `artwork`, `country` — podcast episodes and feed, artwork, and store.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/tv-shows.md — Duaer TV shows
- https://skills.duaer.com/musicbrainz.md — Duaer MusicBrainz music

## Related skills

- [TV shows in Duaer](https://skills.duaer.com/tv-shows.md)
- [MusicBrainz music in Duaer](https://skills.duaer.com/musicbrainz.md)
