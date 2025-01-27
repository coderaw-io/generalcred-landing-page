"use client"


import { CarouselSection } from "@/components/shared/carousel";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { useState } from "react";

export function AuthorizationSection() {
  const { nextStep } = useStepper();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8 md:px-8 2xl:gap-12 2xl:px-0">
      <div className="w-full flex flex-col space-y-6 md:max-w-sm md:w-full lg:max-w-lg 2xl:max-w-2xl">
        <div className="space-y-2">
          <span className="text-2xl text-slate-950 font-extrabold">
            Falta somente uma etapa para que você possa contratar seu empréstimo:
          </span>

          <h1 className="text-2xl text-primary-gold font-extrabold">
            Simular Empréstimo FGTS
          </h1>

          <h4 className="text-lg font-semibold sm:text-xl">
            Para realizar a simulação do seu empréstimo FGTS, autorize o banco
            <strong className="italic text-slate-950">UY3 Sociedade de Crédito</strong> {" "}
            no seu aplicativo do FGTS para consultar informações.
          </h4>
        </div>

        <div className="flex flex-row items-start space-x-2">
          <div>
            <Checkbox
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(!!checked)}
            />
          </div>

          <div className="pt-0.5 leading-none">
            <Label>
              Já autorizei o banco {" "}
              <span className="text-slate-950/70 italic hover:underline">
                UY3 Sociedade de Crédito
              </span>{" "}
              para buscar informações do meu FGTS.
            </Label>
          </div>
        </div>

        <Button
          type="button"
          size="lg"
          className="w-full hover:bg-primary hover:text-primary-gold mt-6"
          onClick={() => nextStep()}
          disabled={!isChecked}
        >
          Conclui esta etapa, quero continuar
        </Button>

        <div className="flex justify-center items-center py-3">
          <small className="text-xs text-center text-muted-foreground">
            Imagens obtidas do aplicativo FGTS da CEF em 20/01/2025, sujeitas a alteração. <br />
          </small>
        </div>
      </div>

      <div className="flex-1 w-full md:max-w-lg md:w-full lg:max-w-xl 2xl:max-w-full">
        <CarouselSection />
      </div>
    </div>
  );
}
