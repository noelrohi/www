import Link from "next/link";
import { ProfileHeader } from "@/components/sections/profile-header";
import { sortedPosts } from "@/lib/utils";

function AllPosts() {
  return (
    <section className="space-y-6">
      <h2 className="text-muted-foreground text-sm">All Posts</h2>
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <Link
            className="group block"
            href={`/blog/${post._meta.path}`}
            key={post._meta.path}
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <div className="flex shrink-0 items-center gap-2 text-muted-foreground text-sm">
                <time>{post.time}</time>
                {post.isDraft && (
                  <>
                    <span>·</span>
                    <span className="text-primary">Draft</span>
                  </>
                )}
              </div>
            </div>
            <p className="mt-1 text-muted-foreground text-sm">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function PostsPage() {
  return (
    <section className="mx-auto max-w-lg space-y-12 px-6 pb-16">
      <ProfileHeader />
      <AllPosts />
    </section>
  );
}
