import fgtsImg from "@/app/assets/images/fgts.jpg";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="flex flex-col md:flex-row items-center justify-between space-x-12 pt-8 pb-24 container mx-auto">
        <div className="md:w-[95%] space-y-6">
          <div className="mt-10 md:mt-0 md:w-1/2">
            <Image
              src="/logo.png"
              alt="Safra Financeira"
              className="w-1/3"
              width={500}
              height={500}
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            ANTECIPE ATÉ{" "}
            <span className="text-primary-gold">7 PARCELAS</span> DO SEU SAQUE
            ANIVERSÁRIO FGTS
          </h1>

          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
              Taxa de juros a partir de 1,29% a.m.*
            </li>
            <li className="flex items-center">
              <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
              Dinheiro rápido mesmo para negativados
            </li>
            <li className="flex items-center">
              <span className="h-3 w-3 bg-primary-gold rounded-full inline-block mr-3"></span>
              É simples e não precisa ter conta no Safra
            </li>
          </ul>

          <Button type="button" className="w-96 text-base py-6 px-6">
            Clique aqui para Contratar
          </Button>
        </div>

        <div className="size-full flex justify-center items-center pt-24">
          <Image
            src={fgtsImg}
            width={1200}
            height={627}
            className="h-full rounded-[0.3rem]"
            alt="Mulher visualizando o FGTS no celular"
          />
        </div>
      </header>

      <div className="bg-background py-16">
        <section className="container max-w-4xl mx-auto py-8">
          <h2 className="text-4xl text-slate-950 font-bold mb-6">
            O que é Empréstimo com Garantia do Saque Aniversário do FGTS?
          </h2>
          <p className="text-lg text-muted-foreground">
            O Empréstimo com Garantia do Saque Aniversário do FGTS é uma
            modalidade de crédito que possibilita a você, que optou pelo saque
            aniversário, antecipar parte do saldo disponível na(s) conta(s)
            vinculada(s) do FGTS, anualmente, no mês de seu aniversário.
          </p>
          <p className="text-lg mt-4">
            Aqui na Safra Financeira, você consegue antecipar até 7 parcelas
            anuais do seu Saque Aniversário com taxa de juros a partir de 1,29%
            a.m., de forma simples e rápida.
          </p>
        </section>
      </div>
    </div>
  );
}
