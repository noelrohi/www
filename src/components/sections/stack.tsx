import Link from "next/link";
import { skills } from "@/lib/constants";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  ai: "AI & Agents",
};

const previewOrder = ["frontend", "backend", "ai"] as const;

export function Stack() {
  return (
    <section className="space-y-5">
      <div className="flex items-baseline justify-between">
        <h2 className="font-mono text-muted-foreground text-[11px] uppercase tracking-[0.2em]">
          Stack
        </h2>
        <Link
          className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider transition-colors hover:text-primary"
          href="/stack"
        >
          View All →
        </Link>
      </div>

      <div className="space-y-4">
        {previewOrder.map((category) => {
          const items = skills.filter(
            (s) => s.category === category && s.preferred,
          );
          return (
            <div className="space-y-2" key={category}>
              <h3 className="font-medium text-[13px] tracking-tight">
                {categoryLabels[category]}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <li key={s.name}>
                    <span className="inline-flex rounded-md border border-border/80 px-2.5 py-1 text-[12px] text-foreground/85 transition-colors hover:border-primary/60 hover:text-primary">
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
