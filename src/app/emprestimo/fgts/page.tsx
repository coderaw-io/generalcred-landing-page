import Link from "next/link"

import { CarouselSection } from "@/components/shared/carousel"
import { FAQSection } from "@/components/shared/faq-section"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"
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

        <div className="bg-slate-50 w-ful px-4 py-16 rounded-none sm:py-0 sm:pt-16 md:px-8 lg:px-12 2xl:px-24">
          <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
            <div className="flex flex-col sm:hidden xl:flex xl:flex-col xl:relative w-full text-slate-950 space-y-8 ">
              <h1 className="max-w-2xl w-full text-3xl md:text-5xl font-bold leading-tight uppercase">
                Saiba como liberar <br />
                a contratação da <br />
                Antecipação do seu <br />
                <span className="text-primary-gold">empréstimo FGTS</span>
              </h1>

              <p className="max-w-xl w-full text-sm text-muted-foreground sm:text-base lg:text-lg">
                Siga estas etapas simples para autorizar a consulta do seu <strong>FGTS</strong> {" "}
                pelo aplicativo oficial. É necessário autorizar o banco <strong>UY3</strong> para acessar {" "}
                as informações relacionadas ao seu <strong>FGTS</strong>.Arraste as imagens para o lado e {" "}
                siga todos os passos com atenção.
              </p>

              <Link href="#">
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  className="bg-slate-950 border-none mt-6 hover:bg-primary-gold"
                >
                  Dúvidas ou precisa de ajuda? Fale conosco
                </Button>
              </Link>
            </div>

            <CarouselSection />
          </div>
        </div>

        <FAQSection />
        <Footer />
      </div>
    </LoanProposalsProvider>
  )
}