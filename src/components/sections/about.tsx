import { Building, Github, Globe, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <header className="space-y-4">
      <section className="flex items-start justify-between animate-slide-from-down-and-fade-1">
        <div className="flex gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://github.com/noelrohi.png"
              alt="Noel Rohi Garcia"
            />
            <AvatarFallback>NR</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-semibold">Noel Rohi Garcia</h1>
            <div className="flex items-center gap-1 text-xs text-foreground/70 mt-0.5">
              <MapPin className="h-3 w-3" />
              <span>Metro Manila, Philippines</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/noelrohi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 text-foreground/70 hover:text-foreground transition-colors" />
          </Link>
          <Link href="mailto:contact@noelrohi.com">
            <Mail className="h-4 w-4 text-foreground/70 hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="https://twitter.com/noelrohi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="h-4 w-4 text-foreground/70 hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://noelrohi.com">
            <Globe className="h-4 w-4 text-foreground/70 hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>
      <section className="animate-slide-from-down-and-fade-2 space-y-4">
        <p className="text-sm text-foreground/70 leading-relaxed">
          I'm a software engineer and content creator passionate about building
          modern web applications, UI/UX and AI solutions while sharing my
          knowledge through tutorials and project walkthroughs.
        </p>
        <div>
          <h2 className="text-base font-semibold mb-2">What I do:</h2>
          <ul className="space-y-1 text-sm text-foreground/70">
            <li>• Software Engineer at{" "}
            <Link
              href="https://scaleforge.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
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
