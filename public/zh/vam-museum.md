> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/vam-museum.md

---
name: duaer-vam-museum
description: >-
  Duaer V&A collections. Victoria and Albert Museum: design and decorative art objects with maker, date, gallery, and image.
  One successful search uses 1 Duaer credit.
---

# Duaer V&A collections

Duaer V&A collections searches the Victoria and Albert Museum collection, best match first, with IIIF image links and whether the object is on display.

## When to use

- Find William Morris textiles with images.
- Check which teapots are on display at the V&A.

## When not to use

- Smithsonian objects. Use https://skills.duaer.com/smithsonian.md.
- Paintings at the Met. Use https://skills.duaer.com/met-museum.md.

## Call

`GET https://api.duaer.com/v1/data/vam-museum?words=William%20Morris`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Object, maker, or style such as William Morris.
- `withImages` — Optional. `yes` to keep objects with images.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/vam-museum?words=William%20Morris` — William Morris designs.
- `GET https://api.duaer.com/v1/data/vam-museum?words=teapot&withImages=yes` — teapots with images.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `systemNumber`, `accessionNumber` — V&A identifiers.
- `objectType`, `maker`, `date`, `place` — what, who, when, and where.
- `onDisplay`, `gallery` — whether and where it is shown.
- `image`, `thumbnail` — IIIF image links.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/smithsonian.md — Duaer Smithsonian collections
- https://skills.duaer.com/met-museum.md — Duaer The Met collection

## 相关技能

- [在 Duaer 里查史密森尼博物馆藏品](https://skills.duaer.com/zh/smithsonian.md)
- [在 Duaer 里查大都会艺术博物馆藏品](https://skills.duaer.com/zh/met-museum.md)
