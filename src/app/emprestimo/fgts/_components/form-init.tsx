import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useStepper } from "@/hooks/use-stepper";
import { LoanSimulator } from "./loan-simulator";

export function FormInit() {
  const { nextStep } = useStepper()

  return (
    <div className="flex flex-col items-center space-y-6 pt-6 pb-12">
      <div className="space-y-2">
        <div className="flex items-center py-3">
          <Badge className="py-1 px-6 bg-slate-950 text-primary-gold font-semibold">
            Antecipação Saque-Aniversário FGTS
          </Badge>
        </div>

        <h1 className="text-xl font-extrabold sm:text-3xl">
          Qual o seu saldo?
        </h1>

        <p className="text-lg text-muted-foreground">
          Informe o seu saldo total acumulado do seu FGTS.
        </p>

        <div className="py-3">
          <LoanSimulator />
        </div>

        <Button
          type="button"
          size="lg"
          className="w-full hover:bg-primary hover:text-primary-gold mt-6"
          onClick={() => nextStep()}
        >
          Simular propostas
        </Button>

        <div className="max-w-md w-full mx-auto pt-6">
          <small className="text-xs text-muted-foreground">
            Contratação sujeita a análise. Os valores na contratação podem mudar. Os valores apresentados são sem IOF.
            * Prazo mínimo de pagamento de 10 minutos e máximo de 24 horas úteis.
          </small>
        </div>
      </div>
    </div>
  )
}