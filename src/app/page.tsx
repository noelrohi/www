import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-4 pb-8 sm:px-6 md:pt-12 md:pb-12">
      <div className="grid gap-7 md:grid-cols-[260px_1fr] md:gap-16">
        <aside className="md:sticky md:top-12 md:self-start">
          <About />
        </aside>
        <div className="space-y-7 md:space-y-10">
          <Projects />
          <Experience />
          <Stack />
          <Contact />
        </div>
      </div>
    </div>
  );
}
