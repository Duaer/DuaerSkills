> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/pixabay.md

---
name: duaer-pixabay
description: >-
  Duaer Pixabay images and videos. Pixabay: free photos, illustrations, vectors, and videos with tags and file links.
  One successful search uses 1 Duaer credit.
---

# Duaer Pixabay images and videos

Duaer Pixabay images and videos searches Pixabay photos, illustrations, vectors, or videos and returns file links with tags and counts. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find a vector illustration for a slide.
- Find a short background video.

## When not to use

- Freely licensed images with full attribution data. Use https://skills.duaer.com/commons-media.md.
- Music. Use https://skills.duaer.com/jamendo.md.

## Call

`GET https://api.duaer.com/v1/data/pixabay?words=mountain%20lake`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words describing the image or video, at most 100 characters.
- `type` — Optional. `photo`, `illustration`, `vector`, or `video`. Default `photo`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/pixabay?words=mountain%20lake` — mountain lake photos.
- `GET https://api.duaer.com/v1/data/pixabay?words=rocket&type=vector` — rocket vector graphics.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `mediaType`, `pixabayId`, `tags`, `width`, `height`, `durationSeconds` — type, tags, and size.
- `imageUrl`, `previewUrl`, `videoUrl`, `thumbnailUrl` — file links.
- `author`, `views`, `downloads`, `likes`, `license` — author, counts, and the Pixabay Content License.

Pixabay file links are for display; download the file to keep it.

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

## Related skills

- [Pexels photos and videos in Duaer](https://skills.duaer.com/pexels.md)
- [Icons in Duaer](https://skills.duaer.com/icons.md)
