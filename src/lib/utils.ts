import { type ClassValue, clsx } from "clsx";
import { allPosts } from "content-collections";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function parseDate(dateString: string): Date {
  // Remove ordinal suffixes (1st, 2nd, 3rd, 4th, etc.)
  const cleanDate = dateString.replace(/(\d+)(st|nd|rd|th)/g, "$1");
  return new Date(cleanDate);
}

export const sortedPosts = allPosts.sort(
  (a, b) => parseDate(b.time).getTime() - parseDate(a.time).getTime()
);
