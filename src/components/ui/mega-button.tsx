"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MegaButtonProps extends HTMLMotionProps<"button"> {
  variant?: "default" | "gradient";
}

export const MegaButton = React.forwardRef<HTMLButtonElement, MegaButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative px-6 py-3 rounded-lg font-bold text-white shadow-lg transition-all duration-300",
          variant === "gradient" && "bg-gradient-to-r from-custom-primary to-custom-secondary",
          "hover:shadow-xl hover:scale-105",
          "active:scale-95",
          className
        )}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 rounded-lg bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </motion.button>
    );
  }
);

MegaButton.displayName = "MegaButton";