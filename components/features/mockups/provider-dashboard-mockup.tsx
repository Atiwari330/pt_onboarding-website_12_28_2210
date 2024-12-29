"use client";

import { motion } from "framer-motion";

export const ProviderDashboardMockup = () => {
  return (
    <div className="w-full h-full bg-gray-50 rounded-lg p-4 overflow-hidden">
      <div className="grid grid-cols-2 gap-4 h-full">
        {/* Provider List */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <motion.div 
            className="space-y-3"
            animate={{ 
              x: [0, 5, 0],
              transition: { 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-100 rounded w-3/4 mb-1" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Matching Stats */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
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
            <div className="h-32 bg-gray-100 rounded-lg" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-16 bg-gray-100 rounded-lg" />
              <div className="h-16 bg-gray-100 rounded-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};