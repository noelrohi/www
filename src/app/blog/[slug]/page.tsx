import { ChevronLeft, MoveLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readingTime } from "reading-time-estimator";
import { MDX } from "@/components/mdx/mdx-components";
import { BlogPagination } from "@/components/sections/blog-pagination";
import { projectURL } from "@/lib/constants";
import { sortedPosts } from "@/lib/utils";

interface BlogPage {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sortedPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

export async function generateMetadata({
  params,
}: BlogPage): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = sortedPosts.find((p) => p._meta.path === slug);
  if (!post) {
    return;
  }

  const { title, time, description, ogUrl } = post;

  const openGraphImages = ogUrl ? [{ url: ogUrl }] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: time,
      url: `${projectURL}/blog/${post._meta.path}`,
      ...(openGraphImages && { images: openGraphImages }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogUrl && { images: [ogUrl] }),
    },
  };
}

export default async function BlogPage({ params }: BlogPage) {
  const { slug } = await params;
  const post = sortedPosts.find((p) => p._meta.path === slug);
  if (!post) {
    return notFound();
  }

  const minutes = readingTime(post.content).minutes;

  return (
    <div className="animation-delay-300 container mx-auto w-full max-w-2xl px-4 py-4 sm:px-7">
      {/* Skip to main content link for screen readers */}
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        href="#main-content"
      >
        Skip to main content
      </a>

      {/* Navigation - Desktop */}
      <nav
        aria-label="Blog navigation"
        className="fixed top-[10rem] right-auto left-[2rem] mt-0 hidden h-full w-fit justify-start space-y-4 text-[14px] transition xl:top-[3rem] xl:right-auto xl:left-[12rem] xl:block"
      >
        <Link
          aria-label="Go back to home page"
          className="group flex cursor-pointer items-center gap-2 text-bold text-muted-foreground hover:text-primary"
          href={"/"}
        >
          <ChevronLeft
            aria-hidden="true"
            className="group-hover:-translate-x-1 ml-1 size-4 transition"
          />{" "}
          <span className="text-sm">Back Home</span>
        </Link>
      </nav>

      {/* Article header */}
      <header className="mb-8">
        {/* Navigation - Mobile */}
        <nav aria-label="Blog navigation" className="mb-4 xl:hidden">
          <Link
            aria-label="Go back to home page"
            className="group flex cursor-pointer items-center gap-2 text-bold text-muted-foreground hover:text-primary"
            href={"/"}
          >
            <MoveLeft
              aria-hidden="true"
              className="group-hover:-translate-x-1 ml-1 size-4 transition"
            />{" "}
            <span className="text-xs">Back Home</span>
          </Link>
        </nav>

        <h1 className="mb-2 font-medium text-lg lg:leading-[1.1]">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center space-x-1.5 text-muted-foreground text-sm">
          <time className="block" dateTime={post.time}>
            {post.time}
          </time>
          <div aria-hidden="true" className="text-[0.6rem]">
            •
          </div>
          <div>
            <span className="sr-only">Estimated reading time: </span>
            {minutes} minute{minutes > 1 ? "s" : ""} read
          </div>
          {post.isDraft && (
            <>
              <div aria-hidden="true" className="text-[0.6rem]">
                •
              </div>
              <div>
                <span className="sr-only">Status: </span>
                Draft
              </div>
            </>
          )}
        </div>
      </header>

      {/* Main article content */}
      <main id="main-content">
        <article>
          <MDX code={post.mdx} />
        </article>
      </main>

      {/** biome-ignore lint/a11y/useFocusableInteractive: * */}
      <div
        aria-hidden="true"
        className="my-10 h-[0.5px] w-full shrink-0 border border-dashed"
        // biome-ignore lint/a11y/useAriaPropsForRole: *
        role="separator"
      />

      {/* Blog pagination navigation */}
      <nav aria-label="Blog post navigation">
        <BlogPagination posts={sortedPosts} />
      </nav>
    </div>
  );
}
