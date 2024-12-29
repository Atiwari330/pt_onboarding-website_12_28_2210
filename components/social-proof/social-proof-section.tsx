"use client";

import { motion } from "framer-motion";
import { FeaturedTestimonial } from "./featured-testimonial";
import { MetricsBar } from "./metrics-bar";
import { LogoCloud } from "./logo-cloud";
import { Button } from "@/components/ui/button";

export const SocialProofSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4"
          >
            Trusted by Leading Behavioral Health Facilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Join hundreds of facilities that have transformed their patient intake process
          </motion.p>
        </div>

        <FeaturedTestimonial />
        <MetricsBar />
        <LogoCloud />

        <div className="text-center mt-12">
          <Button variant="link" className="text-teal-700 hover:text-teal-800">
            Read More Success Stories →
          </Button>
        </div>
      </div>
    </section>
  );
};