import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

interface ProposalsCardProps {
  installments: number
  loanAmount: string
  releasedAmount: string
  interestRate: string
  firstPaymentDate: string
}

export function ProposalsCard({
  installments,
  loanAmount,
  releasedAmount,
  interestRate,
  firstPaymentDate,
}: ProposalsCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-slate-50">
      <div className="absolute left-0 top-0 h-full w-2 bg-primary-gold" />
      <CardHeader className="pb-2 pt-6">
        <h2 className="text-xl font-bold text-slate-950">
          PROPOSTA DE {installments} PARCELAS ANUAIS
        </h2>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              VALOR DO EMPRÉSTIMO
            </p>
            <p className="font-bold">R$ {loanAmount}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              VALOR LÍQUIDO LIBERADO
            </p>
            <p className="font-bold">R$ {releasedAmount}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              TAXA DE JUROS (NOMINAL)
            </p>
            <p className="font-bold">{interestRate}% *a.m</p>
            <p className="text-xs text-blue-600">CET (CUSTO EFETIVO TOTAL)</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              VENCIMENTO DA 1ª PARCELA
            </p>
            <p className="font-bold">{firstPaymentDate}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button type="button" variant="link" className="flex items-center text-blue-600">
            VER PARCELAS
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>

          <Button type="button" variant="outline" className="bg-slate-950 border-none font-bold px-8">
            CONTRATAR
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

