import Link from "next/link";
import { ShuffleText } from "@/components/shuffle-text";

export function Contact() {
  return (
    <footer className="flex items-baseline justify-between gap-4 border-border/60 border-t pt-4 font-mono text-[10px] text-muted-foreground/70 uppercase tracking-wider">
      <span>
        &copy; {new Date().getFullYear()}{" "}
        <ShuffleText text="Noel Rohi Garcia" />
      </span>
      <Link
        className="transition-colors hover:text-primary"
        href="mailto:noelrohi59@gmail.com?subject=Let%27s%20build%20something"
      >
        Let&apos;s talk →
      </Link>
    </footer>
  );
}
