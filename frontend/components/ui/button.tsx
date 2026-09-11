import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border/80 bg-background/80 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/40",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/70 hover:text-accent-foreground",
        luxury:
          "relative overflow-hidden bg-foreground text-background dark:bg-white dark:text-zinc-950 font-semibold shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.98] border border-white/20 transition-all duration-300",
        vengence:
          "relative overflow-hidden bg-foreground text-background dark:bg-white dark:text-zinc-950 font-semibold shadow-xl hover:shadow-2xl hover:brightness-110 active:scale-[0.98] border border-white/20 transition-all duration-300",
        shine:
          "relative overflow-hidden bg-zinc-950 text-zinc-100 border border-zinc-800 hover:border-zinc-700 shadow-lg dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-500 transition-all",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-2xl px-8 text-base tracking-wide font-medium",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
