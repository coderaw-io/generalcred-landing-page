"use client"

import authorizationImg from "@/assets/images/authorization.jpeg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";

export function AuthorizationSection() {
  const { nextStep } = useStepper();

  return (
    <>
      <div className="space-y-2">
        <span className="text-2xl font-extrabold">
          Simular Empréstimo FGTS
        </span>
        <h1 className="text-xl font-semibold">
          Para realizar a simulação do seu<br />
          empréstimo FGTS, autorize o banco <br />
          <strong className="italic text-slate-950">UY3 Sociedade de Crédito</strong> no seu<br />
          aplicativo do FGTS para consultar informações.
        </h1>
      </div>

      <div className="bg-slate-100 w-full flex justify-center items-center my-6">
        <Image
          src={authorizationImg}
          width={738}
          height={1339}
          className="w-1/2 object-cover"
          alt="Autorização de consulta no app do FGTS"
        />
      </div>

      <Button
        type="button"
        size="lg"
        className="w-full hover:bg-primary hover:text-primary-gold mt-6"
        onClick={() => nextStep()}
      >
        Próxima Etapa
      </Button>
    </>
  )
}