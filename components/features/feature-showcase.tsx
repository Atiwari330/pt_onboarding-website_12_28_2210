"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Feature } from "./features-data";
import { MockupDisplay } from "./mockup-display";
import { SubFeatureList } from "./sub-feature-list";

interface FeatureShowcaseProps {
  feature: Feature;
  index: number;
  isReversed: boolean;
  onVisible: () => void;
}

export const FeatureShowcase = ({ 
  feature, 
  index, 
  isReversed,
  onVisible 
}: FeatureShowcaseProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  
  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
    >
      <div className="flex-1">
        <MockupDisplay 
          mockupType={feature.mockupComponent} 
          isReversed={isReversed}
        />
      </div>

      <div className="flex-1 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {feature.heading}
          </h3>
          
          <p className="text-lg text-gray-600 mb-6">
            {feature.description}
          </p>

          <SubFeatureList features={feature.subFeatures} />

          <Button 
            size="lg" 
            className="mt-8 bg-orange-600 hover:bg-orange-700"
          >
            Request Demo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};