"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "./faq-accordion";
import { faqItems } from "./faq-data";

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about transforming your intake process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <FAQAccordion items={faqItems.slice(0, 2)} />
          <FAQAccordion items={faqItems.slice(2, 4)} />
        </div>
      </div>
    </section>
  );
};