import { ShellSection } from "@/components/ui/shell";
import { workExperience } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WorkExperience() {
  return (
    <ShellSection index={3} title="Work Experience">
      {workExperience.map((work) => (
        <div
          className={cn(
            "flex w-full items-center justify-between border-input"
          )}
          key={work.company}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="text-[15px] leading-4">{work.position}</div>
              {work.status && (
                <div className="inline-flex items-center rounded-full border border-input px-2.5 py-0.5 font-normal text-muted-foreground text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  {work.status}
                </div>
              )}
            </div>
            <div className="text-muted-foreground text-sm">{work.company}</div>
          </div>
        </div>
      ))}
    </ShellSection>
  );
}
