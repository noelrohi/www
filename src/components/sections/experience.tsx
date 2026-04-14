import Link from "next/link";
import { workExperience } from "@/lib/constants";

export function Experience() {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-muted-foreground text-[11px] uppercase tracking-[0.2em]">
        Experience
      </h2>

      <ul className="divide-y divide-border/60">
        {workExperience.map((work) => (
          <li
            className="flex items-baseline justify-between gap-4 py-2.5"
            key={work.company}
          >
            <div className="min-w-0 space-x-2">
              <span className="font-medium text-[14px] tracking-tight">
                {work.position}
              </span>
              {work.companyUrl ? (
                <Link
                  className="text-[13px] text-muted-foreground transition-colors hover:text-primary"
                  href={work.companyUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  — {work.company}
                </Link>
              ) : (
                <span className="text-[13px] text-muted-foreground">
                  — {work.company}
                </span>
              )}
            </div>
            <span className="shrink-0 font-mono text-[11px] text-muted-foreground/70 tabular-nums">
              {work.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
