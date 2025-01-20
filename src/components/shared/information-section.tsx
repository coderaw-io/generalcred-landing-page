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

      <Link href="https://wa.me/5511962160535" target="_blank">
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
          Ao optar pelo Saque Aniversário, em caso de rescisão contratual, o direito será apenas
          ao saque da multa rescisória. É possível retornar ao Saque Rescisão, mas a mudança só será
          efetiva no 1º dia do 25º mês após a solicitação, desde que o empréstimo com garantia do
          Saque Aniversário FGTS esteja quitado. A aprovação está sujeita a análise cadastral e condições
          vigentes. Solicite a planilha CET antes da contratação para informações detalhadas sobre os custos.
          Empréstimos concedidos por General Cred, com parcelas debitadas anualmente na conta vinculada do FGTS.
          Para contratar, opte pelo Saque Aniversário e autorize a consulta ao valor disponível no App ou site oficial do FGTS.
        </small>
      </div>
    </div>
  )
}