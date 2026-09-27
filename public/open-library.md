> Index: [llms.txt](https://skills.duaer.com/llms.txt). This skill: https://skills.duaer.com/open-library.md

---
name: duaer-open-library
description: >-
  Duaer Open Library. Books from Open Library by title, author, or subject: authors, first publication year, edition count, ISBN, subjects, e-book access, and cover image.
  One successful search uses 1 Duaer credit.
---

# Duaer Open Library

Duaer Open Library searches the Internet Archive book catalog. Each row is a work that groups its editions, with a cover link when one exists.

## When to use

- Build a reading list or check a book citation.
- Find textbooks and classics on a subject.

## When not to use

- Journal articles. Use https://skills.duaer.com/papers.md.
- Prices and stock. Open Library is a catalog, not a shop.

## Call

`GET https://api.duaer.com/v1/data/open-library?words=molecular%20biology%20of%20the%20cell`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide at least one of `words`, `author`, or `subject`.

- `words` — Title or any words, such as molecular biology of the cell.
- `author` — Optional. Author name, such as Alberts.
- `subject` — Optional. Subject heading, such as genetics.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/open-library?words=molecular%20biology%20of%20the%20cell` — find a textbook.
- `GET https://api.duaer.com/v1/data/open-library?author=Ursula%20K.%20Le%20Guin&limit=20` — works by an author.
- `GET https://api.duaer.com/v1/data/open-library?subject=machine%20learning` — books on a subject.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `workKey` — Open Library work key.
- `authors`, `firstPublished`, `editions` — authors, first year, and edition count.
- `isbn`, `publisher`, `languages` — one ISBN, a publisher, and languages.
- `subjects` — subject headings.
- `ebookAccess`, `coverUrl` — borrowable, public, or no e-book; cover image.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/wikipedia.md — Duaer Wikipedia

## Related skills

- [Search papers in Duaer](https://skills.duaer.com/papers.md)
- [Wikipedia in Duaer](https://skills.duaer.com/wikipedia.md)
