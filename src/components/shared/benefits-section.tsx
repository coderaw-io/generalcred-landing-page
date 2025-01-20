import { Card, CardContent } from "@/components/ui/card"
import { Calendar, DollarSign, Percent, RocketIcon, User } from "lucide-react"
import { Badge } from "../ui/badge"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Sem parcelas mensais",
      description: "O valor é descontado direto do seu FGTS sem comprometer sua renda.",
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Taxa de juros mais atrativas",
      description: "Juros a partir de 1,29% ao mês. Custo efetivo total de 1,59% ao mês e 21,15% ao ano.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Dinheiro na conta rápido",
      description: "liberação em até 48 horas em dias úteis, condicionado a formalização e análise.",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "Você no controle",
      description: "Viajar, investir e até quitar dívidas. Liberdade para usar o valor como quiser!",
    },
  ]

  return (
    <section
      data-aos="fade-left"
      className="bg-gradient-to-r from-[#000814] via-[#051923] to-slate-950 w-full py-16 px-4 xl:pt-16 xl:pb-20"
    >
      <div className="mx-auto max-w-8xl space-y-8">
        <div className="flex justify-center items-center">
          <Badge className="py-1 px-6 bg-primary-gold text-slate-950 font-semibold flex items-center gap-2">
            <RocketIcon className="size-5" />
            <span>
              Principais vantagens
            </span>
          </Badge>
        </div>

        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-primary-gold xl:text-4xl">
            O que é antecipação do Saque-Aniversário do FGTS?
          </h2>
          <p className="mx-auto max-w-3xl text-slate-50 xl:text-lg">
            é uma modalidade de crédito que possibilita você antecipar de 5 até 10 anos de parcela do seu
            Saque-Aniversário anualmente na conta vinculada do FGTS com a menor taxa de juros.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-gold text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="mb-2 font-semibold text-slate-950">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl w-full mx-auto py-6 lg:py-12">
          <small className="text-sm text-muted-foreground text-center">
            *O CET (Custo Efetivo Total) de um empréstimo com prazo de 84 meses a uma taxa de
            juros de 1,29% a.m. e sem cobertura de seguros é de 19% a.a. O valor do CET mudará
            conforme as condições de valor, prazo, taxas de juros e seguros contratados.
          </small>
        </div>
      </div>
    </section>
  )
}

