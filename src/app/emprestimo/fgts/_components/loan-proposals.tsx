'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { useLoanProposals } from "@/hooks/use-loan-proposals";
import { ProposalsCard } from "./proposals-card";

interface PaymentScheduleItem {
  payment: number;
}

function calculateTotalPayment(paymentScheduleItems: PaymentScheduleItem[]): number {
  return paymentScheduleItems.reduce((total, item) => total + item.payment, 0) / 100;
}

export function LoanProposals() {
  const { loanProposals } = useLoanProposals()

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary-gold">
          ENCONTRAMOS ESTAS OPÇÕES PARA VOCÊ!
        </h1>
        <p className="text-muted-slate-100">
          Selecione a que melhor se adequa às suas condições.
        </p>
      </div>

      <ScrollArea className="h-[510px] pr-6">
        {loanProposals.map((proposal) => (
          <ProposalsCard
            key={proposal.product_id}
            paymentScheduleItems={proposal.response.paymentScheduleItems.length}
            totalNetAmountReleased={calculateTotalPayment(proposal.response.paymentScheduleItems)}
            liquidValue={parseFloat(proposal.response.liquidValue)}
            interestRate={(parseFloat(proposal.response.monthlyInterest) * 100).toFixed(2)}
            dueDate={proposal.response.startDate}
          />
        ))}
      </ScrollArea>
    </div>
  )
}

