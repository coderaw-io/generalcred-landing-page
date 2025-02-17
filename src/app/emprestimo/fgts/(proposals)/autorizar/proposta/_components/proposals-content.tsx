"use client"

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ProposalsSection } from "./proposals-section";
import { Stepper } from "./stepper";

export function ProposalsContent() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm();

  return (
    <FormProvider {...form}>
      <form>
        <Stepper
          steps={[
            {
              label: "Propostas disponíveis",
              content: <ProposalsSection />
            }
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}