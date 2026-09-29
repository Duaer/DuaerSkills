> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/cleveland-art.md

---
name: duaer-cleveland-art
description: >-
  Duaer Cleveland Museum of Art. Open access artworks at the Cleveland Museum of Art by artist, title, or subject, with creator, technique, gallery, and CC0 image.
  One successful search uses 1 Duaer credit.
---

# Duaer Cleveland Museum of Art

Duaer Cleveland Museum of Art searches the museum open access API. Most works with images are CC0.

## When to use

- Find works on view in a gallery.
- Get CC0 images for reuse.

## When not to use

- The Met collection. Use https://skills.duaer.com/met-museum.md.
- Chicago collection. Use https://skills.duaer.com/art-institute.md.

## Call

`GET https://api.duaer.com/v1/data/cleveland-art?words=monet`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Artist, title, or subject, such as monet.
- `publicDomain` — Optional. `yes` to keep only works free to reuse.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/cleveland-art?words=monet` — works by Monet.
- `GET https://api.duaer.com/v1/data/cleveland-art?words=armor&publicDomain=yes` — CC0 armor.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `artworkId`, `accessionNumber`, `artist`, `date`, `culture` — work and maker.
- `technique`, `type`, `department`, `onView` — object facts and gallery.
- `publicDomain`, `image` — CC0 status and web image.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/met-museum.md — Duaer The Met collection
- https://skills.duaer.com/art-institute.md — Duaer Art Institute of Chicago

## Related skills

- [The Met collection in Duaer](https://skills.duaer.com/met-museum.md)
- [Art Institute of Chicago in Duaer](https://skills.duaer.com/art-institute.md)
