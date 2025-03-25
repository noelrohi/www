import { ShellSection } from "@/components/ui/shell";
import { sortedPosts } from "@/lib/utils";
import Link from "next/link";

export function Writing() {
  const posts = sortedPosts.filter((post) => !post.isDraft);
  return (
    <ShellSection index={5} title="Writing">
      <div className="grid grid-cols-1 gap-6 ">
        {posts.map((post) => (
          <Link key={post._meta.path} href={`/blog/${post._meta.path}`}>
            <span className="text-muted-foreground">
              {new Date(post.time).toISOString().split("T")[0]}
            </span>{" "}
            {post.title}
          </Link>
        ))}
      </div>
    </ShellSection>
  );
}
