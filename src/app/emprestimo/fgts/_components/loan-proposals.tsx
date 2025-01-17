import { ProposalsCard } from "./proposals-card";

export function LoanProposals() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-6 pb-12">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-primary-gold">
          ENCONTRAMOS ESTAS OPÇÕES PARA VOCÊ!
        </h1>
        <p className="text-muted-slate-100">
          Selecione a que melhor se adequa às suas condições.
        </p>
      </div>
      
      <ProposalsCard
        installments={7}
        loanAmount="815,67"
        releasedAmount="590,25"
        interestRate="1,75"
        firstPaymentDate="01/08/2025"
      />
      
      <ProposalsCard
        installments={6}
        loanAmount="808,74"
        releasedAmount="588,57"
        interestRate="1,75"
        firstPaymentDate="01/08/2025"
      />
    </div>
  )
}