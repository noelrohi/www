import type { MetadataRoute } from "next";
import { projectURL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${projectURL}/sitemap.xml`,
    host: projectURL,
  };
}
