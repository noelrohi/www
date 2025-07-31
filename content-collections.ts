import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    time: z.string(),
    isDraft: z.boolean().optional().default(false),
    ogUrl: z.string().optional(),
  }),
  transform: async (document, { collection, cache }) => {
    const mdx = await compileMDX({ cache }, document);
    const docs = await collection.documents();
    // Sort docs by date descending (newest first)
    const sortedDocs = [...docs].sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
    );
    const idx = sortedDocs.findIndex((d) => document._meta.filePath === d._meta.filePath);

    return {
      ...document,
      mdx,
      // Use sortedDocs instead of docs for prev/next to maintain chronological order
      prev: idx > 0 ? sortedDocs[idx - 1] : null,
      next: idx < sortedDocs.length - 1 ? sortedDocs[idx + 1] : null,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
