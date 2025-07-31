import { Github, Globe, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            <Github className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
          <Link href="mailto:contact@noelrohi.com">
            <Mail className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
          <Link
            href="https://twitter.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://noelrohi.com">
            <Globe className="h-4 w-4 text-foreground/70 transition-colors hover:text-foreground" />
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
            <li>• Tech content creation and tutorials</li>
            <li>• Sharing cool AI stuff</li>
          </ul>
        </div>
      </section>
    </header>
  );
}
