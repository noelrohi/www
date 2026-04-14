import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { skills } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stack",
  description: "The full set of tools, frameworks, and infrastructure I use.",
};

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  data: "Data",
  infra: "Infra",
  mobile: "Mobile",
  ai: "AI & Agents",
  dev: "Dev Tools",
  collab: "Collab",
};

const categoryOrder = [
  "frontend",
  "backend",
  "data",
  "infra",
  "mobile",
  "ai",
  "dev",
  "collab",
] as const;

export default function StackPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-8 md:pt-8">
      <div className="mb-6 flex items-baseline justify-between">
        <Link
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground uppercase tracking-wider transition-colors hover:text-primary"
          href="/"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>
        <div className="flex items-center gap-3 font-mono text-[11px] text-muted-foreground/60 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-sm border border-primary/40 bg-primary/20" />
            Daily driver
          </span>
          <span>· {skills.length} items</span>
        </div>
      </div>

      <div className="space-y-4">
        {categoryOrder.map((category) => {
          const items = skills.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <section
              className="grid grid-cols-[88px_1fr] items-baseline gap-4 border-border/60 border-t pt-3"
              key={category}
            >
              <h2 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
                {categoryLabels[category]}
              </h2>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <li key={s.name}>
                    <span
                      className={
                        s.preferred
                          ? "inline-flex rounded-md border border-primary/40 bg-primary/10 px-2 py-0.5 text-[12px] text-primary transition-colors hover:bg-primary/15"
                          : "inline-flex rounded-md border border-border/80 px-2 py-0.5 text-[12px] text-foreground/70 transition-colors hover:border-primary/60 hover:text-primary"
                      }
                    >
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
