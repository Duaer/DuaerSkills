> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/word-finder.md

---
name: duaer-word-finder
description: >-
  Duaer Word finder. Datamuse: English words that mean, sound like, are spelled like, rhyme with, relate to, or oppose your words.
  One successful search uses 1 Duaer credit.
---

# Duaer Word finder

Duaer Word finder uses Datamuse to find English words by meaning, sound, spelling pattern, rhyme, association, or opposite, with parts of speech and short definitions.

## When to use

- Find synonyms for happy in a product description.
- Find words that rhyme with a slogan word.

## When not to use

- Encyclopedia articles. Use https://skills.duaer.com/wikipedia.md.
- Books by title or author. Use https://skills.duaer.com/open-library.md.

## Call

`GET https://api.duaer.com/v1/data/word-finder?words=happy`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words`.

- `words` — A word or phrase, such as happy. With `spelled`, a pattern such as t??k or bl*.
- `relation` — Optional. `means`, `sounds`, `spelled`, `rhymes`, `related`, or `opposite`. Default `means`.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/word-finder?words=happy` — words that mean happy.
- `GET https://api.duaer.com/v1/data/word-finder?words=hot&relation=opposite` — opposites of hot.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `word`, `partsOfSpeech` — the word and whether it is a noun, verb, adjective, or adverb.
- `definitions`, `score` — up to three short definitions and the Datamuse match score.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia
- https://skills.duaer.com/open-library.md — Duaer Open Library

## 相关技能

- [在 Duaer 里查维基百科](https://skills.duaer.com/zh/wikipedia.md)
- [在 Duaer 里查 Open Library 图书](https://skills.duaer.com/zh/open-library.md)
