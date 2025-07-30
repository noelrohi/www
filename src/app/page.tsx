import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Writing } from "@/components/sections/writing";

export default function Home() {
  return (
    <section className="container max-w-2xl mx-auto px-4 md:px-6 py-12 space-y-8">
      <About />
      <Projects />
      <Writing />
    </section>
  );
}
