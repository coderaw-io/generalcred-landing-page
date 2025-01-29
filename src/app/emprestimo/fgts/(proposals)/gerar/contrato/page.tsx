import fgtsImg from "@/assets/images/fgts.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

export default function FgtsGenerateContractPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-primary-gold rounded-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-emerald-300 rounded-full opacity-80" />

          <Image
            src={fgtsImg}
            alt="Fgts image"
            className="relative z-10 w-full max-w-md mx-auto"
            width={704}
            height={528}
            priority
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-primary-gold font-medium">
              Empréstimo assinado com sucesso
            </p>

            <h1 className="text-4xl font-medium text-slate-950">
              Como devo prosseguir agora?
            </h1>

            <p className="text-muted-foreground">
              Você receberá em instantes um SMS com o link para dar andamento no recebimento da sua proposta.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Ser maior de 18 anos e ter optado pelo Saque-Aniversário;",
              "Ter trabalhado de carteira assinada ou possuir saldo FGTS em uma conta;",
              "Possuir uma conta corrente ou poupança;",
              "Já ter Autorizado o Banco Bmg a a ter acesso aos valores e dados do seu FGTS;",
            ].map((requirement, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                  <CheckIcon className="size-4 text-primary-gold" />
                </div>
                <span className="text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>

          <Button
            type="button"
            size="lg"
          >
            Simulação finalizada
          </Button>
        </div>
      </div>
    </div>
  )
}