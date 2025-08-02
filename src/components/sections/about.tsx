import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "../icons";

export function About() {
  return (
    <header className="space-y-4">
      <section className="flex items-start justify-between">
        <div className="flex gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              alt="Noel Rohi Garcia"
              src="https://github.com/noelrohi.png"
            />
            <AvatarFallback>NR</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-base">Noel Rohi Garcia</h1>
            <div className="mt-0.5 flex items-center gap-1 text-foreground/70 text-xs">
              <MapPin className="h-3 w-3" />
              <span>Metro Manila, Philippines</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.gitHub className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
          <Link href="mailto:noelrohi59@gmail.com">
            <Mail className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
          <Link
            href="https://x.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.twitter className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
        </div>
      </section>
      <section className="space-y-4">
        <p className="text-foreground/70 text-sm leading-relaxed">
          I'm a software engineer and content creator passionate about building
          modern web applications, UI/UX and AI solutions while sharing my
          knowledge through tutorials and project walkthroughs.
        </p>
        <div>
          <h2 className="mb-2 font-semibold text-base">What I do:</h2>
          <ul className="space-y-1 text-foreground/70 text-sm">
            <li>
              • Software Engineer at{" "}
              <Link
                className="text-foreground hover:underline"
                href="https://scaleforge.dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                ScaleForge
              </Link>
            </li>
            <li>• Writing essays about workflow, LLMs, and engineering</li>
            <li>• Sharing thoughts on AI and development practices</li>
          </ul>
        </div>
      </section>
    </header>
  );
}
