import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      name: "anirohi",
      description: "Watch anime online with no ads",
      url: "https://github.com/noelrohi/anirohi"
    },
    {
      name: "kd",
      description: "Stream Korean dramas without interruptions",
      url: "https://github.com/noelrohi/kd"
    },
    {
      name: "agentc",
      description: "Directory of AI-powered tools and products",
      url: "https://github.com/noelrohi/agentc"
    }
  ];

  return (
    <section className="animate-slide-from-down-and-fade-3 space-y-4">
      <h2 className="text-base font-semibold flex items-center gap-2">
        projects <span className="text-foreground/70">🛠️</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group space-y-2 p-3 border border-border/50 hover:bg-accent/50 transition-colors"
          >
            <h3 className="text-sm font-medium group-hover:underline flex items-center gap-1">
              {project.name}
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-xs text-foreground/70">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}