"use client";

import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import { footerLinks } from "./footer-data";
import { FooterColumn } from "./footer-column";
import { BackToTop } from "./back-to-top";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Activity className="h-6 w-6 text-teal-700" />
              <span className="font-semibold text-xl">HealthFlow</span>
            </div>
            <p className="text-gray-600">
              Streamlining behavioral health intake
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-500 hover:text-teal-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          <FooterColumn
            title="Solutions"
            links={footerLinks.solutions}
            index={1}
          />
          <FooterColumn
            title="Company"
            links={footerLinks.company}
            index={2}
          />
          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
            index={3}
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} HealthFlow. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
};