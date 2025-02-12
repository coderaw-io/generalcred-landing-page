"use client"

import { useAlertDialog } from "@/contexts/alert-dialog-context"
import axios, { type AxiosError } from "axios"
import { useEffect } from "react"
import toast from "react-hot-toast"

interface GlobalErrorHandlerProps {
  error: unknown
}

export function GlobalErrorHandler({ error }: GlobalErrorHandlerProps) {
  const { showDialog } = useAlertDialog()

  useEffect(() => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ description?: string }>
      const errorMessage = axiosError.response?.data?.description

      if (errorMessage === "Instituição Fiduciária não possui autorização do Trabalhador para Operação Fiduciária.") {
        showDialog(
          "Ops ... parece que você ainda não autorizou o banco UY3 no app do FGTS!!\n\nPara conseguir simular suas propostas de empréstimos, você deve autorizar o banco UY3 no aplicativo oficial do FGTS.",
        )
      } else if (errorMessage === "Trabalhador não possui adesão ao saque aniversário vigente na data corrente.") {
        toast.error("O trabalhador não possui saldo FGTS para empréstimo disponível.")
      }
    } else {
      toast.error("Ocorreu um erro ao consultar o seu saldo FGTS. Tente novamente.")
    }
  }, [error, showDialog])

  return null;
}

