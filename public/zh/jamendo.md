> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/jamendo.md

---
name: duaer-jamendo
description: >-
  Duaer Jamendo music. Jamendo: Creative Commons music tracks with audio links, genres, and license.
  One successful search uses 1 Duaer credit.
---

# Duaer Jamendo music

Duaer Jamendo music searches Jamendo for Creative Commons tracks by words or tag and returns streaming links with the license. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find background music for a video.
- List popular piano tracks.

## When not to use

- Sound effects. Use https://skills.duaer.com/freesound.md.
- Music metadata from other catalogs. Use https://skills.duaer.com/musicbrainz.md.

## Call

`GET https://api.duaer.com/v1/data/jamendo?words=summer`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `tag`.

- `words` — Words in the track, artist, or album, such as summer.
- `tag` — Optional. Genre or mood tag such as rock, piano, or relaxing. Several tags separated by spaces must all match.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/jamendo?words=summer` — tracks matching summer.
- `GET https://api.duaer.com/v1/data/jamendo?tag=piano` — the most popular piano tracks.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `jamendoId`, `name`, `artist`, `album`, `durationSeconds`, `releaseDate` — track details.
- `audioUrl`, `downloadUrl`, `imageUrl`, `genres` — MP3 stream, download when allowed, cover, and genres.
- `license`, `licenseUrl` — Creative Commons license.

Commercial use of many Jamendo tracks needs a Jamendo Licensing agreement; check the license.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/freesound.md — Duaer Freesound sound effects
- https://skills.duaer.com/musicbrainz.md — Duaer MusicBrainz music

## 相关技能

- [在 Duaer 里查Freesound 音效](https://skills.duaer.com/zh/freesound.md)
- [在 Duaer 里查MusicBrainz 音乐库](https://skills.duaer.com/zh/musicbrainz.md)
