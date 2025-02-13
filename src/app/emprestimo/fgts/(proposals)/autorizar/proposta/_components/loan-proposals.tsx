"use client"

import toast from "react-hot-toast"

import { FgtsBalance } from "@/@types/fgts/loan"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { dataClient } from "@/lib/axios"
import { useLoanProposalsStore } from "@/store/loan-proposals-store"
import { InfoIcon, LoaderCircleIcon, PencilLineIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ProposalsCard } from "./proposals-card"

interface PaymentScheduleItem {
  payment: number
}

function calculateTotalPayment(
  paymentScheduleItems: PaymentScheduleItem[]
): number {
  return paymentScheduleItems.reduce(
    (total, item) => total + item.payment, 0
  ) / 100;
}

export function LoanProposals() {
  const router = useRouter();

  const { loanProposals, formData: personalData } = useLoanProposalsStore();

  const [selectedTableName, setSelectedTableName] = useState<string | null>(null);
  const [selectedProposalData, setSelectedProposalData] = useState<FgtsBalance | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProposal = (tableName: string, formData: any) => {
    setSelectedTableName(tableName === selectedTableName ? null : tableName);
    setSelectedProposalData(formData);
    if (!selectedTableName) {
      toast.success(
        "Você selecionou sua proposta! Agora, deslize para cima e clique no botão de assinar o contrato da sua proposta.",
        {
          duration: 7000
        }
      );
    } else {
      toast.error("Você deve selecionar pelo menos uma opção das propostas para prosseguir.");
    }
  }

  async function handleSelectedProposal() {
    try {
      setIsLoading(true);

      if (selectedProposalData) {
        const formData = {
          nameTableChosen: selectedTableName,
          proposalFgts: {
            name: personalData?.name,
            interest_rate: 1.79999999,
            email: personalData?.email,
            cpf_cnpj: personalData?.cpf,
            phone: personalData?.phonenumber,
            phone_store: personalData?.phonenumber,
            phone_seller: personalData?.phonenumber,
            has_secure: false,
            installments: 9,
            birth_date: personalData?.birthdate,
          }
        }

        const { data } = await dataClient.post("/fgts/proposal", formData, {
          headers: {
            Token: `${localStorage.getItem("token")}`
          }
        });

        localStorage.setItem("table_name", selectedTableName ? selectedTableName : "");
        localStorage.setItem("simulation_id", data.simulation.id ? data.simulation.id : "")
        router.push("/emprestimo/fgts/simulacao");
      }
    } catch (error) {
      console.log(error);
      toast.error("ERRO AO VALIDAR CONTRATO! TENTE NOVAMENTE.");
      router.push("/error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full space-y-6 px-4 sm:px-0 md:px-6 pb-12">
      <div className="flex flex-col space-y-6 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-primary-gold sm:text-2xl">
            ENCONTRAMOS ESTAS {loanProposals?.length} OPÇÕES PARA VOCÊ!
          </h1>

          <p className="text-muted-slate-100">
            Selecione a proposta que melhor se adequa às suas condições.
          </p>

          <span className="flex items-center gap-1 text-sm text-center text-blue-600 font-medium sm:hidden">
            <InfoIcon className="size-4" />
            Deslize para ver todos os contratos
          </span>
        </div>

        <Button
          type="button"
          variant="outline"
          className="flex items-center gap-2 bg-slate-950 border-none hover:bg-primary-gold hover:text-slate-950 disabled:bg-primary-gold/40 disabled:text-slate-950 disabled:cursor-not-allowed"
          disabled={!selectedTableName}
          onClick={handleSelectedProposal}
        >
          {isLoading ? (
            <>
              Cadastrando proposta
              <LoaderCircleIcon className="size-4 animate-spin" />
            </>
          ) : (
            <>
              Assinar contrato da proposta
              <PencilLineIcon className="size-4" />
            </>
          )}
        </Button>
      </div>

      <ScrollArea className="h-[700px] sm:h-[600px]">
        {loanProposals &&
          loanProposals.map((proposal, index) => (
            <ProposalsCard
              key={proposal.product_id}
              index={index}
              nameTableChosen={proposal.table_name}
              paymentScheduleItems={proposal.response.paymentScheduleItems}
              totalNetAmountReleased={calculateTotalPayment(proposal.response.paymentScheduleItems)}
              liquidValue={proposal.response.liquidValue}
              interestRate={proposal.response.monthlyInterest.toString()}
              dueDate={proposal.response.startDate}
              isSelected={selectedTableName === proposal.table_name}
              onSelect={(tableName) => handleSelectProposal(tableName, proposal.response)}
            />
          ))}
      </ScrollArea>
    </div >
  )
}

