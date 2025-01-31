import { useLoanProposalsStore } from "@/store/loan-proposals-store";

export function useLoanProposals() {
  const {
    formData,
    setFormData,
    loanProposals,
    setLoanProposals,
    simulationData,
    setSimulationData,
    contractId,
    setContractId
  } = useLoanProposalsStore();

  return {
    formData,
    setFormData,
    loanProposals,
    setLoanProposals,
    simulationData,
    setSimulationData,
    contractId,
    setContractId,
  };
}