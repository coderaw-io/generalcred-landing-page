"use client"

import step1Img from "@/assets/images/carousel-steps-lp-1.jpg";
import step2Img from "@/assets/images/carousel-steps-lp-2.jpg";
import step3Img from "@/assets/images/carousel-steps-lp-3.jpg";
import step4Img from "@/assets/images/carousel-steps-lp-4.jpg";
import step5Img from "@/assets/images/carousel-steps-lp-5.jpg";
import generalcredfgtst from "@/assets/images/fgts-img-bg.jpg";
import Image from "next/image";
import Link from "next/link";
import 'swiper/swiper-bundle.min.css';

import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      <div className="absolute top-0 left-9 z-10">
        <Image
          src="/logo.png"
          alt="Safra Financeira"
          className="w-1/3"
          width={400}
          height={400}
        />
      </div>

      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-between px-6"
        style={{
          backgroundImage: `url(${generalcredfgtst.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        <div className="relative z-10 flex items-center justify-between w-full max-w-7xl">
          <div className="w-full md:w-2/2 text-white p-9">
            <h1 className="text-2xl font-bold mb-6">
              Vamos movimentar seu FGTS?
            </h1>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <p className="text-2xl">Receba na hora via Pix</p>
              </div>
              <div className="flex items-center space-x-3">
                <p className="text-2xl">Mais rápido e seguro que todos</p>
              </div>
            </div>

            <Link href="emprestimo/fgts">
              <Button
                type="button"
                className="mt-6 py-4 px-6"
              >
                Ver a nova tela de teste
              </Button>
            </Link>
          </div>

          <div className="w-full md:w-1/2 bg-white text-slate-900 p-9 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">
              Informe os dados abaixo para iniciar a simulação:
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome Completo *"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="CPF *"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Celular *"
                  className="border p-3 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="border p-3 rounded w-full"
                />
              </div>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox" />
                  <span>
                    Ao preencher e enviar este formulário, você autoriza que o
                    Safra entre em contato com você por celular, e-mail ou
                    WhatsApp.
                  </span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox" />
                  <span>
                    Li e concordo com os{" "}
                    <a href="#" className="text-primary-gold underline">
                      termos de uso
                    </a>{" "}
                    e{" "}
                    <a href="#" className="text-primary-gold underline">
                      política de privacidade
                    </a>
                    .
                  </span>
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-gold text-white py-3 rounded"
              >
                Continuar
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between space-x-12 pt-20 pb-24 container mx-auto">
        <div className="md:w-[95%] space-y-6">
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
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto">
          <h4 className="text-3xl font-semibold text-center text-gray-800 mb-6">
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
              <div className="text-center">
                <Image src={step1Img} alt="Passo 1" className="mx-auto mb-6 w-1/4" />
                <div className="text-lg font-bold">Passo 1</div>
                <div className="text-base text-gray-700 mt-2">
                  Acesse ou crie uma conta no App do FGTS
                  <p>Basta baixar o app pela sua biblioteca de aplicativos. Entre para fazer o login ou criar uma conta caso ainda não tenha.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <Image src={step2Img} alt="Passo 2" className="mx-auto mb-6 w-1/4" />
                <div className="text-lg font-bold">Passo 2</div>
                <div className="text-base text-gray-700 mt-2">
                  Escolha a opção pelo Saque Aniversário
                  <p>Todos os trabalhadores com carteira assinada podem optar pela modalidade Saque Aniversário.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <Image src={step3Img} alt="Passo 3" className="mx-auto mb-6 w-1/4" />
                <div className="text-lg font-bold">Passo 3</div>
                <div className="text-base text-gray-700 mt-2">
                  Autorizar o Novo saque
                  <p>Agora é a hora de autorizar o banco Novo Saque a consultar o saldo da sua conta vinculada acessando o app FGTS.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <Image src={step4Img} alt="Passo 4" className="mx-auto mb-6 w-1/4" />
                <div className="text-lg font-bold">Passo 4</div>
                <div className="text-base text-gray-700 mt-2">
                  Realizar a simulação
                  <p>Consultando o saldo disponível em sua conta do FGTS, você poderá determinar o valor do crédito, realizar a simulação no site ou via WhatsApp e contratar o FGTS.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center">
                <Image src={step5Img} alt="Passo 5" className="mx-auto mb-6 w-1/4" />
                <div className="text-lg font-bold">Passo 5</div>
                <div className="text-base text-gray-700 mt-2">
                  Formalização do Contrato
                  <p>Feita a simulação e aprovado o crédito, acesse o link enviado para você por mensagem para assinar os documentos da contratação.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
