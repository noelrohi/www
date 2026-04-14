import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

const statusDot: Record<string, string> = {
  maintained: "text-emerald-600 dark:text-emerald-400",
  wip: "text-amber-600 dark:text-amber-400",
  archived: "text-muted-foreground/50",
};

export function Projects() {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-muted-foreground text-[11px] uppercase tracking-[0.2em]">
        Selected Work
      </h2>

      <ul className="divide-y divide-border/60">
        {projects.map((project) => (
          <li key={project.title}>
            <Link
              className="group flex items-baseline justify-between gap-4 py-2.5"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex min-w-0 items-baseline gap-2">
                <span
                  aria-hidden
                  className={cn("text-[10px]", statusDot[project.status])}
                >
                  ●
                </span>
                <span className="font-medium text-[14px] tracking-tight transition-colors group-hover:text-primary">
                  {project.title}
                </span>
                <span className="truncate text-[13px] text-muted-foreground">
                  — {project.description}
                </span>
              </div>
              <div className="flex shrink-0 items-baseline gap-2">
                <span className="hidden font-mono text-[10px] text-muted-foreground/60 uppercase tracking-wider sm:inline">
                  {project.tech[0]}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
