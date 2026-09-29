> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/icons.md

---
name: duaer-icons
description: >-
  Duaer Icons. Iconify: open-source icons from 200+ icon sets with SVG links, license, and author.
  One successful search uses 1 Duaer credit.
---

# Duaer Icons

Duaer Icons searches Iconify across more than 200 open-source icon sets and returns SVG links with the set license.

## When to use

- Find a coffee icon for an app menu.
- List shopping cart icons from one icon set.

## When not to use

- Photos. Use https://skills.duaer.com/pexels.md.
- Freely licensed images. Use https://skills.duaer.com/commons-media.md.

## Call

`GET https://api.duaer.com/v1/data/icons?words=coffee`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Icon name words such as coffee or shopping cart.
- `collection` — Optional. Icon set prefix such as `mdi`, `tabler`, or `lucide`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/icons?words=coffee` — coffee icons from every set.
- `GET https://api.duaer.com/v1/data/icons?words=cart&collection=lucide` — cart icons from Lucide.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `icon`, `name`, `svgUrl` — Iconify id, icon name, and SVG link.
- `collection`, `collectionPrefix` — icon set.
- `license`, `licenseSpdx`, `licenseUrl`, `author` — set license and author.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/commons-media.md — Duaer Wikimedia Commons media
- https://skills.duaer.com/pixabay.md — Duaer Pixabay images and videos

## Related skills

- [Wikimedia Commons media in Duaer](https://skills.duaer.com/commons-media.md)
- [Pixabay images and videos in Duaer](https://skills.duaer.com/pixabay.md)
