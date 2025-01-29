"use client"

import axios from "axios";
import toast from "react-hot-toast";

import { useLoanProposals } from "@/hooks/use-loan-proposals-store";
import { customerSchema, CustomerSchema } from "@/schemas/simulation-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SimulationCustomerAddressData } from "./simulation-customer-address-data";
import { SimulationCustomerBankAccountData } from "./simulation-customer-bank-account-data";
import { SimulationCustomerData } from "./simulation-customer-data";
import { SimulationStepper } from "./simulation-stepper";

export function SimulationContent() {
  const router = useRouter();

  const { formData: personalData, simulationData } = useLoanProposals();

  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<CustomerSchema>({
    resolver: zodResolver(customerSchema),
  });

  const submit = form.handleSubmit(async data => {
    try {
      const formData = {
        customer: {
          birth_date: personalData?.birthdate,
          email: personalData?.email,
          mobile: personalData?.phonenumber,
          rg: data.rg,
          gender_customer: data.gender_customer,
          marital_status: "married",
          mother_name: data.mother_name,
          father_name: data.father_name ? data.father_name : "",
          entity_attributes: {
            name: personalData?.name,
            cpf_cnpj: personalData?.cpf,
            address_attributes: {
              zip_code: data.entity_attributes.address_attributes.zip_code,
              street: data.entity_attributes.address_attributes.street,
              number: data.entity_attributes.address_attributes.number,
              district: data.entity_attributes.address_attributes.district,
              city: data.entity_attributes.address_attributes.city,
              state: data.entity_attributes.address_attributes.state,
              complement: data.entity_attributes.address_attributes.complement
            },
            bank_account_attributes: {
              kind_pix: data.entity_attributes.bank_account_attributes.kind_pix,
              pix: data.entity_attributes.bank_account_attributes.pix,
              kind_account: "pix"
            }
          }
        },
        customer_service_id: simulationData?.simulation.id
      }

      await axios.post("/api/fgts/customer", formData);
      toast.success("Dados do cadastro enviados com sucesso!");
      router.push("/emprestimo/fgts/gerar/contrato")
    } catch {
      toast.error("ERRO AO CADASTRAR SEUS DADOS, TENTE NOVAMENTE.")
    }
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
            {
              label: "Dados do endereço do cliente",
              content: <SimulationCustomerAddressData />
            },
            {
              label: "Dados da conta do cliente",
              content: <SimulationCustomerBankAccountData />
            }
          ]}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />
      </form>
    </FormProvider>
  )
}