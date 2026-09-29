> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/musicbrainz.md

---
name: duaer-musicbrainz
description: >-
  Duaer MusicBrainz music. MusicBrainz: artists, albums and releases, and recordings with dates, countries, labels, and tags.
  One successful search uses 1 Duaer credit.
---

# Duaer MusicBrainz music

Duaer MusicBrainz music searches the open MusicBrainz database for artists, releases, or recordings, best match first.

## When to use

- Get an artist’s country, start year, and genres.
- List the editions of an album with labels.

## When not to use

- Books. Use https://skills.duaer.com/open-library.md.
- Museum objects. Use https://skills.duaer.com/vam-museum.md.

## Call

`GET https://api.duaer.com/v1/data/musicbrainz?words=Radiohead`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Artist, album, or song such as Radiohead.
- `type` — Optional. `artist`, `release`, or `recording`. Default artist.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/musicbrainz?words=Radiohead` — the band and similar names.
- `GET https://api.duaer.com/v1/data/musicbrainz?words=OK%20Computer&type=release` — releases of OK Computer.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `mbid`, `name`, `type`, `score` — MusicBrainz ID, name, kind, and match score.
- `country`, `area`, `begin`, `end`, `tags` — for artists.
- `release`, `artist`, `date`, `label`, `tracks`, `status`, `releaseType` — for releases.
- `recording`, `artist`, `lengthSec`, `firstReleaseDate`, `release` — for recordings.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/open-library.md — Duaer Open Library
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia

## 相关技能

- [在 Duaer 里查 Open Library 图书](https://skills.duaer.com/zh/open-library.md)
- [在 Duaer 里查维基百科](https://skills.duaer.com/zh/wikipedia.md)
