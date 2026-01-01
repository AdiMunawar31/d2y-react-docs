import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { glassBase, glassHover, glassInnerGlow } from "@/lib/glass";

const buttonVariants = cva(
  cn(
    "relative inline-flex items-center justify-center gap-2",
    "font-medium select-none",
    glassBase,
    glassHover,
    glassInnerGlow
  ),
  {
    variants: {
      variant: {
        solid: "bg-white/20",
        ghost: "bg-transparent border-transparent",
        outline: "bg-white/5 border-white/30",
        danger: "bg-red-500/20 border-red-400/30",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-xl",
        md: "h-10 px-4 rounded-2xl",
        lg: "h-12 px-6 text-lg rounded-3xl",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

export interface D2YButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const D2YButton = React.forwardRef<HTMLButtonElement, D2YButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      loading,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size }),
          (disabled || loading) && "opacity-50 pointer-events-none",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-transparent" />
          </span>
        )}

        <span className={cn("flex items-center gap-2", loading && "opacity-0")}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </Comp>
    );
  }
);

D2YButton.displayName = "D2YButton";
