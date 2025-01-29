"use client"

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SimulationCustomerData } from "./simulation-customer-data";
import { SimulationStepper } from "./simulation-stepper";

export function SimulationContent() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm();

  const submit = form.handleSubmit(async data => {
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <form
        className="w-full p-6 md:max-w-2xl md:mx-auto lg:max-w-4xl"
        onSubmit={submit}
      >
        <SimulationStepper
          steps={[
            {
              label: "Dados do cliente",
              content: <SimulationCustomerData />
            },
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}