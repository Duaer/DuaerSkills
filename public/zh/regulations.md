> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/regulations.md

---
name: duaer-regulations
description: >-
  Duaer Regulations.gov documents. Regulations.gov: US federal rules, proposed rules, and notices, with agency, docket, and comment deadline.
  One successful search uses 1 Duaer credit.
---

# Duaer Regulations.gov documents

Duaer Regulations.gov documents searches federal rulemaking documents, newest first. Filter by agency and document type, or keep only documents still open for public comment. Duaer holds the upstream API key; you only send your Duaer key.

## When to use

- Find EPA proposed rules still open for comment.
- Track new FDA rules on a topic.

## When not to use

- Bills in Congress. Use https://skills.duaer.com/congress-bills.md.
- The daily Federal Register issue. Use https://skills.duaer.com/federal-register.md.

## Call

`GET https://api.duaer.com/v1/data/regulations?words=drinking%20water`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

## Parameters

Provide `words` or `agency`.

- `words` — Words in the document, such as drinking water.
- `agency` — Optional. Agency acronym such as EPA, FDA, or DOT.
- `documentType` — Optional. `rule`, `proposed-rule`, `notice`, `supporting`, or `other`.
- `openForComment` — Optional. `yes` to keep documents still taking public comments.
- `limit` — Optional. Rows to return, from 1 to 20. Default 10.

## Examples

- `GET https://api.duaer.com/v1/data/regulations?words=drinking%20water` — recent documents about drinking water.
- `GET https://api.duaer.com/v1/data/regulations?agency=EPA&documentType=proposed-rule&openForComment=yes` — EPA proposed rules open for comment.

## Result

The response is `{ "items": [...] }`. Each item has `source`, `title`, `url`, and `summary`, plus:

- `documentId`, `docketId` — Regulations.gov document and docket.
- `agency`, `documentType`, `subtype` — agency and kind, such as Proposed Rule.
- `postedDate` — when the document was posted.
- `openForComment` — whether public comments are still accepted.

The summary shows the comment deadline when there is one.

Fields without a value are left out.

## Credits

A search that returns at least one row uses 1 credit.
An empty search, a search that finds nothing, or a failed search uses 0.
Wrong input returns 400 with a message and uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## Related

- https://skills.duaer.com/federal-register.md — Duaer US Federal Register
- https://skills.duaer.com/congress-bills.md — Duaer US Congress bills

## 相关技能

- [在 Duaer 里查美国联邦公报](https://skills.duaer.com/zh/federal-register.md)
- [在 Duaer 里查美国国会法案](https://skills.duaer.com/zh/congress-bills.md)
