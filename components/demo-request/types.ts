export interface DemoFormData {
  // Step 1
  fullName: string;
  email: string;
  facilityName: string;
  role: string;
  phone?: string;
  providerCount: string;
  
  // Step 2
  intakeProcess: string;
  otherIntakeProcess?: string;
  challenges: string[];
  otherChallenge?: string;
  preferredTime: Date | null;
}

export interface StepProps {
  data: DemoFormData;
  onUpdate: (data: Partial<DemoFormData>) => void;
  onNext: () => void;
  onBack?: () => void;
  isLoading?: boolean;
}