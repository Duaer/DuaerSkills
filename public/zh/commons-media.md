> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/commons-media.md

---
name: duaer-commons-media
description: >-
  Duaer Wikimedia Commons media. Wikimedia Commons: free images, audio, and video with file links, license, and author.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikimedia Commons media

Duaer Wikimedia Commons media searches Wikimedia Commons for freely licensed images, audio, and video, with the file link, license, and author for attribution.

## When to use

- Find a freely licensed photo for an article.
- Find a public-domain audio clip.

## When not to use

- Stock photos with a single simple license. Use https://skills.duaer.com/pexels.md.
- Icons. Use https://skills.duaer.com/icons.md.

## Call

`GET https://api.duaer.com/v1/data/commons-media?words=coffee%20beans`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words describing the file, such as coffee beans.
- `type` — Optional. `image`, `audio`, or `video`. Default `image`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/commons-media?words=coffee%20beans` — photos of coffee beans.
- `GET https://api.duaer.com/v1/data/commons-media?words=rain&type=audio` — audio recordings of rain.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `fileUrl`, `thumbnailUrl`, `mime` — file, 640-pixel thumbnail, and media type.
- `width`, `height`, `durationSeconds`, `sizeBytes` — size, and length for audio and video.
- `license`, `licenseUrl`, `artist`, `description` — license and attribution.

Follow each file license; many require crediting the artist.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pexels.md — Duaer Pexels photos and videos
- https://skills.duaer.com/icons.md — Duaer Icons

## 相关技能

- [在 Duaer 里查Pexels 图片与视频](https://skills.duaer.com/zh/pexels.md)
- [在 Duaer 里查图标](https://skills.duaer.com/zh/icons.md)
