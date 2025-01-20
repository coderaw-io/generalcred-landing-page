"use client"

import { HeroSection } from '@/components/shared/hero-section'
import { useState } from 'react'
import { AuthorizationSection } from './authorization-section'
import { PersonalDataForm } from './form-data'
import { FormInit } from './form-init'
import { Stepper } from './stepper'

export function FormContent() {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="w-ful px-4 py-16 rounded-none sm:py-12 md:px-8 md:py-16 lg:max-w-8xl lg:w-full lg:mx-auto lg:pt-16 lg:pb-24 lg:px-12 2xl:px-0">
      <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
        <HeroSection />
        <div className="bg-white py-8 px-6 space-y-6 shadow-sm sm:py-6 sm:rounded-[0.3rem] md:w-full md:p-10 lg:w-[85%] lg:p-12 xl:p-8">
          <form>
            <Stepper
              steps={[
                {
                  label: 'Inicio da simulação',
                  content: <FormInit />
                },
                {
                  label: 'Autorização da consulta no app do FGTS',
                  content: <AuthorizationSection />
                },
                {
                  label: 'Formulário de dados pessoais',
                  content: <PersonalDataForm />
                },
              ]}
              currentStep={currentStep}
              onStepChange={setCurrentStep}
            />
          </form>
        </div>
      </div>
    </div>
  )
}
