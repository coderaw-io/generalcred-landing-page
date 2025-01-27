"use client"

import { CarouselSection } from "@/components/shared/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { TriangleAlertIcon } from "lucide-react";
import { useState } from "react";

export function AuthorizationSection() {
  const { nextStep } = useStepper();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 items-center gap-6 pt-20 sm:pt-0 md:grid-cols-2 md:gap-8 md:px-8 2xl:gap-12 2xl:px-0">
      <div className="w-full flex flex-col space-y-6 px-6 sm:px-0 md:max-w-sm md:w-full lg:pb-24 lg:max-w-lg 2xl:max-w-2xl">
        <div className="flex justify-start items-center pb-2">
          <Badge className="py-1 px-6 bg-primary-gold text-slate-950 font-semibold flex items-center gap-2 hover:bg-primary-gold/40">
            <TriangleAlertIcon className="size-5" />
            <span>
              Informações importantes
            </span>
          </Badge>
        </div>

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

          <div className="flex items-center py-3">
            <small className="text-sm text-center text-muted-foreground font-medium">
              Dúvidas? Siga o passo a passo deslizando para o lado as imagens com as instruções no app.
            </small>
          </div>
        </div>

        <div className="flex flex-row items-start space-x-2">
          <div>
            <Checkbox
              checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(!!checked)}
            />
          </div>

          <div className="leading-none sm:pt-0.5">
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

        <div className="flex flex-col items-center pt-6">
          <small className="text-xs text-center text-muted-foreground">
            Imagens obtidas do aplicativo FGTS da CEF em 20/01/2025, sujeitas a alteração. <br />
          </small>

          <span className="text-xs text-center text-muted-foreground">
            Parcelas do empréstimo debitadas anualmente direto na(s) conta(s) vinculada(s) do FGTS. Para contratar, {" "}
            é necessário optar pelo saque aniversário no App ou site oficial do FGTS e autorizar o Banco J Safra a {" "}
            consultar o valor disponível.
          </span>
        </div>
      </div>

      <div className="flex-1 w-full pt-12 sm:pt-0 md:max-w-lg md:w-full lg:max-w-xl 2xl:max-w-full">
        <div className="px-6 sm:px-0">
          <h4 className="text-2xl text-slate-950 font-bold 2xl:text-3xl xl:pt-6">
            Siga o passo a passo para então, <br />
            verificar as ofertas:
          </h4>
          <p className="text-sm text-muted-foreground">
            Veja abaixo a etapa que está pendente para que possamos prosseguir:
          </p>
        </div>

        <CarouselSection />
      </div>
    </div>
  );
}
