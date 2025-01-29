"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { CircleCheckIcon } from "lucide-react";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
    .format(value)
    .replace("R$", "")
    .trim()
}

interface PaymentScheduleItem {
  dueDate: string
  payment: number
  financeTax: number
}

interface ProposalsCardProps {
  index: number
  nameTableChosen: string
  paymentScheduleItems: PaymentScheduleItem[]
  totalNetAmountReleased: number
  liquidValue: number
  interestRate: string
  dueDate: string
  isSelected: boolean
  onSelect: (proposalId: string) => void
}

export function ProposalsCard({
  index,
  nameTableChosen,
  paymentScheduleItems,
  totalNetAmountReleased,
  liquidValue,
  dueDate,
  isSelected,
  onSelect,
}: ProposalsCardProps) {
  const formattedDate = format(parseISO(dueDate), "dd/MM/yyyy");
  const handleSelectProposal = () => onSelect(nameTableChosen);

  return (
    <Card className="relative overflow-hidden border-0 bg-background my-4">
      <div className="absolute left-0 top-0 h-full w-2 bg-primary-gold" />

      <CardHeader className="pb-2 pt-6">
        <CardTitle className="sr-only hidden">Propostas</CardTitle>
        <div className="flex justify-between items-center pb-4">
          <h2 className="text-lg font-bold text-slate-950 sm:text-xl">
            PROPOSTA DE {paymentScheduleItems.length} PARCELAS
          </h2>

          <Badge className="bg-slate-950 text-primary-gold text-[11px] font-semibold px-6 w-36 hover:bg-slate-800 hover:bg-primary-gold/40 sm:text-xs sm:w-auto">
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

            <p className="font-bold">
              {formatCurrency(totalNetAmountReleased)}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              VALOR LÍQUIDO <br />
              LIBERADO
            </p>

            <p className="font-bold">
              {formatCurrency(liquidValue / 100)}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              TAXA DE JUROS (NOMINAL)
            </p>

            <p className="font-bold">
              1,80% *a.m
            </p>

            <p className="text-[10px] font-medium text-blue-600">
              CET (CUSTO EFETIVO TOTAL)
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] leading-snug text-muted-foreground">
              VENCIMENTO DA 1ª PARCELA
            </p>

            <p className="font-bold">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="payment-schedule" className="border-none">
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

          <Button
            type="button"
            variant="secondary"
            className={cn(
              "flex items-center gap-2 bg-border",
              isSelected ? "bg-primary-gold hover:bg-primary-gold/80" : ""
            )}
            onClick={handleSelectProposal}
          >
            {isSelected ? (
              <>
                <CircleCheckIcon className="size-4" />
                Proposta selecionada
              </>
            ) : (
              "Selecionar proposta"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}