# Duaer skills

Skill catalog for `https://skills.duaer.com`. Same public chrome as the Duaer docs site, deployed on its own.

English is the default. Chinese is under `/zh/`. Each skill page has a Markdown twin for agents (`/papers.md`).

## Add a skill

1. Add a row in `scripts/catalog.mjs`.
2. Run `pnpm render`.
3. Preview with `pnpm dev` at http://127.0.0.1:8091.

## Deploy

```bash
pnpm render
pnpm deploy
```

The Worker route is `skills.duaer.com`.
