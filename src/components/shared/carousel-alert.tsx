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
      <AlertDialogContent className="h-[780px] max-w-5xl w-full">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold">
            Ops ... Parece que falta uma etapa ainda para você conseguir o seu empréstimo.
          </AlertDialogTitle>
          <AlertDialogDescription className="max-w-3xl text-lg">
            Você deve acessar o aplicativo oficial do <strong>FGTS</strong> {" "}
            e autorizar o <strong>banco UY3</strong> {" "}
            para conseguir realizar a busca e consultas dos seus dados referente ao seu <strong>FGTS</strong>. <br />
            <strong>Possui dúvidas? siga o passo a passo das imagens abaixo:</strong>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-start items-center">
          <AlertDialogCancel className="w-1/2" onClick={onClose}>
            Já autorizei o banco pelo app, quero prosseguir
          </AlertDialogCancel>
        </div>

        <div className="w-[70%] pl-24 p-0">
          <CarouselSection />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
