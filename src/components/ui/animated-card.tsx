"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}

export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, title, subtitle, icon, imageUrl, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "animated-card bg-white dark:bg-gray-800 rounded-[30px] overflow-hidden",
          "shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]",
          "dark:shadow-[15px_15px_30px_rgba(0,0,0,0.2),-15px_-15px_30px_rgba(255,255,255,0.05)]",
          "transition-all duration-200 hover:cursor-pointer hover:shadow-lg",
          className
        )}
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        {...props}
      >
        <div className="relative h-32 bg-gradient-to-r from-custom-primary to-custom-secondary">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
          <motion.button
            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.button>
        </div>

        <div className="p-5 space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          
          <motion.div 
            className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            {icon}
            <span className="text-sm text-blue-600 dark:text-blue-400">
              Подробнее
            </span>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";