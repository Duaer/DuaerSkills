> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/compounds.md

---
name: duaer-compounds
description: >-
  Search compounds and drugs through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer compounds

Search compounds and drugs through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/compounds?name=aspirin&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Send one identifier: `name`, `cid`, `formula`, `smiles`, or `inchikey`.
- `limit` — optional. From 1 to 20. Default 10. A name can return several compounds up to this limit.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索临床试验](https://skills.duaer.com/zh/trials.md)
- [在 Duaer 里检索蛋白结构](https://skills.duaer.com/zh/structures.md)
- [在 Duaer 里检索基因和蛋白](https://skills.duaer.com/zh/proteins.md)
- [在 Duaer 里检索生物活性](https://skills.duaer.com/zh/activities.md)
- [在 Duaer 里检索适应症](https://skills.duaer.com/zh/indications.md)
