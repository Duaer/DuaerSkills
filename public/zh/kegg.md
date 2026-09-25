> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/kegg.md

---
name: duaer-kegg
description: >-
  Search KEGG pathways, diseases, or compounds through Duaer. One successful search uses 1 Duaer credit.
---

# Duaer KEGG

Search KEGG pathways, diseases, or compounds through Duaer. One successful search uses 1 Duaer credit.

## Call

`GET https://api.duaer.com/v1/data/kegg?words=apoptosis&db=pathway&limit=10`

Header: `Authorization: Bearer <Duaer key>`

Use an account key or a model API key.

Get a Duaer key: https://skills.duaer.com/keys.md

- Provide `words` or `id`.
- `words` — search text, such as apoptosis.
- `id` — optional. KEGG id such as map04210, H00409, or C01405.
- `db` — optional. pathway (default), disease, or compound. Used with words.
- `limit` — optional. From 1 to 20. Default 10.

## Result

Each item includes `source`, `title`, `url`, and `summary`, plus the fields named on this skill.

## Credits

One successful search uses 1 credit.
An empty search, a failed search, a compound that matches nothing, or no remaining credits uses 0.
No remaining credits returns 402 and does not search.
A missing key returns 401.

## 相关技能

- [在 Duaer 里检索通路](https://skills.duaer.com/zh/pathways.md)
- [在 Duaer 里检索疾病](https://skills.duaer.com/zh/diseases.md)
- [在 Duaer 里检索化合物和药物](https://skills.duaer.com/zh/compounds.md)
- [在 Duaer 里检索基因本体](https://skills.duaer.com/zh/gene-ontology.md)
