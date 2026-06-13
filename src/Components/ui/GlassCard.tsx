import { cn } from "@/Components/lib/utils";
import { ReactNode } from "react";

export default function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass rounded-2xl p-6 shadow-sm", className)}>
      {children}
    </div>
  );
}
