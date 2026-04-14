"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const options = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-border/80 p-0.5"
      role="radiogroup"
    >
      {options.map(({ value, icon: Icon, label }) => {
        const active = mounted && theme === value;
        return (
          <button
            aria-checked={active}
            aria-label={label}
            className={cn(
              "rounded-full p-1 text-muted-foreground transition-colors",
              active
                ? "bg-primary/15 text-primary"
                : "hover:text-foreground",
            )}
            key={value}
            onClick={() => setTheme(value)}
            role="radio"
            type="button"
          >
            <Icon className="h-3 w-3" />
          </button>
        );
      })}
    </div>
  );
}
