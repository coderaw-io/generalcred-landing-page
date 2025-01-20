'use client'

import Link from "next/link"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"

import {
  CalendarIcon,
  FingerprintIcon,
  LoaderCircleIcon,
  MailIcon,
  PhoneCallIcon,
  UserIcon
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { useLoanProposals } from "@/hooks/use-loan-proposals"
import { formSchema } from "@/schemas/form-schema"
import { BalanceService } from "@/services/balance-service"
import { maskBirthdate } from "@/utils/mask-birthdate"
import { maskDocument } from "@/utils/mask-document"
import { maskPhoneNumber } from "@/utils/mask-phone-number"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast'
import { ProposalsDialog } from "./proposals-dialog"

export function PersonalDataForm() {
  const { setFormData, setLoanProposals } = useLoanProposals()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      birthDate: "",
      phonenumber: "",
      email: "",
      privacyPolicy: false,
      contact: false,
    },
  })

  const document = form.watch("cpf")
  const birthdate = form.watch("birthDate")
  const phoneNumber = form.watch("phonenumber")

  useEffect(() => {
    if (document !== undefined || phoneNumber !== undefined || birthdate !== undefined) {
      form.setValue("cpf", maskDocument(document))
      form.setValue("birthDate", maskBirthdate(birthdate))
      form.setValue("phonenumber", maskPhoneNumber(phoneNumber))
    }
  }, [document, birthdate, phoneNumber, form.setValue, form])

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const formData = {
        name: data.name,
        cpf: data.cpf,
        birthDate: data.birthDate,
        phonenumber: data.phonenumber,
        email: data.email
      }

      setFormData(formData)
      const response = await BalanceService.getFgtsBalance(formData)
      setLoanProposals(response)
      toast.success("Busca realizada com sucesso.")
      setIsDialogOpen(true)
    } catch {
      toast.error("Erro ao simular sua proposta! Tente novamente.")
    }
  }

  return (
    <div className="pb-6">
      <div className="space-y-2 py-6">
        <h1 className="text-xl font-semibold md:text-2xl">
          Estamos quase lá? Para ver o resultado da <br />
          sua simulação, informe seus dados
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <UserIcon className="size-5" />
                  Nome
                </FormLabel>
                <FormControl>
                  <Input placeholder="Informe seu nome completo" maxLength={100} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="cpf"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <FingerprintIcon className="size-4" />
                    CPF
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="000.000.000-00" maxLength={14} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <CalendarIcon className="size-4" />
                    Data de nascimento
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="00/00/0000" maxLength={10} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <PhoneCallIcon className="size-4" />
                  Celular com DDD
                </FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" maxLength={15} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <MailIcon className="size-4" />
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@email.com.br" maxLength={100} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="py-6 space-y-4">
            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Autorizo a Generalcred a tratar meus dados pessoais e também estou de acordo com a{" "}
                      <Link href="#" className="text-slate-950/70 italic hover:underline">
                        Política de Privacidade
                      </Link>
                      .
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Permito que a{" "}
                      <span className="text-slate-950/70 italic hover:underline">
                        Generalcred
                      </span>{" "}
                      entre em contato comigo.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full hover:bg-primary hover:text-primary-gold"
            disabled={!form.watch("privacyPolicy")}
          >
            {form.formState.isSubmitting ? (
              <LoaderCircleIcon className="size-5 animate-spin" />
            ) : "Ver resultado da simulação"}
          </Button>
        </form>
      </Form>

      <ProposalsDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  )
}

