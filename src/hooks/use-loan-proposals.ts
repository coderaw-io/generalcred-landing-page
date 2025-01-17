import { LoanProposalsContext } from "@/contexts/loan-proposals-context"
import { useContext } from "react"

export function useLoanProposals() {
  const context = useContext(LoanProposalsContext)
  if (context === undefined) {
    throw new Error('useLoanProposals must be used within a LoanProposalsProvider')
  }
  return context
}