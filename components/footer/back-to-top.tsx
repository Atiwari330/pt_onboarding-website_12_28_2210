"use client";

import { motion, useScroll, useAnimationControls } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect } from "react";

export const BackToTop = () => {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 200) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-teal-700 text-white rounded-full shadow-lg hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  );
};