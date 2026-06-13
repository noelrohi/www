import Link from "next/link";
import { workExperience } from "@/lib/constants";

export function Experience() {
  return (
    <section className="space-y-2.5 sm:space-y-3">
      <h2 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.2em]">
        Experience
      </h2>

      <ul className="divide-y divide-border/60">
        {workExperience.map((work) => (
          <li
            className="flex flex-col gap-0.5 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:py-2.5"
            key={work.company}
          >
            <div className="min-w-0 sm:space-x-2">
              <span className="font-medium text-[14px] tracking-tight">
                {work.position}
              </span>
              {work.companyUrl ? (
                <Link
                  className="block text-[13px] text-muted-foreground transition-colors hover:text-primary sm:inline"
                  href={work.companyUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="hidden sm:inline">— </span>
                  {work.company}
                </Link>
              ) : (
                <span className="block text-[13px] text-muted-foreground sm:inline">
                  <span className="hidden sm:inline">— </span>
                  {work.company}
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
