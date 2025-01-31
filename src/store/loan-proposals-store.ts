import { SimulationResponse } from "@/@types/fgts/customer"
import type { FgtsTable } from "@/@types/fgts/loan"
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
  loanProposals: FgtsTable[] | null
  setLoanProposals: (proposals: FgtsTable[]) => void
  simulationData: SimulationResponse | null
  setSimulationData: (data: SimulationResponse) => void
  contractId: string | null
  setContractId: (id: string) => void
}

export const useLoanProposalsStore = create<LoanProposalsStore>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
  loanProposals: null,
  setLoanProposals: (proposals) => set({ loanProposals: proposals }),
  simulationData: null,
  setSimulationData: (data) => set({ simulationData: data }),
  contractId: null,
  setContractId: (id) => set({ contractId: id }),
}))