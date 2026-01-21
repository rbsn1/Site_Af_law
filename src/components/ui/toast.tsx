import * as React from "react";
import { cn } from "@/lib/utils";

export function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={cn(
        "fixed right-6 top-24 z-50 rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
