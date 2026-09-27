> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/wikipedia.md

---
name: duaer-wikipedia
description: >-
  Duaer Wikipedia. Wikipedia articles in any language edition with the short description, a text excerpt, and a thumbnail, for quick background on a term.
  One successful search uses 1 Duaer credit.
---

# Duaer Wikipedia

Duaer Wikipedia searches article titles and text in one Wikipedia language edition. Use it for background, definitions, and the right article link.

## When to use

- Add a one-line definition or background to a report or chat answer.
- Find the article in Chinese, Japanese, or another edition with `lang`.

## When not to use

- Structured facts such as IDs and dates. Use https://skills.duaer.com/wikidata.md.
- Peer-reviewed evidence. Use https://skills.duaer.com/papers.md.

## Call

`GET https://api.duaer.com/v1/data/wikipedia?words=photosynthesis&limit=3`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — Words to find, such as photosynthesis.
- `lang` — Optional. Wikipedia language code, such as en, zh, de, or ja. Default en.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/wikipedia?words=photosynthesis&limit=3` — English articles.
- `GET https://api.duaer.com/v1/data/wikipedia?words=Photosynthese&lang=de` — German Wikipedia. Use zh for Chinese or ja for Japanese.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `pageId`, `language` — article id and edition.
- `description` — short description.
- `excerpt` — matching text snippet.
- `thumbnailUrl` — thumbnail image, when present.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/wikidata.md
- https://skills.duaer.com/open-library.md — Duaer Open Library

## 相关技能

- [在 Duaer 里检索 Wikidata](https://skills.duaer.com/zh/wikidata.md)
- [在 Duaer 里查 Open Library 图书](https://skills.duaer.com/zh/open-library.md)
