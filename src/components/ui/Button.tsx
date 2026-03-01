import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-sm text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ffsm-focus disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide",
                    {
                        "bg-ffsm-accent-orange text-white hover:bg-ffsm-accent-orange-dark shadow-sm": variant === "primary",
                        "bg-ffsm-surface text-ffsm-accent-green border border-ffsm-accent-green hover:bg-ffsm-accent-green hover:text-white": variant === "secondary",
                        "border border-ffsm-accent-green text-ffsm-accent-green hover:bg-ffsm-accent-green-dark hover:text-white": variant === "outline",
                        "hover:bg-ffsm-primary-soft text-ffsm-ink hover:text-ffsm-primary": variant === "ghost",
                        "h-9 px-4 py-2": size === "sm",
                        "h-11 px-6 py-2": size === "md",
                        "h-14 px-8 py-3 text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
