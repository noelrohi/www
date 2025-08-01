import Link from "next/link";
import { sortedPosts } from "@/lib/utils";

export function Writing() {
  const posts = sortedPosts.filter((post) => !post.isDraft);
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold text-base">
          posts <span className="text-foreground/70">📝</span>
        </h2>
        <Link
          href="/posts"
          className="text-foreground/70 text-xs hover:text-foreground hover:underline"
        >
          View all
        </Link>
      </div>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            className="group block border border-border/50 p-3 transition-colors hover:bg-accent/50"
            href={`/blog/${post._meta.path}`}
            key={post._meta.path}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-foreground/70 text-xs mt-0.5">{post.description}</p>
              </div>
              <time className="text-foreground/60 text-xs shrink-0">{post.time}</time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
