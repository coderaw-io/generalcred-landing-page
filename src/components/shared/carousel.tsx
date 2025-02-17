'use client'

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import step1Img from "@/assets/images/carousel-steps-lp-1.jpg";
import step2Img from "@/assets/images/carousel-steps-lp-2.jpg";
import step3Img from "@/assets/images/carousel-steps-lp-3.jpg";
import step4Img from "@/assets/images/carousel-steps-lp-4.jpg";
import step5Img from "@/assets/images/carousel-steps-lp-5.jpg";

import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    step: 1,
    image: step1Img,
    title: "Acesse ou crie uma conta no App do FGTS",
    label: "Basta baixar o app pela sua biblioteca de aplicativos. Entre para fazer o login ou crie uma nova conta caso ainda não tenha."
  },
  {
    step: 2,
    image: step2Img,
    title: "Escolha a opção pelo Saque Aniversário",
    label: "Após se autenticar no app, clique na opção Sistemática de saque do seu FGTS, para conseguir a adesão. Após isso, clique em Optar pelo Saque Aniversário."
  },
  {
    step: 3,
    image: step3Img,
    title: "Autorizar o Banco UY3 Sociedade de Crédito",
    label: "Clique em Autorizar bancos a consultarem seu FGTS, após isso selecione Modalidade Saque-Aniversário e em seguida Adicionar Instituição. Procure por UY3 SOCIEDADE DE CRÉDITO DIRETO S/A."
  },
  {
    step: 4,
    image: step4Img,
    title: "Realizar a simulação do seu Empréstimo",
    label: "Agora que você já optou pelo Saque Aniversário, autorizou o banco UY3 Sociedade de Crédito, vamos realizar a simulação aqui no nosso Site ou via Whatsapp e escolher uma proposta de crédito para resgate."
  },
  {
    step: 5,
    image: step5Img,
    title: "Formalização do seu Contrato",
    label: "Feita a simulação e aprovado o crédito, acesse o link enviado para você via SMS ou gerado pelo nosso site para assinar os documentos da contratação. Com tudo feito, o dinheiro cairá direto na sua conta em instantes."
  },
]

export function CarouselSection() {
  return (
    <div>
      <Carousel className="py-12 w-full max-w-4xl mx-auto rounded-[0.3rem]">
        <CarouselContent className="rounded-[0.3rem]">
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col md:flex-row items-center p-6 gap-6">
                    <div className="w-full md:w-1/2">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={400}
                        height={800}
                        className="w-full h-auto object-contain sm:w-[90%]"
                      />
                    </div>

                    <div className="w-full md:w-1/2 space-y-4">
                      <div className="flex flex-col space-y-1.5">
                        <span className="text-3xl font-bold text-primary-gold">
                          Passo {slide.step}
                        </span>
                        <h2 className="text-4xl font-bold text-primary">
                          {slide.title}
                        </h2>
                      </div>

                      <p className="text-muted-foreground text-lg">
                        {slide.label}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

