import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ShuffleText } from "@/components/shuffle-text";
import { ThemeToggle } from "@/components/theme-toggle";

export function About() {
  return (
    <header className="relative space-y-4 sm:space-y-5">
      <div className="flex items-start gap-3 pr-20 sm:items-center sm:pr-0">
        <Image
          alt="Noel Rohi Garcia"
          className="rounded-full ring-1 ring-border grayscale transition-[filter] duration-500 hover:grayscale-0"
          height={48}
          src="https://github.com/noelrohi.png"
          width={48}
        />
        <div className="min-w-0 space-y-1">
          <h1 className="break-words font-medium text-xl leading-tight tracking-tight sm:leading-none">
            <ShuffleText text="Noel Rohi Garcia" />
          </h1>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-muted-foreground">
            <span>Software Engineer</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Manila
            </span>
          </div>
        </div>
      </div>

      <p className="text-[12px] text-foreground/85 leading-snug sm:text-balance sm:text-[14px] sm:leading-relaxed">
        I build <span className="text-foreground">AI-native tools</span>,{" "}
        <span className="text-foreground">native iOS apps</span>, and{" "}
        <span className="text-foreground">production web platforms</span>.
        Currently shipping at{" "}
        <Link
          className="border-foreground/30 border-b text-foreground transition-colors hover:border-primary hover:text-primary"
          href="https://hov.co"
          rel="noopener noreferrer"
          target="_blank"
        >
          High Output Ventures
        </Link>
        .
      </p>

      <p className="text-balance font-mono text-[11px] text-muted-foreground leading-relaxed">
        <span className="text-emerald-600 dark:text-emerald-400">●</span>{" "}
        Available for select contract work — Q3 2026
      </p>

      <div className="flex flex-col gap-1 font-mono text-xs">
        <Link
          className="text-foreground transition-colors hover:text-primary"
          href="mailto:noelrohi59@gmail.com"
        >
          noelrohi59@gmail.com
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
          <Link
            className="transition-colors hover:text-foreground"
            href="https://github.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="https://x.com/noelrohi"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </Link>
          <Link
            className="transition-colors hover:text-foreground"
            href="/posts"
          >
            Writing
          </Link>
        </div>
      </div>

      <div className="absolute top-0 right-0 sm:static">
        <ThemeToggle />
      </div>
    </header>
  );
}
