import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      name: "anirohi",
      description: "Watch anime online with no ads",
      url: "https://github.com/noelrohi/anirohi",
    },
    {
      name: "kd",
      description: "Stream Korean dramas without interruptions",
      url: "https://github.com/noelrohi/kd",
    },
    {
      name: "agentc",
      description: "Directory of AI-powered tools and products",
      url: "https://github.com/noelrohi/agentc",
    },
  ];

  return (
    <section className="animate-slide-from-down-and-fade-3 space-y-4">
      <h2 className="flex items-center gap-2 font-semibold text-base">
        projects <span className="text-foreground/70">🛠️</span>
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            className="group space-y-2 border border-border/50 p-3 transition-colors hover:bg-accent/50"
            href={project.url}
            key={project.name}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h3 className="flex items-center gap-1 font-medium text-sm group-hover:underline">
              {project.name}
              <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </h3>
            <p className="text-foreground/70 text-xs">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
