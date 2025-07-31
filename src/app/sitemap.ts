import type { MetadataRoute } from "next";
import { projectURL } from "@/lib/constants";
import { sortedPosts } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const postRoutes = sortedPosts.map((post) => ({
    url: `${projectURL}/blog/${post._meta.path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const routes = ["/", "/posts"].map((url) => ({
    url: `${projectURL}${url}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes, ...postRoutes];
}
