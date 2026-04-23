import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-[1.5rem] border border-[var(--border-soft)] bg-white/70 px-4 py-5 text-base text-[var(--text)] placeholder:text-[var(--muted-text)]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white/6",
        className
      )}
      {...props} />
  );
}

export { Textarea }
