# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands

- **Dev**: `bun dev` - Runs content-collections watch + Next.js dev server
- **Build**: `bun run build` - Builds content collections + Next.js for production
- **Lint/Format**: `bun fmt` - Runs Biome formatter and linter with auto-fixes
- **Content**: `bun content-collections` - Processes MDX blog posts
- **Add UI**: `bun ui add [component]` - Adds shadcn/ui components

## Code Style & Structure

- Use **functional components** with TypeScript interfaces for props
- Prefer **named exports** over default exports for components
- Use **double quotes** for strings, **2-space indentation**
- Organize imports: external libs → internal components → relative imports
- Use **descriptive variable names** (`isLoading`, `hasError`)
- Favor **Server Components** - minimize `use client`, `useEffect`, `useState`

## Naming Conventions

- **Directories**: lowercase-with-dashes (`auth-wizard`)
- **Components**: PascalCase with named exports (`export function Button()`)
- **Functions**: camelCase (`getUserData`)
- **Files**: kebab-case for components (`user-profile.tsx`)

## TypeScript Guidelines

- Use **interfaces over types** for object shapes
- Avoid enums - use const objects/maps instead
- Import types with `type` keyword: `import { type User } from "./types"`

## Styling & UI (Tailwind v4)

- Use **Tailwind CSS v4** with **shadcn/ui** and **Radix UI** components
- Follow **mobile-first** responsive design approach
- Use `cn()` utility for conditional classes: `cn("base-class", condition && "extra-class")`
- CSS variables defined in `:root` and `.dark` with `hsl()` wrappers
- Theme configuration uses `@theme inline` directive in globals.css
- No JavaScript config file - all configuration in CSS

## Biome Configuration

Linting rules include:

- Sorted Tailwind classes enforced
- Console logs as warnings
- Unused variables as errors
- Some a11y and security rules disabled for flexibility

## Content Guidelines

- Use `**.draft.md` to make a post in draft status.
- Always follow the frontmatter defined in @content-collections.ts
