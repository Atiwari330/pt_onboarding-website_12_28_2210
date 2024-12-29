"use client";

import { motion } from "framer-motion";

export const BenefitIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-14 h-14">
      <motion.div
        className="absolute inset-0 bg-teal-700 bg-opacity-15 rounded-xl"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-teal-700">
        {children}
      </div>
    </div>
  );
};