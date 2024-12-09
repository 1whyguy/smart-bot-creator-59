"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MegaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "gradient";
}

export const MegaButton = React.forwardRef<HTMLButtonElement, MegaButtonProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "mega-button",
          variant === "gradient" && "bg-gradient-to-r from-custom-primary to-custom-secondary",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

MegaButton.displayName = "MegaButton";