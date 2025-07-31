import { type ClassValue, clsx } from "clsx";
import { allPosts } from "content-collections";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
);
