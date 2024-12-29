"use client";

import { motion } from "framer-motion";
import { CountUpMetric } from "./count-up-metric";

const metrics = [
  {
    value: 2500,
    label: "Patients Onboarded Monthly",
    suffix: "+"
  },
  {
    value: 150,
    label: "Healthcare Facilities",
    suffix: "+"
  },
  {
    value: 92,
    label: "Reduction in Intake Delays",
    suffix: "%"
  }
];

export const MetricsBar = () => {
  return (
    <div className="mt-16 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
      >
        {metrics.map((metric, index) => (
          <div 
            key={metric.label}
            className="text-center px-4"
          >
            <CountUpMetric
              value={metric.value}
              suffix={metric.suffix}
              delay={index * 0.1}
            />
            <p className="text-gray-600 mt-2">{metric.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};