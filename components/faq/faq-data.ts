export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "How long does implementation take?",
    answer: "Most facilities are up and running within 2-3 weeks. Our team handles the setup, training, and integration with your existing systems. We provide dedicated support throughout the process."
  },
  {
    question: "Can we customize the intake forms to match our requirements?",
    answer: "Yes, completely. Design your own forms or modify our templates to match your exact workflow. Add, remove, or customize any fields and set conditional logic for different patient types."
  },
  {
    question: "How does the AI provider matching work?",
    answer: "Our system analyzes multiple factors including provider specialties, availability, insurance acceptance, and patient preferences to suggest optimal matches. The matching algorithm learns and improves based on your facility's patterns."
  },
  {
    question: "Is HealthFlow HIPAA compliant?",
    answer: "Yes, HealthFlow is fully HIPAA compliant with enterprise-grade security. We maintain SOC 2 Type II certification and encrypt all data both in transit and at rest."
  }
];