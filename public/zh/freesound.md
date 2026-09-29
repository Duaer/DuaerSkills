> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/freesound.md

---
name: duaer-freesound
description: >-
  Duaer Freesound sound effects. Freesound: Creative Commons sound effects and field recordings with MP3 previews and license.
  One successful search uses 1 Duaer credit.
---

# Duaer Freesound sound effects

Duaer Freesound sound effects searches Freesound for Creative Commons sounds and returns MP3 previews with the license and author. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find a door knock sound for a video.
- Find short ambient rain loops.

## When not to use

- Music tracks. Use https://skills.duaer.com/jamendo.md.
- Audio from Wikimedia Commons. Use https://skills.duaer.com/commons-media.md.

## Call

`GET https://api.duaer.com/v1/data/freesound?words=rain`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words describing the sound, such as rain on window.
- `maxSeconds` — Optional. Longest duration in seconds, 1 to 3600.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/freesound?words=rain` — rain sounds.
- `GET https://api.duaer.com/v1/data/freesound?words=door%20knock&maxSeconds=5` — door knocks up to 5 seconds.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `freesoundId`, `name`, `author`, `durationSeconds` — sound, author, and length.
- `previewUrl`, `tags`, `description` — high-quality MP3 preview, tags, and description.
- `license`, `licenseUrl`, `downloads`, `rating` — Creative Commons license and popularity.

Credit the author when the license is CC BY or CC BY-NC.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/jamendo.md — Duaer Jamendo music
- https://skills.duaer.com/commons-media.md — Duaer Wikimedia Commons media

## 相关技能

- [在 Duaer 里查Jamendo 音乐](https://skills.duaer.com/zh/jamendo.md)
- [在 Duaer 里查维基共享资源素材](https://skills.duaer.com/zh/commons-media.md)
