"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { StepOne } from "./steps/step-one";
import { StepTwo } from "./steps/step-two";
import { StepThree } from "./steps/step-three";
import { StepIndicator } from "./step-indicator";
import { DemoFormData } from "./types";
import { useToast } from "@/hooks/use-toast";

const INITIAL_DATA: DemoFormData = {
  fullName: "",
  email: "",
  facilityName: "",
  role: "",
  phone: "",
  providerCount: "",
  intakeProcess: "",
  otherIntakeProcess: "",
  challenges: [],
  otherChallenge: "",
  preferredTime: null,
};

export function DemoDialog({ open, onOpenChange }: { 
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<DemoFormData>(INITIAL_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const updateFormData = (data: Partial<DemoFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = async () => {
    if (step === 2) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStep(step + 1);
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setStep(1);
      setFormData(INITIAL_DATA);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <StepIndicator currentStep={step} totalSteps={3} className="mb-8" />
        
        {step === 1 && (
          <StepOne
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
          />
        )}
        
        {step === 2 && (
          <StepTwo
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
            isLoading={isLoading}
          />
        )}
        
        {step === 3 && (
          <StepThree
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}