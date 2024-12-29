"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpMetricProps {
  value: number;
  suffix?: string;
  delay?: number;
}

export const CountUpMetric = ({ value, suffix = "", delay = 0 }: CountUpMetricProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          current += stepValue;
          if (current >= value) {
            setCount(value);
            clearInterval(interval);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(interval);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);
  
  return (
    <motion.div
      ref={ref}
      className="font-bold text-4xl text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
};