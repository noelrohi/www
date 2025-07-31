"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: string }[]
  >([]);
  const [visibleHeadings, setVisibleHeadings] = useState<Set<string>>(
    new Set()
  );

  const getHeadings = useCallback(() => {
    return Array.from(document.querySelectorAll("h1, h2, h3"))
      .filter((heading) => heading.id)
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase(),
        top: (heading as HTMLElement).offsetTop,
      }));
  }, []);

  useEffect(() => {
    const collectedHeadings = getHeadings();
    setHeadings(collectedHeadings);

    let timeoutId: NodeJS.Timeout;
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisibleHeadings((prevVisible) => {
          const newVisible = new Set(prevVisible);
          for (const entry of entries) {
            const headingId = entry.target.id;
            if (entry.isIntersecting) {
              newVisible.add(headingId);
            } else {
              newVisible.delete(headingId);
            }
          }
          return newVisible;
        });
      }, 100);
    };

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px -10% 0px",
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    for (const heading of collectedHeadings) {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [getHeadings]);

  const scroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 100;
      window.scrollTo({
        top,
        behavior: "smooth",
      });

      element.classList.add("highlight-heading");
      setTimeout(() => {
        element.classList.remove("highlight-heading");
      }, 2000);
    }
  }, []);

  const renderHeading = useCallback(
    (heading: { id: string; text: string; level: string }) => {
      const isVisible = visibleHeadings.has(heading.id);

      return (
        <button
          className={cn(
            "block w-full rounded px-2 py-1 text-left text-sm transition-colors duration-200",
            "text-muted-foreground hover:text-foreground",
            {
              "font-medium text-foreground": isVisible,
              "pl-2": heading.level === "h1",
              "pl-4": heading.level === "h2",
              "pl-6": heading.level === "h3",
            }
          )}
          key={heading.id}
          onClick={() => scroll(heading.id)}
          type="button"
        >
          {heading.text}
        </button>
      );
    },
    [visibleHeadings, scroll]
  );

  const headingsList = useMemo(
    () => (
      <div className="space-y-1">
        <div className="mb-3 font-medium text-foreground text-sm">Contents</div>
        <div className="space-y-1">{headings.map(renderHeading)}</div>
      </div>
    ),
    [headings, renderHeading]
  );

  if (headings.length === 0) {
    return null;
  }

  return (
    <motion.nav
      animate={{ opacity: 1 }}
      className="fixed top-24 right-8 hidden w-64 xl:block"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        {headingsList}
      </div>
    </motion.nav>
  );
}
