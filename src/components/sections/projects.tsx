import { Icons } from "@/components/icons";
import { ShellSection } from "@/components/ui/shell";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <ShellSection index={4} title="Projects">
      <div className="grid grid-cols-1 gap-6 ">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            className="group hover:before:-inset-2.5 relative flex cursor-pointer flex-row items-center justify-between rounded-md duration-300 hover:before:absolute hover:before:rounded-md hover:before:bg-accent/20 hover:before:content-['']"
            rel="noreferrer"
          >
            <div className="z-10 flex flex-col space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-[15px] leading-4">{project.title}</span>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-normal text-muted-foreground text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  {project.status}
                </div>
              </div>
              <span className="prose prose-zinc dark:prose-invert text-[15px]">
                {project.description}
              </span>
            </div>
            <div className="transition duration-150 group-hover:rotate-45">
              <Icons.link className="size-3.5 whitespace-nowrap text-muted-foreground" />
            </div>
          </a>
        ))}
      </div>
    </ShellSection>
  );
}
