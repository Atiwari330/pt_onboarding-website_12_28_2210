"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StepProps } from "../types";
import { format } from "date-fns";
import { useConfetti } from "@/hooks/use-confetti";
import { useEffect } from "react";

export function StepThree({ data }: StepProps) {
  const { triggerConfetti } = useConfetti();
  
  useEffect(() => {
    triggerConfetti();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 text-center"
    >
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          You're All Set!
        </h2>
        <p className="text-sm text-muted-foreground">
          We've scheduled your demo for {format(data.preferredTime!, "PPP")}
        </p>
      </div>

      <div className="space-y-4 bg-gray-50 p-6 rounded-lg text-left">
        <h3 className="font-medium">What happens next?</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• You'll receive a calendar invite shortly</li>
          <li>• Our team will prepare a custom demo based on your needs</li>
          <li>• We'll send a reminder 1 hour before the demo</li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2 justify-center">
          <Button variant="outline" className="w-40">
            Add to Google
          </Button>
          <Button variant="outline" className="w-40">
            Add to Outlook
          </Button>
        </div>
        
        <Button variant="link" className="text-sm text-gray-600">
          Add team members to the demo
        </Button>
      </div>
    </motion.div>
  );
}