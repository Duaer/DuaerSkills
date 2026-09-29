> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/met-museum.md

---
name: duaer-met-museum
description: >-
  Duaer The Met collection. Artworks at The Metropolitan Museum of Art by artist, title, or subject, with date, medium, department, gallery, and public-domain image.
  One successful search uses 1 Duaer credit.
---

# Duaer The Met collection

Duaer The Met collection searches the open access collection of The Metropolitan Museum of Art in New York. Works with images come first.

## When to use

- Find works by an artist or on a subject.
- Get reusable public-domain images with credit lines.

## When not to use

- Chicago collection. Use https://skills.duaer.com/art-institute.md.
- Books. Use https://skills.duaer.com/open-library.md.

## Call

`GET https://api.duaer.com/v1/data/met-museum?words=sunflowers`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Artist, title, or subject, such as sunflowers.
- `publicDomain` — Optional. `yes` to keep only works free to reuse.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/met-museum?words=sunflowers` — works about sunflowers.
- `GET https://api.duaer.com/v1/data/met-museum?words=Hokusai&publicDomain=yes` — public-domain Hokusai prints.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `objectId`, `artist`, `date`, `culture` — work and maker.
- `medium`, `classification`, `department`, `dimensions` — object facts.
- `publicDomain`, `image`, `creditLine`, `onView` — reuse status, image link, credit, and gallery.

The Met loads each object separately, so large limits take longer.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/art-institute.md — Duaer Art Institute of Chicago
- https://skills.duaer.com/cleveland-art.md — Duaer Cleveland Museum of Art

## 相关技能

- [在 Duaer 里查芝加哥艺术博物馆藏品](https://skills.duaer.com/zh/art-institute.md)
- [在 Duaer 里查克利夫兰艺术博物馆藏品](https://skills.duaer.com/zh/cleveland-art.md)
