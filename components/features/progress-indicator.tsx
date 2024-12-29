"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  totalSteps: number;
  currentStep: number;
  className?: string;
}

export const ProgressIndicator = ({
  totalSteps,
  currentStep,
  className
}: ProgressIndicatorProps) => {
  return (
    <div className={cn("flex justify-center gap-2", className)}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "w-2 h-2 rounded-full",
            index === currentStep ? "bg-teal-700" : "bg-gray-200"
          )}
          animate={{
            scale: index === currentStep ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};