"use client"

import { useLoanProposals } from "@/hooks/use-loan-proposals-store";

export function SimulationData() {
  const { formData } = useLoanProposals();

  return (
    <div className="p-12">
      <h1>Resumo da Simulação</h1>
      {formData ? (
        <div>
          <p>Nome: {formData.name}</p>
          <p>CPF: {formData.cpf}</p>
          <p>Data de Nascimento: {formData.birthdate}</p>
          <p>Telefone: {formData.phonenumber}</p>
          <p>Email: {formData.email}</p>
        </div>
      ) : (
        <p>Nenhum dado encontrado.</p>
      )}
    </div>
  )
}