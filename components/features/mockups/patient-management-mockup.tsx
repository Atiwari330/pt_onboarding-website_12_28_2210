"use client";

import { motion } from "framer-motion";

export const PatientManagementMockup = () => {
  return (
    <div className="w-full h-full bg-gray-50 rounded-lg p-4 overflow-hidden">
      <div className="flex flex-col h-full gap-4">
        {/* Header */}
        <div className="h-12 bg-white rounded-lg shadow-sm p-3 flex items-center gap-3">
          <div className="w-24 h-6 bg-gray-100 rounded" />
          <div className="w-24 h-6 bg-gray-100 rounded" />
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-4">
          <motion.div 
            className="space-y-4"
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
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};