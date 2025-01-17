'use client'

import { FgtsBalanceResponse, GetFgtsBalanceRequest } from '@/@types/fgts/loan-proposal'
import { createContext, ReactNode, useState } from 'react'

interface LoanProposalsContextType {
  formData: GetFgtsBalanceRequest | null
  setFormData: (data: GetFgtsBalanceRequest) => void
  loanProposals: FgtsBalanceResponse[]
  setLoanProposals: (proposals: FgtsBalanceResponse[]) => void
}

export const LoanProposalsContext = createContext<LoanProposalsContextType | undefined>(undefined)

export function LoanProposalsProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<GetFgtsBalanceRequest | null>(null)
  const [loanProposals, setLoanProposals] = useState<FgtsBalanceResponse[]>([])

  return (
    <LoanProposalsContext.Provider value={{ formData, setFormData, loanProposals, setLoanProposals }}>
      {children}
    </LoanProposalsContext.Provider>
  )
}

