"use client";

import { useState } from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { DemoDialog } from "./demo-dialog";

interface DemoButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function DemoButton({ children, ...props }: DemoButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props}>
        {children}
      </Button>
      <DemoDialog open={open} onOpenChange={setOpen} />
    </>
  );
}