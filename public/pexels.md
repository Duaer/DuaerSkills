> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pexels.md

---
name: duaer-pexels
description: >-
  Duaer Pexels photos and videos. Pexels: free stock photos and videos with photographer credit and file links.
  One successful search uses 1 Duaer credit.
---

# Duaer Pexels photos and videos

Duaer Pexels photos and videos searches Pexels stock photos or videos and returns file links with the photographer. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find a hero photo for a landing page.
- Find a portrait stock video for a short.

## When not to use

- Illustrations and vectors. Use https://skills.duaer.com/pixabay.md.
- Sound effects. Use https://skills.duaer.com/freesound.md.

## Call

`GET https://api.duaer.com/v1/data/pexels?words=coffee%20shop`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words describing the photo or video, such as coffee shop.
- `type` — Optional. `photo` or `video`. Default `photo`.
- `orientation` — Optional. `landscape`, `portrait`, or `square`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pexels?words=coffee%20shop` — coffee shop photos.
- `GET https://api.duaer.com/v1/data/pexels?words=ocean&type=video&orientation=portrait` — portrait ocean videos.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `mediaType`, `pexelsId`, `width`, `height`, `durationSeconds` — photo or video and its size.
- `imageUrl`, `originalUrl`, `thumbnailUrl`, `videoUrl` — file links; videos pick an MP4 up to 1920 pixels wide.
- `author`, `authorUrl`, `averageColor`, `license` — photographer or author and the Pexels License.

Pexels asks you to credit the photographer and Pexels where you can.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/pixabay.md — Duaer Pixabay images and videos
- https://skills.duaer.com/commons-media.md — Duaer Wikimedia Commons media

## Related skills

- [Pixabay images and videos in Duaer](https://skills.duaer.com/pixabay.md)
- [Wikimedia Commons media in Duaer](https://skills.duaer.com/commons-media.md)
