import { Blocks, Users, LayoutDashboard } from "lucide-react";

export interface Feature {
  title: string;
  heading: string;
  description: string;
  subFeatures: string[];
  mockupComponent: string;
  icon: typeof Blocks;
}

export const features: Feature[] = [
  {
    title: "Design Your Perfect Intake Flow",
    heading: "Design Your Perfect Intake Flow",
    description: "Create custom intake forms that match your exact needs. Drag-and-drop different elements like patient information, insurance details, and consent forms. Preview in real-time and deploy instantly.",
    subFeatures: [
      "Pre-built templates for common intake scenarios",
      "Conditional logic for smart form behavior",
      "Mobile-optimized for patient convenience"
    ],
    mockupComponent: "FormBuilder",
    icon: Blocks
  },
  {
    title: "Smart Provider Matching",
    heading: "Intelligent Provider Assignment",
    description: "Our AI-powered system analyzes patient information and provider profiles to suggest optimal matches. Consider factors like specialty, availability, insurance acceptance, and patient preferences automatically.",
    subFeatures: [
      "Real-time provider availability updates",
      "Automated insurance verification",
      "Patient preference matching"
    ],
    mockupComponent: "ProviderDashboard",
    icon: Users
  },
  {
    title: "Unified Patient Management",
    heading: "Everything in One Place",
    description: "Track patient progress from initial contact through intake completion. Get instant visibility into bottlenecks and automate follow-ups to keep the process moving.",
    subFeatures: [
      "Centralized document management",
      "Automated status updates",
      "Custom workflow triggers"
    ],
    mockupComponent: "PatientManagement",
    icon: LayoutDashboard
  }
];