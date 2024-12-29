"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FormBuilderMockup } from "./mockups/form-builder-mockup";
import { ProviderDashboardMockup } from "./mockups/provider-dashboard-mockup";
import { PatientManagementMockup } from "./mockups/patient-management-mockup";

interface MockupDisplayProps {
  mockupType: string;
  isReversed: boolean;
}

export const MockupDisplay = ({ mockupType, isReversed }: MockupDisplayProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const getMockupComponent = () => {
    switch (mockupType) {
      case "FormBuilder":
        return <FormBuilderMockup />;
      case "ProviderDashboard":
        return <ProviderDashboardMockup />;
      case "PatientManagement":
        return <PatientManagementMockup />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY
      }}
      className="relative rounded-xl shadow-2xl bg-white p-4"
    >
      <div className="relative aspect-[4/3] w-full">
        {getMockupComponent()}
      </div>
    </motion.div>
  );
};