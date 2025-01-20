'use client'

import { ScrollArea } from "@/components/ui/scroll-area";
import { useLoanProposals } from "@/hooks/use-loan-proposals";
import { InfoIcon } from "lucide-react";
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
    <div className="mx-auto max-w-5xl space-y-6 px-0 md:px-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-primary-gold sm:text-2xl">
          ENCONTRAMOS ESTAS OPÇÕES PARA VOCÊ!
        </h1>
        <p className="text-muted-slate-100">
          Selecione a que melhor se adequa às suas condições.
        </p>
        <span className="flex items-center gap-1 text-sm text-center text-blue-600 font-medium sm:hidden">
          <InfoIcon className="size-4" />
          Deslize para ver todos os contratos
        </span>
      </div>

      <ScrollArea className="h-[420px] md:h-[510px] lg:pr-6">
        {loanProposals.map((proposal, index) => (
          <ProposalsCard
            key={proposal.product_id}
            index={index}
            paymentScheduleItems={proposal.response.paymentScheduleItems}
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

