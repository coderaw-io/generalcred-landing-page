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
    image: step1Img,
    title: "Bem-vindo ao FGTS Digital",
    label: "Acesse sua conta FGTS de forma rápida e segura."
  },
  {
    image: step2Img,
    title: "Saque Aniversário",
    label: "Consulte as opções disponíveis para seu saque aniversário."
  },
  {
    image: step3Img,
    title: "Autorização Bancária",
    label: "Realize a autorização do banco UY3 para a consulta do seu FGTS."
  },
  {
    image: step4Img,
    title: "Antecipação FGTS",
    label: "Antecipe seu saque aniversário com as melhores condições."
  },
  {
    image: step5Img,
    title: "Facilidade na palma da mão",
    label: "Gerencie seu FGTS de qualquer lugar, a qualquer momento."
  }
]

export function CarouselSection() {
  return (
    <div>
      <Carousel className="py-12 w-full max-w-5xl mx-auto rounded-[0.3rem]">
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
                      <h2 className="text-4xl font-bold text-primary">
                        {slide.title}
                      </h2>

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

