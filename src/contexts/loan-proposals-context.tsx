'use client'

import { FgtsBalanceResponse } from '@/@types/fgts/loan';
import { createContext, ReactNode, useState } from 'react';

interface ClientData {
  name: string;
  cpf: string;
  birthdate: string;
  phonenumber: string;
  email: string;
}

interface LoanProposalsContextType {
  formData: ClientData | null;
  setFormData: (data: ClientData) => void;
  loanProposals: FgtsBalanceResponse | null;
  setLoanProposals: (proposals: FgtsBalanceResponse) => void;
}

export const LoanProposalsContext = createContext<LoanProposalsContextType | undefined>(undefined);

export function LoanProposalsProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<ClientData | null>(null);
  const [loanProposals, setLoanProposals] = useState<FgtsBalanceResponse | null>(null);

  return (
    <LoanProposalsContext.Provider value={{ formData, setFormData, loanProposals, setLoanProposals }}>
      {children}
    </LoanProposalsContext.Provider>
  )
}

