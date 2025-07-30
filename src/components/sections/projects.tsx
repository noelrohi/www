import { Building2, MessageSquare } from "lucide-react";

export function Projects() {
  return (
    <section className="animate-slide-from-down-and-fade-3 space-y-4">
      <h2 className="text-base font-semibold flex items-center gap-2">
        projects <span className="text-foreground/70">🛠️</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-foreground/70" />
            <h3 className="text-sm font-medium">build something together</h3>
          </div>
          <p className="text-xs text-foreground/70">
            with experience building production ready apps, my team and i can
            build your next project.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-foreground/70" />
            <h3 className="text-sm font-medium">book a consultation</h3>
          </div>
          <p className="text-xs text-foreground/70">
            need advice on your product? book a consultation to get clarity on
            your next steps.
          </p>
        </div>
      </div>
    </section>
  );
}
