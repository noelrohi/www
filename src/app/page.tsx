import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <section className="container mx-auto max-w-2xl space-y-16 px-4 pb-8 md:px-6">
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
