"use client";

import { motion } from "framer-motion";

interface FooterColumnProps {
  title: string;
  links: Array<{ label: string; href: string }>;
  index: number;
}

export const FooterColumn = ({ title, links, index }: FooterColumnProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-base text-gray-600 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};