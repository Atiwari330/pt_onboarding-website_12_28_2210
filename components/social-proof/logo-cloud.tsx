"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "Healthcare Center 1",
    url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=120&q=80"
  },
  {
    name: "Medical Group 2",
    url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=120&q=80"
  },
  {
    name: "Health System 3",
    url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=120&q=80"
  },
  {
    name: "Care Network 4",
    url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=120&q=80"
  }
];

export const LogoCloud = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mx-auto max-w-4xl"
    >
      <p className="text-center text-sm text-gray-600 mb-8">
        Trusted by leading healthcare organizations
      </p>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="col-span-1 flex justify-center"
          >
            <img
              className="h-8 object-contain filter grayscale opacity-50 hover:opacity-75 transition-opacity"
              src={logo.url}
              alt={logo.name}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};