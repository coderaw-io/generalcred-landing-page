import Link from "next/link"

import { PhoneIcon } from "lucide-react"
import { Button } from "../ui/button"

export function InformationSection() {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col sm:hidden xl:flex xl:flex-col xl:relative w-full text-slate-950 space-y-8 2xl:pb-12"
    >
      <h1 className="max-w-2xl w-full text-3xl md:text-5xl font-bold leading-tight uppercase">
        Saiba como liberar <br />
        a contratação da <br />
        Antecipação do seu <br />
        <span className="text-primary-gold">empréstimo FGTS</span>
      </h1>

      <p className="max-w-xl w-full text-sm text-muted-foreground sm:text-base lg:text-lg">
        Siga estas etapas simples para autorizar a consulta do seu <strong>FGTS</strong> {" "}
        pelo aplicativo oficial. É necessário autorizar o banco <br />
        <strong>UY3 Sociedade de Crédito</strong> para acessar {" "}
        as informações relacionadas ao seu <strong>FGTS</strong>.Arraste as imagens para o lado e {" "}
        siga todos os passos com atenção.
      </p>

      <Link href="#">
        <Button
          type="button"
          size="lg"
          variant="outline"
          className="w-[95%] flex justify-center items-center gap-2 text-[13px] bg-slate-950 border-none mt-6 hover:bg-primary-gold sm:max-w-[400px] sm:w-full sm:justify-start sm:items-center sm:text-center sm:text-sm"
        >
          <PhoneIcon className="size-4" />
          Dúvidas ou precisa de ajuda? Fale conosco
        </Button>
      </Link>

      <div className="max-w-2xl w-full py-6">
        <small className="text-xs text-muted-foreground text-center">
          * Ao optar pelo Saque Aniversário, no caso de rescisão do contrato, terá direito apenas ao
          saque da multa rescisória. Quem migrar para o saque aniversário e decidir voltar para a sistemática
          do saque rescisão poderá solicitar a reversão a qualquer momento. Mas a alteração somente surtirá efeito
          no 1º dia do 25º mês da solicitação desde que o Empréstimo com garantia de saque aniversário FGTS esteja
          quitado. Aprovação sujeita a consulta e análise cadastral, de crédito e demais condições do produto vigentes
          no momento da contratação. Exija a sua planilha CET (Custo Efetivo Total) previamente a contratação. A planilha
          tem a finalidade de informar ao consumidor a taxa efetiva total do seu financiamento considerando todos os encargos
          e despesas incidentes na operação (taxa de juros ao mês e ao ano, tarifas, seguro prestamista, registro, etc). Empréstimo
          concedido pelo Banco J. Safra S.A..
          Parcelas do empréstimo debitadas anualmente direto na(s) conta(s) vinculada(s) do FGTS. Para contratar, é necessário optar
          pelo saque aniversário no App ou site oficial do FGTS e autorizar o Banco J Safra a consultar o valor disponível.
        </small>
      </div>
    </div>
  )
}