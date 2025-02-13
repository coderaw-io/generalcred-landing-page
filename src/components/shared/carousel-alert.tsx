import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import { CarouselSection } from "./carousel";

interface CarouselAlertProps {
  onClose: () => void;
}

export function CarouselAlert({ onClose }: CarouselAlertProps) {
  return (
    <AlertDialog open onOpenChange={onClose}>
      <AlertDialogContent className="size-full overflow-y-auto sm:h-[780px] sm:max-w-5xl sm:w-full sm:overflow-hidden">
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

          <AlertDialogTitle className="hidden sm:block text-2xl font-bold">
            Ops ... Parece que falta uma etapa ainda para você conseguir o seu empréstimo.
          </AlertDialogTitle>
          <AlertDialogDescription className="hidden sm:block max-w-3xl text-lg">
            Você deve acessar o aplicativo oficial do <strong>FGTS</strong> {" "}
            e autorizar o <strong>banco UY3</strong> {" "}
            para conseguir realizar a busca e consultas dos seus dados referente ao seu <strong>FGTS</strong>. <br />
            <strong>Possui dúvidas? siga o passo a passo das imagens abaixo:</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-start items-center">
          <AlertDialogCancel className="w-[38%] text-xs sm:w-1/2 sm:text-base" onClick={onClose}>
            Já autorizei o banco pelo app, quero prosseguir
          </AlertDialogCancel>
        </div>

        <div className="w-[40%] sm:w-[70%] sm:pl-24 sm:p-0">
          <CarouselSection />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
