import { CarouselSection } from "@/components/shared/carousel"
import { FAQSection } from "@/components/shared/faq-section"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { LoanProposalsProvider } from "@/contexts/loan-proposals-context"
import { PersonalDataForm } from "./_components/form"

export default function FgtsPage() {
  return (
    <LoanProposalsProvider>
      <div className="min-h-screen overflow-hidden bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950">
        <Header />
        <main className="w-full pt-12 md:pt-16">
          <PersonalDataForm />
        </main>
        <CarouselSection />
        <FAQSection />
        <Footer />
      </div>
    </LoanProposalsProvider>
  )
}