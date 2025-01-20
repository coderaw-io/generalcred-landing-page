import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value).replace('R$', '').trim();
}

interface PaymentScheduleItem {
  dueDate: string;
  payment: number;
  financeTax: number;
}

interface ProposalsCardProps {
  index: number
  paymentScheduleItems: PaymentScheduleItem[];
  totalNetAmountReleased: number;
  liquidValue: number;
  interestRate: string;
  dueDate: string;
}

export function ProposalsCard({
  index,
  paymentScheduleItems,
  totalNetAmountReleased,
  liquidValue,
  interestRate,
  dueDate,
}: ProposalsCardProps) {
  const formattedDate = format(parseISO(dueDate), "dd/MM/yyyy");

  return (
    <Card className="relative overflow-hidden border-0 bg-slate-50 my-4">
      <div className="absolute left-0 top-0 h-full w-2 bg-primary-gold" />
      <CardHeader className="pb-2 pt-6">
        <CardTitle className="sr-only hidden">Propostas</CardTitle>
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-xl font-bold text-slate-950">
            PROPOSTA DE {paymentScheduleItems.length} PARCELAS
          </h2>

          <Badge className="px-6 bg-slate-950 text-primary-gold font-semibold hover:bg-slate-800">
            Proposta {index + 1}
          </Badge>
        </div>
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

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="payment-schedule">
            <AccordionTrigger className="max-w-40 w-full text-blue-600">
              VER PARCELAS
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {paymentScheduleItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Data: </span>
                      {format(parseISO(item.dueDate), "dd/MM/yyyy")}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Valor: </span>
                      {formatCurrency(item.payment / 100)}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Taxa: </span>
                      1,80% a.m
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

