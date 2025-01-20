"use client"

import { HeroSection } from '@/components/shared/hero-section'
import { useLoanProposals } from '@/hooks/use-loan-proposals'
import { formSchema } from '@/schemas/form-schema'
import { BalanceService } from '@/services/balance-service'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'
import { AuthorizationSection } from './authorization-section'
import { PersonalDataForm } from './form-data'
import { FormInit } from './form-init'
import { ProposalsDialog } from './proposals-dialog'
import { Stepper } from './stepper'

export function FormContent() {
  const { setFormData, setLoanProposals } = useLoanProposals()
  const [currentStep, setCurrentStep] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      birthDate: "",
      phonenumber: "",
      email: "",
      privacyPolicy: false,
      contact: false,
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const formData = {
        name: data.name,
        cpf: data.cpf,
        birthDate: data.birthDate,
        phonenumber: data.phonenumber,
        email: data.email
      }

      setFormData(formData)
      const response = await BalanceService.getFgtsBalance(formData)
      setLoanProposals(response)
      toast.success("Busca realizada com sucesso.")
      setIsDialogOpen(true)
    } catch {
      toast.error("Erro ao simular sua proposta! Tente novamente.")
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-ful px-4 py-16 rounded-none sm:py-12 md:px-8 md:py-16 lg:max-w-8xl lg:w-full lg:mx-auto lg:pt-16 lg:pb-24 lg:px-12 2xl:px-0">
          <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
            <HeroSection />
            <div className="bg-white py-8 px-6 space-y-6 shadow-sm sm:py-6 sm:rounded-[0.3rem] md:w-full md:p-10 lg:w-[85%] lg:p-12 xl:p-8">
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
            </div>
          </div>
        </div>

        <ProposalsDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      </form>
    </FormProvider>
  )
}
