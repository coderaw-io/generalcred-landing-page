import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { ChevronDown } from 'lucide-react';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value).replace('R$', '').trim();
}

interface ProposalsCardProps {
  paymentScheduleItems: number
  totalNetAmountReleased: number
  liquidValue: number
  interestRate: string
  dueDate: string
}

export function ProposalsCard({
  paymentScheduleItems,
  totalNetAmountReleased,
  liquidValue,
  interestRate,
  dueDate,
}: ProposalsCardProps) {
  const formattedDate = format(parseISO(dueDate), "dd/MM/yyyy")

  return (
    <Card className="relative overflow-hidden border-0 bg-slate-50 my-4">
      <div className="absolute left-0 top-0 h-full w-2 bg-primary-gold" />
      <CardHeader className="pb-2 pt-6">
        <CardTitle className="sr-only hidden">Propostas</CardTitle>
        <h2 className="text-xl font-bold text-slate-950">
          PROPOSTA DE {paymentScheduleItems} PARCELAS ANUAIS
        </h2>
      </CardHeader>
      
      <CardContent className="w-full grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              VALOR TOTAL DO <br />
              EMPRÉSTIMO
            </p>
            <p className="font-bold">{formatCurrency(totalNetAmountReleased)}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              VALOR LÍQUIDO  <br />
              LIBERADO
            </p>
            <p className="font-bold">{formatCurrency(liquidValue / 100)}</p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              TAXA DE JUROS (NOMINAL)
            </p>
            <p className="font-bold">{interestRate}% *a.m</p>
            <p className="text-xs text-blue-600">CET (CUSTO EFETIVO TOTAL)</p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              VENCIMENTO DA 1ª PARCELA
            </p>
            <p className="font-bold">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button type="button" variant="link" className="flex items-center text-blue-600">
            VER PARCELAS
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
