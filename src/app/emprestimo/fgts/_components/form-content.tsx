"use client"

import { useState } from 'react'
import { PersonalDataForm } from './form-data'
import { Stepper } from './stepper'

export function FormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <form>
      <Stepper
        steps={[
          {
            label: 'Formulário de dados pessoais',
            content: <PersonalDataForm />
          },
        ]}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </form>
  )
}
