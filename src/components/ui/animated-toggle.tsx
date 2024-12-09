"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const AnimatedToggle = React.forwardRef<HTMLInputElement, AnimatedToggleProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="toggle-wrapper text-base">
          <input
            type="checkbox"
            ref={ref}
            className="toggle-checkbox"
            {...props}
          />
          <div className="toggle-container">
            <div className="toggle-button">
              <div className="toggle-button-circles-container">
                <div className="toggle-button-circle"></div>
                <div className="toggle-button-circle"></div>
                <div className="toggle-button-circle"></div>
              </div>
            </div>
          </div>
        </div>
        {label && <span className="text-sm">{label}</span>}
      </div>
    );
  }
);

AnimatedToggle.displayName = "AnimatedToggle";