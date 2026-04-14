import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { sortedPosts } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building, shipping, and the tools I reach for.",
};

function parseYear(time: string): string {
  const cleaned = time.replace(/(\d+)(st|nd|rd|th)/g, "$1");
  const date = new Date(cleaned);
  return Number.isNaN(date.getTime())
    ? "—"
    : date.getFullYear().toString();
}

export default function PostsPage() {
  const grouped = sortedPosts.reduce<Record<string, typeof sortedPosts>>(
    (acc, post) => {
      const year = parseYear(post.time);
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {},
  );

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-3xl px-6 pt-6 pb-16 md:pt-8">
      <div className="mb-8 flex items-baseline justify-between">
        <Link
          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground uppercase tracking-wider transition-colors hover:text-primary"
          href="/"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </Link>
        <span className="font-mono text-[11px] text-muted-foreground/60 uppercase tracking-wider">
          Writing · {sortedPosts.length} posts
        </span>
      </div>

      <div className="space-y-8">
        {years.map((year) => (
          <section
            className="grid grid-cols-[60px_1fr] gap-4 border-border/60 border-t pt-4 md:gap-8"
            key={year}
          >
            <h2 className="pt-1 font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em] tabular-nums">
              {year}
            </h2>
            <ul className="divide-y divide-border/60">
              {grouped[year].map((post) => (
                <li key={post._meta.path}>
                  <Link
                    className="group flex items-baseline justify-between gap-4 py-3"
                    href={`/blog/${post._meta.path}`}
                  >
                    <div className="min-w-0 space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-[14px] tracking-tight transition-colors group-hover:text-primary">
                          {post.title}
                        </h3>
                        {post.isDraft && (
                          <span className="rounded-md border border-amber-500/40 bg-amber-500/10 px-1.5 font-mono text-[10px] text-amber-600 uppercase tracking-wider dark:text-amber-400">
                            Draft
                          </span>
                        )}
                      </div>
                      <p className="truncate text-[13px] text-muted-foreground">
                        {post.description}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-baseline gap-2 font-mono text-[11px] text-muted-foreground/70 tabular-nums">
                      <time>{post.time}</time>
                      <ArrowUpRight className="h-3 w-3 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {sortedPosts.length === 0 && (
          <p className="border-border/60 border-t pt-6 text-center text-muted-foreground text-sm">
            No posts yet — check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
