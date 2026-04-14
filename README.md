# noelrohi.com

> Personal site, blog, and stack notes for [Noel Rohi Garcia](https://noelrohi.com) — Software Engineer at [High Output Ventures](https://hov.co).

Editorial-minimal portfolio with a sticky sidebar, year-grouped writing, and a full breakdown of the tools I actually reach for.

---

## Stack

- **Framework** — [Next.js](https://nextjs.org) (App Router) + React 19
- **Styling** — Tailwind CSS v4, [Rethink Sans](https://fonts.google.com/specimen/Rethink+Sans) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Content** — MDX via [content-collections](https://www.content-collections.dev/)
- **Tooling** — Bun, Biome, TypeScript
- **Hosting** — Vercel

## Scripts

```bash
bun dev         # start content-collections watch + Next.js dev
bun run build   # build content + production bundle
bun fmt         # Biome format + lint
bun ui add ...  # add a shadcn/ui component
```

## Project layout

```
src/
  app/                Next.js routes (/, /posts, /stack, /blog/[slug])
  components/
    sections/         page-level sections (about, projects, stack, ...)
    ui/               shadcn primitives
  lib/                constants, utils
  styles/             globals.css (Tailwind v4 + theme tokens)
content/posts/        MDX blog posts
```

## Writing

Posts live in `content/posts` as `.mdx`. Drafts use the `**.draft.mdx` suffix and are excluded from production builds. Frontmatter schema lives in [`content-collections.ts`](./content-collections.ts).

## License

MIT. Code is free to learn from; please don't lift the design wholesale.
