# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `pnpm dev` - Runs content-collections watch and Next.js dev server concurrently
- **Build**: `pnpm build` - Builds content collections and Next.js app for production
- **Format & Lint**: `pnpm fmt` - Formats code with Biome and applies safe fixes
- **Content collections**: `pnpm content-collections` - Processes MDX blog posts
- **Add UI components**: `pnpm ui` - Launches shadcn/ui CLI for adding components

## Project Architecture

This is a personal portfolio website built with:

- **Next.js 15** with App Router and React 19
- **Content Collections** for MDX blog post processing with automatic prev/next linking
- **Biome** for formatting and linting (configured in biome.json)
- **Tailwind CSS** with shadcn/ui components
- **Theme system** using next-themes with light/dark mode support

### Key Structure

- **Blog system**: MDX posts in `content/posts/` are processed by content-collections.ts with automatic sorting by date and prev/next linking
- **Components**:
  - `src/components/sections/` - Page sections (AboutMe, Projects, WorkExperience, etc.)
  - `src/components/mdx/` - Custom MDX components for blog posts
  - `src/components/ui/` - shadcn/ui components
- **Routing**: App Router with dynamic blog post pages at `/blog/[slug]`
- **Utilities**: `src/lib/utils.ts` contains the `sortedPosts` utility and `cn` function

### Content Collections System

Blog posts use a schema with `title`, `description`, `time`, and optional `isDraft` fields. The transform function automatically:

- Compiles MDX content
- Sorts posts by date (newest first)
- Links prev/next posts chronologically
- Generates static params for all posts

### Biome Configuration

Linting rules include:

- Sorted Tailwind classes enforced
- Console logs as warnings
- Unused variables as errors
- Some a11y and security rules disabled for flexibility
