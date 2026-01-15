import Link from "next/link";

export function About() {
  return (
    <header className="space-y-6">
      <div className="space-y-1">
        <h1 className="font-medium text-2xl tracking-tight">
          Noel Rohi Garcia
        </h1>
        <p className="text-muted-foreground">Software Engineer</p>
      </div>

      <p className="max-w-md text-muted-foreground leading-relaxed">
        Building calm digital products with a focus on clarity and small moments
        of delight across web, mobile, and AI tools.
      </p>

      <div className="flex gap-6 text-sm">
        <Link
          className="text-foreground transition-colors hover:text-primary"
          href="mailto:noelrohi59@gmail.com"
        >
          Email
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="https://github.com/noelrohi"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="https://x.com/noelrohi"
          rel="noopener noreferrer"
          target="_blank"
        >
          Twitter
        </Link>
      </div>
    </header>
  );
}
