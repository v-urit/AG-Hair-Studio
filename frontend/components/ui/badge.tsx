import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/15 text-primary hover:bg-primary/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        gold: "border-zinc-500/30 bg-zinc-500/10 text-zinc-900 dark:text-zinc-100 dark:border-zinc-700",
        titanium: "border-zinc-500/30 bg-zinc-500/10 text-zinc-900 dark:text-zinc-100 dark:border-zinc-700",
        vengence: "border-primary/30 bg-primary/10 text-foreground dark:text-white dark:border-white/20",
        cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
        success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
