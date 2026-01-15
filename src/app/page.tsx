import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <section className="mx-auto max-w-lg space-y-16 px-6 py-16 md:py-24">
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
