"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureBulletProps {
  text: string;
  index: number;
}

export const FeatureBullet = ({ text, index }: FeatureBulletProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center gap-3"
    >
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
        <Check className="w-3 h-3 text-teal-700" />
      </div>
      <span className="text-gray-600">{text}</span>
    </motion.li>
  );
};