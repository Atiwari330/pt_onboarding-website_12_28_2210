"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FeatureBullet } from "./feature-bullet";

const features = [
  "Custom demo of your ideal workflow",
  "ROI calculation for your facility",
  "Implementation timeline & pricing"
];

export const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Transform Your Patient Intake Process?
          </h2>
          <p className="text-xl text-gray-600">
            Join leading behavioral health facilities in delivering better patient experiences
          </p>

          <Button 
            size="lg"
            className="mt-8 bg-orange-600 hover:bg-orange-700"
          >
            Schedule a Demo
          </Button>

          <p className="text-sm text-gray-600">
            Free 30-minute consultation
          </p>

          <ul className="space-y-3 mt-8 max-w-md mx-auto text-left">
            {features.map((feature, index) => (
              <FeatureBullet key={index} text={feature} index={index} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};