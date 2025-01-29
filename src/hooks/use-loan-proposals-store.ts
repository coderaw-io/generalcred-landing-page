import { useLoanProposalsStore } from "@/store/loan-proposals-store";

export function useLoanProposals() {
  const {
    formData,
    setFormData,
    loanProposals,
    setLoanProposals,
    simulationData,
    setSimulationData
  } = useLoanProposalsStore();

  return {
    formData,
    setFormData,
    loanProposals,
    setLoanProposals,
    simulationData,
    setSimulationData
  };
}