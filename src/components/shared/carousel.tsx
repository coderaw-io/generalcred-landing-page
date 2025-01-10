"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';

// Import your images
import step1Img from "@/assets/images/carousel-steps-lp-1.jpg";
import step2Img from "@/assets/images/carousel-steps-lp-2.jpg";
import step3Img from "@/assets/images/carousel-steps-lp-3.jpg";
import step4Img from "@/assets/images/carousel-steps-lp-4.jpg";
import step5Img from "@/assets/images/carousel-steps-lp-5.jpg";

const Carousel: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto">
        <h4 className="text-2xl font-semibold text-center text-gray-800 mb-20">
          Veja como funciona para habilitar o novo saque dentro do seu app do FGTS e começar a usar o crédito
        </h4>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src={step1Img} alt="Passo 1" className="mx-auto mb-6 md:mb-0 md:w-1/4" />
              <div className="text-center md:text-left md:ml-4 md:w-3/4 md:max-w-lg pr-8">
                <div className="text-lg font-bold">Passo 1</div>
                <div className="text-base text-gray-700 mt-2 pr-12">
                  Acesse ou crie uma conta no App do FGTS
                  <p>
                    Basta baixar o app pela sua biblioteca de aplicativos. Entre para fazer o login ou criar uma conta
                    caso ainda não tenha.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src={step2Img} alt="Passo 2" className="mx-auto mb-6 md:mb-0 md:w-1/4" />
              <div className="text-center md:text-left md:ml-4 md:w-3/4 md:max-w-lg pr-8">
                <div className="text-lg font-bold">Passo 2</div>
                <div className="text-base text-gray-700 mt-2 pr-12">
                  Escolha a opção pelo Saque Aniversário
                  <p>
                    Todos os trabalhadores com carteira assinada podem optar pela modalidade Saque Aniversário.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src={step3Img} alt="Passo 3" className="mx-auto mb-6 md:mb-0 md:w-1/4" />
              <div className="text-center md:text-left md:ml-4 md:w-3/4 md:max-w-lg pr-8">
                <div className="text-lg font-bold">Passo 3</div>
                <div className="text-base text-gray-700 mt-2 pr-12">
                  Autorizar o Novo saque
                  <p>
                    Agora é a hora de autorizar o banco Novo Saque a consultar o saldo da sua conta vinculada acessando o
                    app FGTS.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src={step4Img} alt="Passo 4" className="mx-auto mb-6 md:mb-0 md:w-1/4" />
              <div className="text-center md:text-left md:ml-4 md:w-3/4 md:max-w-lg pr-8">
                <div className="text-lg font-bold">Passo 4</div>
                <div className="text-base text-gray-700 mt-2 pr-12">
                  Realizar a simulação
                  <p>
                    Consultando o saldo disponível em sua conta do FGTS, você poderá determinar o valor do crédito,
                    realizar a simulação no site ou via WhatsApp e contratar o FGTS.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <Image src={step5Img} alt="Passo 5" className="mx-auto mb-6 md:mb-0 md:w-1/4" />
              <div className="text-center md:text-left md:ml-4 md:w-3/4 md:max-w-lg pr-8">
                <div className="text-lg font-bold">Passo 5</div>
                <div className="text-base text-gray-700 mt-5 pr-12">
                  Formalização do Contrato
                  <p>
                    Feita a simulação e aprovado o crédito, acesse o link enviado para você por mensagem para assinar os
                    documentos da contratação.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { Carousel };
