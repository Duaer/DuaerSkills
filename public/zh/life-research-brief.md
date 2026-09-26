> Index: [llms.txt](https://skills.duaer.com/zh/llms.txt). This skill: https://skills.duaer.com/zh/life-research-brief.md

---
name: duaer-life-research-brief
description: >-
  Operate the Duaer Life research brief digital employee. Use when hiring or
  calling that employee for papers + genes/variants briefs, or accepting the
  deliverable in the Duaer data pool.
---

# Digital employee: Life research brief

You are driving **this** Duaer digital employee (template slug `duaer-life-research`), not a generic API catalog.

## Role

1. Search **Duaer Data papers** for the topic.
2. Search **Duaer Data genes** for candidate symbols / targets.
3. Optionally search **Duaer Data variants** for rs ids or gene-linked hits.
4. Return a structured brief with `kind: "delivery"`, topic, papers, genes, variants, and open_questions.
5. Cite tool results only. Do not invent DOIs, gene ids, or rs ids.

## How to call

1. In Duaer Templates, open **Life research brief** and publish.
2. Prefer the **production chat URL** from Skill when published; use test URLs / Open chat while editing.
3. Optional: webhook or MCP surfaces from the same Skill panel.
4. Copy the live Skill.md for agents.

Each successful Duaer Data search uses **1 credit**.

## Accept

After a production chat succeeds, open **Data pool** in Duaer. The brief is **pending**. Accept it, or reject with a short note.

How-to: https://doc.duaer.com/getting-started/life-research-brief/
Acceptance: https://doc.duaer.com/getting-started/accept-deliverables/

## Related data skills

- https://skills.duaer.com/papers.md
- https://skills.duaer.com/genes.md
- https://skills.duaer.com/variants.md

## 相关技能

- [在 Duaer 里检索论文](https://skills.duaer.com/zh/papers.md)
- [在 Duaer 里检索基因](https://skills.duaer.com/zh/genes.md)
- [在 Duaer 里检索变异](https://skills.duaer.com/zh/variants.md)
