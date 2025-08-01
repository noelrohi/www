import Link from "next/link";
import { ProfileHeader } from "@/components/sections/profile-header";
import { sortedPosts } from "@/lib/utils";

function AllPosts() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold text-base">
          All Posts <span className="text-foreground/70">📝</span>
        </h2>
        <Link
          href="/"
          className="text-foreground/70 text-xs hover:text-foreground hover:underline"
        >
          ← Back to home
        </Link>
      </div>
      <div className="space-y-3">
        {sortedPosts.map((post) => (
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
              <div className="flex items-center gap-2 text-foreground/60 text-xs shrink-0">
                <time>{post.time}</time>
                {post.isDraft && (
                  <>
                    <span>•</span>
                    <span className="text-orange-500">Draft</span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function PostsPage() {
  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <section className="container mx-auto max-w-2xl space-y-8 px-4 md:px-6">
          <ProfileHeader />
          <AllPosts />
        </section>
      </div>
    </div>
  );
}