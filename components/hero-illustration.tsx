"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Node = ({ x, y, size = 20, delay = 0 }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={size}
    fill="#0F766E"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  />
);

const Connection = ({ start, end, delay = 0 }) => (
  <motion.line
    x1={start.x}
    y1={start.y}
    x2={end.x}
    y2={end.y}
    stroke="#1E40AF"
    strokeWidth="2"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration: 1, delay }}
  />
);

export const ProcessIllustration = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 400">
      <Connection start={{ x: 100, y: 100 }} end={{ x: 200, y: 200 }} delay={0.2} />
      <Connection start={{ x: 200, y: 200 }} end={{ x: 300, y: 150 }} delay={0.4} />
      <Connection start={{ x: 200, y: 200 }} end={{ x: 300, y: 250 }} delay={0.6} />
      
      <Node x={100} y={100} delay={0} />
      <Node x={200} y={200} delay={0.2} />
      <Node x={300} y={150} delay={0.4} />
      <Node x={300} y={250} delay={0.6} />
    </svg>
  );
};