import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-8 pb-12 md:pt-12">
      <div className="grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
        <aside className="md:sticky md:top-12 md:self-start">
          <About />
        </aside>
        <div className="space-y-10">
          <Projects />
          <Experience />
          <Stack />
          <Contact />
        </div>
      </div>
    </div>
  );
}
