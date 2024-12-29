"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const FeaturedTestimonial = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative mx-auto max-w-4xl"
    >
      <div className="group relative rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <Quote className="absolute text-teal-600/10 w-24 h-24 -top-4 -left-4 transform -rotate-12" />
        
        <div className="relative">
          <blockquote className="text-xl text-gray-900 italic mb-8">
            "HealthFlow has cut our patient onboarding time in half while improving our provider matching accuracy by 85%. It's completely transformed how we operate."
          </blockquote>
          
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
              alt="Sarah Chen"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">Sarah Chen</div>
              <div className="text-gray-600">Director of Operations at Meridian Behavioral Health</div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=120&q=80"
              alt="Meridian Behavioral Health"
              className="ml-auto h-8 opacity-50"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};