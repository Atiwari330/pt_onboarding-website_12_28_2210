"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BenefitIcon } from "./benefit-icon";
import { CountUpMetric } from "./count-up-metric";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  metric: {
    value: number;
    label: string;
  };
  index: number;
}

export const BenefitCard = ({ title, description, icon, metric, index }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="mb-4">
        <BenefitIcon>{icon}</BenefitIcon>
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed mb-6">{description}</p>
      
      <CountUpMetric {...metric} />
      
      <button className="mt-4 inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors group">
        Learn More
        <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.div>
  );
};