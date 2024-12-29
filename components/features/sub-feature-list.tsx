"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SubFeatureListProps {
  features: string[];
}

export const SubFeatureList = ({ features }: SubFeatureListProps) => {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <motion.li
          key={feature}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
            <Check className="w-3 h-3 text-teal-700" />
          </div>
          <span className="text-gray-600">{feature}</span>
        </motion.li>
      ))}
    </ul>
  );
};