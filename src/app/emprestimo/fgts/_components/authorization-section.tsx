"use client"

import authorizationImg from "@/assets/images/authorization.jpeg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useStepper } from "@/hooks/use-stepper";
import { useState } from "react";

export function AuthorizationSection() {
  const { nextStep } = useStepper();
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col space-y-6">
      <div className="space-y-2">
        <span className="text-2xl text-primary-gold font-extrabold">Passo 1</span>
        <h1 className="text-2xl font-extrabold">Simular Empréstimo FGTS</h1>
        <h4 className="text-xl font-semibold">
          Para realizar a simulação do seu empréstimo FGTS, autorize o banco
          <strong className="italic text-slate-950">UY3 Sociedade de Crédito</strong> {" "}
          no seu aplicativo do FGTS para consultar informações.
        </h4>
      </div>

      <div className="bg-slate-100 w-full flex justify-center items-center my-6">
        <Image
          src={authorizationImg}
          width={738}
          height={1339}
          className="w-[37%] object-cover"
          alt="Autorização de consulta no app do FGTS"
        />
      </div>

      <div className="flex flex-row items-start space-x-2">
        <div>
          <Checkbox
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(!!checked)}
          />
        </div>

        <div className="space-y-1 leading-none">
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
        Próxima Etapa
      </Button>

      <div className="flex justify-center items-center py-3">
        <small className="text-xs text-center text-muted-foreground">
          Imagens obtidas do aplicativo FGTS da CEF em 20/01/2025, sujeitas a alteração. <br />
        </small>
      </div>
    </div>
  );
}
