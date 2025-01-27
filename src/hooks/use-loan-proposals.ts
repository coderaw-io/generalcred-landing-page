import { LoanProposalsContext } from "@/contexts/loan-proposals-context"
import { useContext } from "react"

export function useLoanProposalsContext() {
  const context = useContext(LoanProposalsContext)
  if (context === undefined) {
    throw new Error('useLoanProposalsContext must be used within a LoanProposalsProvider')
  }
  return context
}