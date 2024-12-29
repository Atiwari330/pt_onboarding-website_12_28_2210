"use client";

import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Activity className="h-6 w-6 text-teal-700" />
            <span className="font-semibold text-xl">HealthFlow</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Solutions</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
            <Button variant="default" className="bg-orange-600 hover:bg-orange-700">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};