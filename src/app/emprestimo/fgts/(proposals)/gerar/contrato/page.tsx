"use client"

import fgtsImg from "@/assets/images/fgts.png";
import Image from "next/image";
import Link from "next/link";

import { ContractResponse } from "@/@types/fgts/contract";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLoanProposals } from "@/hooks/use-loan-proposals-store";
import { dataClient } from "@/lib/axios";
import { CheckCircle2Icon, CheckIcon, LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";

export default function FgtsGenerateContractPage() {
  const router = useRouter();

  const { contractId: id } = useLoanProposals();

  const getContractData = useCallback(async (accessToken: string) => {
    try {
      const response = await dataClient.get<ContractResponse>(`/fgts/contract?id=${id}`,
        {
          headers: {
            Token: `${accessToken}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
      router.push("/error");
    }
  }, [id, router]);

  const [contractData, setContractData] = useState<ContractResponse | null>(null);

  useLayoutEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (!accessToken) return;

    getContractData(accessToken).then((data) => {
      if (data) setContractData(data);
    })
  }, [getContractData, contractData?.onboarding_link]);

  const handleRedirect = () => {
    localStorage.clear();
    router.push(`${contractData ? contractData.onboarding_link : "/"}`);
  }

  return (
    <div className="w-full px-4 py-28 md:py-20 xl:py-40 md:container md:mx-auto">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative flex">
          <div className="absolute top-0 left-0 w-full h-full bg-primary-gold rounded-3xl" />
          <div className="absolute bottom-0 right-0 size-1/2 bg-emerald-300 rounded-full opacity-80" />

          <Image
            src={fgtsImg}
            alt="Fgts image"
            className="relative z-10 w-full max-w-xs mx-auto md:max-w-md"
            width={704}
            height={528}
            priority
          />
        </div>

        <div className="space-y-8">
          <div className="max-w-xs space-y-6 sm:max-w-sm md:max-w-full">
            <Badge className="w-72 py-1 px-6 bg-primary-gold text-slate-950 font-semibold flex items-center gap-2 hover:bg-primary-gold/40">
              <CheckCircle2Icon className="size-5" />
              <span>
                Proposta solicitada com sucesso
              </span>
            </Badge>

            <h1 className="text-4xl font-semibold text-slate-950">
              Como devo prosseguir agora?
            </h1>

            <p className="font-medium text-muted-foreground">
              Você deverá assinar o seu {" "}
              <strong>contrato digitalmente</strong> {" "}
              para dar andamento no recebimento da sua proposta.
            </p>

            <p className="font-medium text-muted-foreground">
              Para realizar esta ação {" "}
              <strong>clique no link</strong>, {" "}
              abaixo pelo seu <strong>aparelho celular</strong>  {" "}
              para assinar o seu contrato e receber o empréstimo.
            </p>

            {contractData ? (
              <Link
                href={contractData.onboarding_link}
                target="_blank"
                className="w-80 inline-block px-4 py-2 bg-border text-slate-950 text-sm font-semibold truncate rounded-md hover:bg-slate-950 hover:text-primary-gold transition-colors md:w-full md:px-6 md:py-3 md:text-base"
              >
                {contractData.onboarding_link}
              </Link>
            ) : (
              <>
                Carregando link
                <LoaderCircleIcon className="size-4 animate-spin" />
              </>
            )}
          </div>

          <div className="space-y-6">
            {[
              "Acesse o link de formalização pelo seu smartphone;",
              "Assine digitalmente o seu contrato de empréstimo FGTS;",
              "Faça a verificação via selfie pelo sistema anti-fraude",
              "Aguarde a aprovação da sua solicitação no sistema anti-fraude;",
              "Receba o dinheiro na sua conta vinculada a chave PIX informada pelo nosso site."
            ].map((requirement, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-gold flex items-center justify-center">
                  <CheckIcon className="size-4 text-slate-950" />
                </div>
                <span className="text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>

          <Button
            type="button"
            size="lg"
            onClick={handleRedirect}
          >
            Clique aqui para assinar contrato
          </Button>
        </div>
      </div>
    </div>
  )
}