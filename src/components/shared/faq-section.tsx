import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { HelpCircleIcon } from "lucide-react"
import { Badge } from "../ui/badge"

export function FAQSection() {
  return (
    <div className="bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950 py-12">
      <section
        data-aos="fade-down"
        className="max-w-4xl mx-auto px-4 py-8"
      >
        <div className="flex justify-center items-center pb-12">
          <Badge className="py-1 px-6 bg-primary-gold text-slate-950 font-semibold flex items-center gap-2">
            <HelpCircleIcon className="size-5" />
            <span>
              Informações importantes
            </span>
          </Badge>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-center mb-8 text-white">
          Tire suas dúvidas sobre a antecipação do Saque-Aniversário FGTS
        </h2>

        <Accordion type="single" collapsible className="space-y-4 text-white">
          <AccordionItem value="item-1" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              O que é antecipação do Saque-Aniversário FGTS?
            </AccordionTrigger>
            <AccordionContent>
              A antecipação do Saque-Aniversário é uma oportunidade de sacar até 10 anos do FGTS
              de uma única vez, sendo preciso aderir à modalidade Saque-Aniversário no aplicativo FGTS.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Qual a taxa de juros ao antecipar o Saque-Aniversário?
            </AccordionTrigger>
            <AccordionContent>
              A taxa de juros da antecipação do Saque-Aniversário é a partir de 1,29% ao mês. Custo
              efetivo total a partir de 1,39% ao mês e 18,24% ao ano. Condição válida para vendas realizadas
              diretamente pela Generalcred.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Em quanto tempo o dinheiro cai na conta?
            </AccordionTrigger>
            <AccordionContent>
              Empréstimo FGTS é liberado em até 48 horas em dias úteis, condicionado à formalização e análise.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Como eu sei qual valor está disponível para antecipar?
            </AccordionTrigger>
            <AccordionContent>
              É possível consultar seu saldo do FGTS ligando para o número 0800 726 0207, ou baixando
              o aplicativo do FGTS. Pelo app, considere o passo a passo:

              1. Baixe grátis o aplicativo FGTS;
              2. Na tela inicial, clique em “Primeiro Acesso”;
              3. Leia o contrato e clique em “Aceitar”;
              4. Informe o número do seu NIS e clique em “Continuar”;
              5. Preencha o formulário com seus dados pessoais e clique em “Próximo”;
              6. Crie uma senha e aperte em “Cadastrar”;
              7. Pronto! Você já pode consultar o FGTS usando o aplicativo sempre que precisar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Como faço os pagamentos das parcelas da antecipação do Saque-Aniversário?
            </AccordionTrigger>
            <AccordionContent>
              O pagamento das parcelas da sua Antecipação do Saque-Aniversário é feito anualmente, no mês
              do seu aniversário, de forma automática, mediante repasse feito pela Caixa Econômica Federal á
              Generalcred, até a quitação do contrato.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Quem pode fazer a antecipação do Saque-Aniversário?
            </AccordionTrigger>
            <AccordionContent>
              Todo trabalhador brasileiro que possui contrato de trabalho formal, regido pela
              Consolidação das Leis do Trabalho (CLT) e, ainda, trabalhadores domésticos, rurais, temporários,
              intermitentes, avulsos, safreiros e atletas profissionais têm direito ao FGTS.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Eu posso liquidar parcial ou totalmente a minha antecipação do Saque-Aniversário?
            </AccordionTrigger>
            <AccordionContent>
              Sim, a qualquer momento você pode efetuar a liquidação total ou parcial do seu contrato com a redução
              proporcional dos juros e demais acréscimos, que será calculada com base na taxa de juros pactuada no Contrato
              do empréstimo FGTS. Para isso você deverá procurar nossa Central de atendimento e solicitar seu boleto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              Quantas parcelas do Saque-Aniversário eu posso antecipar?
            </AccordionTrigger>
            <AccordionContent>
              Aqui, na Generalcred, você pode antecipar o valor de até 10 (dez) parcelas anuais do
              seu Saque-Aniversário, desde que haja saldo em sua conta FGTS.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border rounded-lg px-4">
            <AccordionTrigger className="text-left">
              O que é preciso para aderir à antecipação do Saque-Aniversário?
            </AccordionTrigger>
            <AccordionContent>
              Você precisa aderir à modalidade de Saque-Aniversário, no aplicativo FGTS e autorizar a
              realização da consulta do saldo e bloqueio do seu FGTS pela Generalcred.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  )
}

