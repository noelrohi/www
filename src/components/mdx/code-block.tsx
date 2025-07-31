import type * as React from "react";

export function CodeBlock({
  children,
  ...props
}: React.HTMLProps<HTMLPreElement>) {
  return (
    <pre
      className="my-4 flex items-center gap-2 rounded-lg border bg-muted px-4 py-2.5 font-mono font-semibold text-muted-foreground text-sm"
      {...props}
    >
      <span>{children}</span>
    </pre>
  );
}
