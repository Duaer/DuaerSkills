> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/art-institute.md

---
name: duaer-art-institute
description: >-
  Duaer Art Institute of Chicago. Artworks at the Art Institute of Chicago by artist, title, or subject, with date, medium, department, and IIIF image.
  One successful search uses 1 Duaer credit.
---

# Duaer Art Institute of Chicago

Duaer Art Institute of Chicago searches the museum collection API, ranked by relevance, with IIIF image links.

## When to use

- Find paintings by an artist in Chicago.
- Get image links for public-domain works.

## When not to use

- The Met collection. Use https://skills.duaer.com/met-museum.md.
- Encyclopedia articles. Use https://skills.duaer.com/wikipedia.md.

## Call

`GET https://api.duaer.com/v1/data/art-institute?words=water%20lilies`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Artist, title, or subject, such as water lilies.
- `publicDomain` — Optional. `yes` to keep only works free to reuse.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/art-institute?words=water%20lilies` — water lily paintings.
- `GET https://api.duaer.com/v1/data/art-institute?words=Hopper&publicDomain=yes` — public-domain works related to Hopper.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `artworkId`, `artist`, `date`, `placeOfOrigin` — work and maker.
- `medium`, `department` — object facts.
- `publicDomain`, `image` — reuse status and IIIF image link.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/met-museum.md — Duaer The Met collection
- https://skills.duaer.com/cleveland-art.md — Duaer Cleveland Museum of Art

## 相关技能

- [在 Duaer 里查大都会艺术博物馆藏品](https://skills.duaer.com/zh/met-museum.md)
- [在 Duaer 里查克利夫兰艺术博物馆藏品](https://skills.duaer.com/zh/cleveland-art.md)
