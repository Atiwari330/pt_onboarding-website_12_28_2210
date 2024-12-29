"use client";

import { motion } from "framer-motion";

export const FormBuilderMockup = () => {
  return (
    <div className="w-full h-full bg-gray-50 rounded-lg p-4 overflow-hidden">
      <div className="flex gap-4 h-full">
        {/* Sidebar */}
        <div className="w-48 bg-white rounded-lg p-3 shadow-sm">
          <div className="space-y-3">
            <div className="h-8 bg-gray-100 rounded animate-pulse" />
            <div className="h-8 bg-gray-100 rounded animate-pulse" />
            <div className="h-8 bg-gray-100 rounded animate-pulse" />
          </div>
        </div>

        {/* Main Area */}
        <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
          <motion.div 
            className="space-y-4"
            animate={{ 
              y: [0, -5, 0],
              transition: { 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <div className="h-12 bg-gray-100 rounded-lg w-3/4" />
            <div className="h-12 bg-gray-100 rounded-lg" />
            <div className="h-12 bg-gray-100 rounded-lg w-2/3" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};