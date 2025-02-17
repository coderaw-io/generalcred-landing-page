import Link from "next/link";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import { Button } from "../ui/button";
import { CarouselSection } from "./carousel";

interface CarouselFgtsAlertProps {
  onClose: () => void;
}

export function CarouselFgtsAlert({ onClose }: CarouselFgtsAlertProps) {
  return (
    <AlertDialog open onOpenChange={onClose}>
      <AlertDialogContent className="size-full overflow-y-auto overflow-x-hidden sm:h-[760px] sm:max-w-5xl sm:w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-left font-bold sm:hidden">
            Ops ... <br />
            Parece que ainda falta uma <br />
            etapa para você conseguir o <br />
            seu empréstimo.
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left text-lg sm:hidden">
            Você deve acessar o aplicativo oficial <br />
            do <strong>FGTS</strong> e autorizar o <strong>banco UY3</strong> para <br />
            conseguir realizar a busca e consultas <br />
            dos seus dados referente ao seu <strong>FGTS</strong>. <br />
            <strong>
              Possui dúvidas? <br />
              siga o passo a passo abaixo:
            </strong>
          </AlertDialogDescription>

          <AlertDialogTitle className="hidden sm:block text-2xl font-bold text-center">
            Ops ... Parece que falta uma etapa ainda para <br />
            você conseguir o seu empréstimo.
          </AlertDialogTitle>
          <AlertDialogDescription className="hidden sm:block max-w-3xl mx-auto text-lg text-center">
            Você deve acessar o aplicativo oficial do <strong>FGTS</strong> {" "}
            e autorizar o <strong>banco UY3</strong> {" "}
            para conseguir realizar a busca e consultas dos seus dados referente ao seu <strong>FGTS</strong>. <br />
            <strong>Possui dúvidas? siga o passo a passo das imagens abaixo:</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-start items-center md:justify-center">
            <AlertDialogCancel
              className="bg-slate-950 text-primary-gold border-none w-[38%] text-xs sm:w-1/2 sm:text-base"
              onClick={onClose}
            >
              Já autorizei o banco pelo app, quero prosseguir
            </AlertDialogCancel>
          </div>

          <Link
            className="flex justify-start items-center md:justify-center"
            href="https://wa.me/5511962161040"
            target="_blank"
          >
            <Button
              type="button"
              className="bg-emerald-400 text-[13px] hover:bg-emerald-500 sm:text-base sm:w-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#020617"
                viewBox="0 0 256 256"
                className="size-6"
              >
                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
              </svg>

              Falar com o nosso suporte via Whatsapp
            </Button>
          </Link>
        </div>

        <div className="w-1/3 pl-6 sm:w-12 sm:pl-10 sm:p-0 md:flex">
          <CarouselSection />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
