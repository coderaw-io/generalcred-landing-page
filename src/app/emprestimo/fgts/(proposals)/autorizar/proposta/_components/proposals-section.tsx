import { LoanProposals } from "./loan-proposals";

export function ProposalsSection() {
  return (
    <div className="w-full pt-10 sm:pt-0 md:px-8 xl:max-w-8xl xl:w-full xl:mx-auto 2xl:max-w-7xl 2xl:px-0">
      <div className="flex-1 w-full pt-12 sm:pt-6 md:w-full xl:pt-0 xl:max-w-full">
        <LoanProposals />
      </div>
    </div>
  )
}