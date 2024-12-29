"use client";

import { Route, Network, Workflow } from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    title: "Customizable Patient Journey",
    description: "Build your perfect intake process with drag-and-drop simplicity. Whether you need a single comprehensive form or a multi-step journey, adapt the flow to match your facility's exact requirements.",
    icon: <Route className="w-6 h-6" />,
    metric: {
      value: 40,
      label: "faster onboarding"
    }
  },
  {
    title: "AI-Powered Provider Matching",
    description: "Let our intelligent system match patients with the ideal providers based on specialties, availability, and preferences. Optimize provider utilization while improving patient outcomes.",
    icon: <Network className="w-6 h-6" />,
    metric: {
      value: 93,
      label: "provider satisfaction"
    }
  },
  {
    title: "Streamlined Operations",
    description: "Eliminate administrative bottlenecks and reduce data entry errors. Automate insurance verification, document collection, and appointment scheduling in one integrated platform.",
    icon: <Workflow className="w-6 h-6" />,
    metric: {
      value: 60,
      label: "less administrative work"
    }
  }
];

export const BenefitsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};