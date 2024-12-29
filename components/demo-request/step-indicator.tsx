"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function StepIndicator({ currentStep, totalSteps, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex justify-center gap-2", className)}>
      {Array.from({ length: totalSteps }).map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "h-2 rounded-full",
            i + 1 <= currentStep ? "w-8 bg-orange-600" : "w-2 bg-gray-200"
          )}
          initial={false}
          animate={{
            width: i + 1 <= currentStep ? 32 : 8,
            backgroundColor: i + 1 <= currentStep ? "#ea580c" : "#e5e7eb"
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}