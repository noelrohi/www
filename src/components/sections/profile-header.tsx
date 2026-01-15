import Link from "next/link";

export function ProfileHeader() {
  return (
    <header className="space-y-4 pt-8">
      <div className="space-y-1">
        <h1 className="font-medium text-xl tracking-tight">Noel Rohi Garcia</h1>
        <p className="text-muted-foreground text-sm">Software Engineer</p>
      </div>
      <div className="flex gap-6 text-sm">
        <Link
          className="text-muted-foreground transition-colors hover:text-foreground"
          href="/"
        >
          Home
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
