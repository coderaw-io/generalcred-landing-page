"use client"

import { BenefitsSection } from "@/components/shared/benefits-section"
import { CarouselSection } from "@/components/shared/carousel"
import { FAQSection } from "@/components/shared/faq-section"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { InformationSection } from "@/components/shared/information-section"
import { WhatsappButton } from "@/components/shared/whatsapp-button"
import { useLoanProposals } from "@/hooks/use-loan-proposals-store"
import { PersonalDataForm } from "./_components/form-data"

export default function FgtsPage() {
  const { setFormData } = useLoanProposals();

  return (
    <>
      <div className="min-h-screen overflow-hidden bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950">
        <Header />
        <main className="w-full pt-12 md:pt-16">
          <PersonalDataForm setFormData={setFormData} />
        </main>
        <BenefitsSection />
        <div className="bg-slate-50 w-ful px-3 py-16 rounded-none sm:py-0 sm:pt-16 md:px-8 lg:px-12 xl:px-24 xl:py-24 2xl:px-28">
          <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
            <InformationSection />
            <CarouselSection />
          </div>
        </div>
        <FAQSection />
        <Footer />
      </div>
      <WhatsappButton />
    </>
  )
}