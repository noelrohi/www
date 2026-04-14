interface Project {
  href: string;
  title: string;
  description: string;
  status: "wip" | "maintained" | "archived";
  tech: string[];
}

interface WorkExperience {
  company: string;
  companyUrl?: string;
  status?: string;
  position: string;
  period?: string;
}

interface Skill {
  name: string;
  category:
    | "frontend"
    | "mobile"
    | "backend"
    | "data"
    | "infra"
    | "ai"
    | "dev"
    | "collab";
  preferred?: boolean;
}

export const projects = [
  {
    title: "anirohi",
    description: "Like Netflix but for anime only - free & no ads",
    href: "https://anirohi.xyz",
    status: "maintained",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "dilag",
    description: "Desktop app that generates UI designs from text descriptions",
    href: "https://dilag.noelrohi.com",
    status: "maintained",
    tech: ["Tauri", "Bun", "React", "Rust"],
  },
  {
    title: "calot",
    description: "iOS calorie tracking app built with SwiftUI",
    href: "https://apps.apple.com/us/app/calot-calorie-tracker/id6754517412",
    status: "maintained",
    tech: ["Swift", "SwiftUI", "iOS"],
  },
  {
    title: "breakpal",
    description: "Block distracting apps and build healthier digital habits",
    href: "https://breakpal.app",
    status: "archived",
    tech: ["Expo", "React Native", "NativeWind"],
  },
] satisfies Project[];

export const workExperience = [
  {
    company: "High Output Ventures",
    companyUrl: "https://hov.co",
    status: "Present",
    position: "Software Engineer",
    period: "2024 - Present",
  },
  {
    company: "CaPEx",
    position: "Web Developer",
    period: "2023 - 2024",
  },
] satisfies WorkExperience[];

export const skills = [
  { name: "TypeScript", category: "frontend", preferred: true },
  { name: "React", category: "frontend", preferred: true },
  { name: "Next.js", category: "frontend", preferred: true },
  { name: "TanStack Start", category: "frontend" },
  { name: "TanStack Router", category: "frontend", preferred: true },
  { name: "Svelte", category: "frontend" },
  { name: "SolidJS", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend", preferred: true },
  { name: "Swift", category: "mobile", preferred: true },
  { name: "SwiftUI", category: "mobile", preferred: true },
  { name: "React Native", category: "mobile", preferred: true },
  { name: "Expo", category: "mobile", preferred: true },
  { name: "NativeWind", category: "mobile", preferred: true },
  { name: "Unistyles", category: "mobile" },
  { name: "Node.js", category: "backend", preferred: true },
  { name: "Hono", category: "backend", preferred: true },
  { name: "tRPC", category: "backend", preferred: true },
  { name: "Zod", category: "backend", preferred: true },
  { name: "Better Auth", category: "backend", preferred: true },
  { name: "Discord.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "PostgreSQL", category: "data", preferred: true },
  { name: "MySQL", category: "data" },
  { name: "MongoDB", category: "data" },
  { name: "SQL", category: "data" },
  { name: "Drizzle", category: "data", preferred: true },
  { name: "TanStack Query", category: "data", preferred: true },
  { name: "Redis", category: "data" },
  { name: "Cloudflare Workers", category: "infra", preferred: true },
  { name: "Vercel", category: "infra", preferred: true },
  { name: "Inngest", category: "infra" },
  { name: "Trigger.dev", category: "infra" },
  { name: "Sentry", category: "infra" },
  { name: "PostHog", category: "infra", preferred: true },
  { name: "Claude Code", category: "ai", preferred: true },
  { name: "Codex", category: "ai" },
  { name: "OpenCode", category: "ai", preferred: true },
  { name: "Pi", category: "ai" },
  { name: "OpenRouter", category: "ai" },
  { name: "Agent Harnesses", category: "ai" },
  { name: "VS Code", category: "dev", preferred: true },
  { name: "Git", category: "dev", preferred: true },
  { name: "GitHub", category: "dev", preferred: true },
  { name: "Biome", category: "dev", preferred: true },
  { name: "oxlint", category: "dev" },
  { name: "Figma", category: "collab", preferred: true },
  { name: "ClickUp", category: "collab" },
  { name: "Discord", category: "collab", preferred: true },
] satisfies Skill[];

export const projectURL = "https://noelrohi.com";
