import { allPosts } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  const latestPost = allPosts[0];
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 flex w-full max-w-[432px] flex-col items-center justify-center">
        <div className="prose prose-zinc dark:prose-invert animate-slide-from-down-and-fade-2 text-pretty text-[15px]">
          Feeling lost? Just go back to <Link href="/">home</Link>.
          <br />
          Wanna read? Check out the <Link href={`/blog/${latestPost._meta.path}`}>latest post</Link>
        </div>
      </div>
    </div>
  );
}
