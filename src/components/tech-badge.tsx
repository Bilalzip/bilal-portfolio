import { cn } from "@/app/lib/utils"

type TechBadgeProps = {
  children: React.ReactNode
  variant?: "default" | "outline"
}

export function TechBadge({ children, variant = "default" }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-foreground/10 text-foreground hover:bg-foreground/20",
        variant === "outline" && "border border-border"
      )}
    >
      {children}
    </span>
  )
}