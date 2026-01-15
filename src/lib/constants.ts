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
  category: "frontend" | "mobile" | "ai" | "tools";
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
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Swift", category: "mobile" },
  { name: "SwiftUI", category: "mobile" },
  { name: "React Native", category: "mobile" },
  { name: "Claude", category: "ai" },
  { name: "LLMs", category: "ai" },
  { name: "Prompt Engineering", category: "ai" },
  { name: "Agentic Coding", category: "ai" },
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Vercel", category: "tools" },
] satisfies Skill[];

export const projectURL = "https://noelrohi.com";
