import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <section className="container mx-auto max-w-2xl space-y-8 px-4 md:px-6">
      <About />
      <Projects />
      <Writing />
    </section>
  );
}
