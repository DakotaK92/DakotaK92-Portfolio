import * as React from "react"

import { cn } from "../../lib/utils";

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[52px] rounded-2xl border border-[var(--border-soft)] bg-white/70 px-4 py-5 text-base text-[var(--text)] placeholder:text-[var(--muted-text)]/80 outline-none backdrop-blur-sm focus:border-[var(--accent)] dark:bg-white/6",
        className
      )}
      {...props} />
  );
}

export { Input }
