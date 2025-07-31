import { FileText, Video } from "lucide-react";
import Link from "next/link";
import { sortedPosts } from "@/lib/utils";

export function Writing() {
  const posts = sortedPosts.filter((post) => !post.isDraft);
  return (
    <section className="animate-slide-from-down-and-fade-4 space-y-4">
      <h2 className="flex items-center gap-2 font-semibold text-base">
        posts <span className="text-foreground/70">📝</span>
      </h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            className="group flex items-start gap-3 transition-opacity hover:opacity-80"
            href={`/blog/${post._meta.path}`}
            key={post._meta.path}
          >
            <FileText className="mt-0.5 h-4 w-4 text-foreground/70" />
            <div className="flex-1">
              <h3 className="font-medium text-sm group-hover:underline">
                {post.title}
              </h3>
              <p className="text-foreground/70 text-xs">{post.description}</p>
            </div>
          </Link>
        ))}

        <Link
          className="group flex items-start gap-3 transition-opacity hover:opacity-80"
          href="https://youtube.com/@noelrohi"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Video className="mt-0.5 h-4 w-4 text-foreground/70" />
          <div className="flex-1">
            <h3 className="font-medium text-sm group-hover:underline">
              want to see video content?
            </h3>
            <p className="text-foreground/70 text-xs">
              my channel has content on web dev, ui/ux & ai topics.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
