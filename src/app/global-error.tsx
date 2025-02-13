"use client"

import Link from "next/link"

import { ErrorIcon } from "@/components/shared/error-icon"
import { Footer } from "@/components/shared/footer"
import { Header } from "@/components/shared/header"
import { Button } from "@/components/ui/button"

export default function GlobalErrorPage() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="bg-slate-100 size-full overflow-hidden">
        <div className="w-full p-6 md:max-w-2xl md:mx-auto lg:max-w-4xl">
          <div className="flex flex-col items-center space-y-4 pt-24 pb-16 sm:pt-6">
            <ErrorIcon className="w-[70%] sm:w-[60%]" />

            <h2 className="text-2xl font-bold sm:text-center md:text-4xl">
              Ops... Ocorreu um erro interno
            </h2>

            <p className="max-w-2xl text-muted-foreground font-medium sm:text-lg sm:text-center">
              Parece que o sistema da <strong>Caixa Econômica Federal</strong> {" "}
              no momento possui algumas instabilidades. {" "}
              Entre em contato conosco via <strong>whatsapp</strong> para falar com o nosso suporte.
            </p>

            <Link
              className="flex justify-center items-center pt-6"
              href="https://wa.me/5511962160535"
              target="_blank"
            >
              <Button
                type="button"
                size="lg"
                className="w-[95%] bg-emerald-400 rounded-full text-[13px] hover:bg-emerald-500 sm:text-base sm:w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#020617"
                  viewBox="0 0 256 256"
                  className="size-6"
                >
                  <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
                </svg>

                Continuar saque aniversário via Whatsapp
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}