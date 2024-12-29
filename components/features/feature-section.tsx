"use client";

import { motion } from "framer-motion";
import { FeatureShowcase } from "./feature-showcase";
import { features } from "./features-data";
import { ProgressIndicator } from "./progress-indicator";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressIndicator 
          totalSteps={features.length} 
          currentStep={activeFeature} 
          className="mb-16"
        />
        
        <div className="space-y-32">
          {features.map((feature, index) => (
            <FeatureShowcase
              key={feature.title}
              feature={feature}
              index={index}
              isReversed={index % 2 === 1}
              onVisible={() => setActiveFeature(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};