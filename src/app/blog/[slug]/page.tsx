import { MDX } from "@/components/mdx/mdx-components";
import { BlogPagination } from "@/components/sections/blog-pagination";
import { TableOfContents } from "@/components/sections/table-of-content";
import { projectURL } from "@/lib/constants";
import { allPosts } from "content-collections";
import { ChevronLeft, MoveLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readingTime } from "reading-time-estimator";

interface BlogPage {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: BlogPage): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) {
    return;
  }

  const { title, time, description } = post;
  const ogImage = `https://og.noelrohi.com/blog?title=${title}&date=${time}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: time,
      url: `${projectURL}/blog/${post._meta.path}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPage({ params }: BlogPage) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);
  if (!post) return notFound();

  const minutes = readingTime(post.content).minutes;

  return (
    <div className="animation-delay-300 w-full px-4 py-4 sm:px-7 ">
      <div className="fixed top-[10rem] right-auto left-[2rem] mt-0 hidden h-full w-fit justify-start space-y-4 text-[14px] transition xl:top-[3rem] xl:right-auto xl:left-[12rem] xl:block ">
        <Link
          href={"/"}
          className="group flex cursor-pointer items-center gap-2 text-bold text-muted-foreground hover:text-primary"
        >
          <ChevronLeft className="group-hover:-translate-x-1 ml-1 size-4 transition" />{" "}
          <span>Back Home</span>
        </Link>
      </div>

      <div className="mb-8">
        <Link
          href={"/"}
          className=" group mb-4 flex cursor-pointer items-center gap-2 text-bold text-muted-foreground hover:text-primary xl:hidden"
        >
          <MoveLeft className="group-hover:-translate-x-1 ml-1 size-4 transition" />{" "}
          <span className="text-xs">Back Home</span>
        </Link>
        <h1 className="mb-2 font-medium text-lg lg:leading-[1.1]">{post.title}</h1>
        <div className=" flex flex-wrap items-center space-x-1.5 text-muted-foreground text-sm">
          <time dateTime="2024-10-06T00:00:00.000Z" className="block">
            {post.time}
          </time>
          <div className="text-[0.6rem]">•</div>
          <div>
            {minutes} minute{minutes > 1 ? "s" : ""} read
          </div>
          {post.isDraft && (
            <>
              <div className="text-[0.6rem]">•</div>
              <div>Draft</div>
            </>
          )}
        </div>
      </div>

      <MDX code={post.mdx} />
      <div className="my-10 h-[0.5px] w-full shrink-0 border border-dashed" />
      <BlogPagination posts={allPosts} />
      <TableOfContents />
    </div>
  );
}
