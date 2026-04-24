"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils";

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-auto rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--panel)] p-1.5 text-white shadow-[var(--shadow)] backdrop-blur-xl",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex w-full items-center justify-center whitespace-nowrap rounded-[1rem] px-4 py-2.5 text-balance text-sm font-bold uppercase tracking-[0.18em] text-[var(--muted-text)] ring-offset-white transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[var(--accent)] data-[state=active]:text-[var(--button-text)] data-[state=active]:shadow-lg dark:text-white/70",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
