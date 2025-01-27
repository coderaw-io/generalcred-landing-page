import type { FgtsBalanceResponse } from "@/@types/fgts/loan"
import { create } from "zustand"

export interface ClientData {
  name: string
  cpf: string
  birthdate: string
  phonenumber: string
  email: string
}

interface LoanProposalsStore {
  formData: ClientData | null
  setFormData: (data: ClientData) => void
  loanProposals: FgtsBalanceResponse | null
  setLoanProposals: (proposals: FgtsBalanceResponse) => void
}

export const useLoanProposalsStore = create<LoanProposalsStore>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
  loanProposals: null,
  setLoanProposals: (proposals) => set({ loanProposals: proposals }),
}))