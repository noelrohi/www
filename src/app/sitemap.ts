import { projectURL } from "@/lib/constants";
import { sortedPosts } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postRoutes = sortedPosts.map((post) => ({
    url: `${projectURL}/blog/${post._meta.path}`,
    lastModified: new Date(post.time).toISOString().split("T")[0],
  }));
  const routes = ["/"].map((url) => ({
    url: `${projectURL}${url}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes, ...postRoutes];
}
