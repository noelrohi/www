import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-muted-foreground text-sm">Projects</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.title}>
            <Link
              className="group flex items-start justify-between gap-4 transition-colors"
              href={project.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="space-y-1">
                <span className="font-medium transition-colors group-hover:text-primary">
                  {project.title}
                </span>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
