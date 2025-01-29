"use client"

import { useLoanProposals } from "@/hooks/use-loan-proposals-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  nameTableChosen: z.string().min(1, "Escolha sua proposta.")
});

type FormSchema = z.infer<typeof formSchema>;

export function SimulationData() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { formData: personalData } = useLoanProposals();

  const onSubmit = form.handleSubmit(async data =>  {
    const formData = {
      nameTableChosen: data.nameTableChosen,
      proposalFgts: {
        name: personalData?.name,
        interest_rate: 1.79999999,
        email: personalData?.email,
        cpf_cnpj: personalData?.cpf,
        phone: personalData?.phonenumber,
        phone_store: personalData?.phonenumber,
        phone_seller: personalData?.phonenumber,
        has_secure: false,
        installments: 9,
        birth_date: personalData?.birthdate
      }
    }

    console.log(formData);
  });

  return (
    <form onSubmit={onSubmit} className="p-12">
      <h1>Resumo da Simulação</h1>
      {personalData ? (
        <div>
          <p>Nome: {personalData.name}</p>
          <p>CPF: {personalData.cpf}</p>
          <p>Data de Nascimento: {personalData.birthdate}</p>
          <p>Telefone: {personalData.phonenumber}</p>
          <p>Email: {personalData.email}</p>
        </div>
      ) : (
        <p>Nenhum dado encontrado.</p>
      )}
    </form>
  )
}