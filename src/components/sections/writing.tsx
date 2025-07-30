import { FileText, Video } from "lucide-react";
import Link from "next/link";
import { sortedPosts } from "@/lib/utils";

export function Writing() {
  const posts = sortedPosts.filter((post) => !post.isDraft);
  return (
    <section className="animate-slide-from-down-and-fade-4 space-y-4">
      <h2 className="text-base font-semibold flex items-center gap-2">
        posts <span className="text-foreground/70">📝</span>
      </h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post._meta.path}`}
            className="flex items-start gap-3 group hover:opacity-80 transition-opacity"
          >
            <FileText className="h-4 w-4 text-foreground/70 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-sm font-medium group-hover:underline">
                {post.title}
              </h3>
              <p className="text-xs text-foreground/70">{post.description}</p>
            </div>
          </Link>
        ))}

        <Link
          href="https://youtube.com/@noelrohi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 group hover:opacity-80 transition-opacity"
        >
          <Video className="h-4 w-4 text-foreground/70 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-medium group-hover:underline">
              want to see video content?
            </h3>
            <p className="text-xs text-foreground/70">
              my channel has content on web dev, ui/ux & ai topics.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
