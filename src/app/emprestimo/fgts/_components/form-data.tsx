"use client"

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import {
  CalendarIcon,
  FingerprintIcon,
  LoaderCircleIcon,
  MailIcon,
  PhoneCallIcon,
  UserIcon
} from "lucide-react";

import type { FgtsTable } from "@/@types/fgts/loan";
import { CarouselAlert } from "@/components/shared/carousel-alert";
import { HeroSection } from "@/components/shared/hero-section";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useGlobalErrorHandler } from "@/hooks/use-global-error-handler";
import { dataClient } from "@/lib/axios";
import { formSchema } from "@/schemas/form-schema";
import type { ClientData } from "@/store/loan-proposals-store";
import { maskBirthdate } from "@/utils/mask-birthdate";
import { maskDocument } from "@/utils/mask-document";
import { maskPhoneNumber } from "@/utils/mask-phone-number";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

interface PersonalDataFormProps {
  setFormData: (data: ClientData) => void
  setLoanProposals: (proposals: FgtsTable[]) => void
}

export function PersonalDataForm({ setFormData, setLoanProposals }: PersonalDataFormProps) {
  const { handleError } = useGlobalErrorHandler();

  const [showCarouselAlert, setShowCarouselAlert] = useState(false);

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

  const router = useRouter()
  const document = form.watch("cpf")
  const birthdate = form.watch("birthDate")
  const phoneNumber = form.watch("phonenumber")

  useEffect(() => {
    const maskedDocument = maskDocument(document)
    const maskedBirthdate = maskBirthdate(birthdate)
    const maskedPhoneNumber = maskPhoneNumber(phoneNumber)

    if (document !== maskedDocument) form.setValue("cpf", maskedDocument)

    if (birthdate !== maskedBirthdate) form.setValue("birthDate", maskedBirthdate)

    if (phoneNumber !== maskedPhoneNumber) form.setValue("phonenumber", maskedPhoneNumber)
  }, [document, birthdate, phoneNumber, form])

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setFormData({
        name: data.name,
        cpf: data.cpf,
        birthdate: data.birthDate,
        phonenumber: data.phonenumber,
        email: data.email,
      })

      const getAccessToken = await dataClient.post("/fgts/token")
      Promise.resolve(getAccessToken)
      localStorage.setItem("token", getAccessToken.data.token)

      const requestData = {
        cpf: data.cpf,
        installments: 3,
        rate: 0.0179999999,
      }

      const response = await dataClient.post("/fgts/balance", requestData, {
        headers: {
          Token: `${localStorage.getItem("token")}`,
        },
      })

      const { fgtsTables } = response.data

      setLoanProposals(fgtsTables)
      toast.success("Pré cadastro realizado com sucesso.")
      router.push("/emprestimo/fgts/autorizar/proposta")
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.data?.description ===
        "Instituição Fiduciária não possui autorização do Trabalhador para Operação Fiduciária."
      ) {
        setShowCarouselAlert(true);
      } else {
        handleError(error);
      }
    }
  }

  const handleCloseCarouselAlert = () => {
    setShowCarouselAlert(false);
  }

  return (
    <>
      <Form {...form}>
        <div className="w-ful px-4 py-16 rounded-none sm:py-12 md:px-8 md:py-16 lg:max-w-8xl lg:w-full lg:mx-auto lg:pt-16 lg:pb-24 lg:px-12 2xl:px-0">
          <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
            <HeroSection />
            <div className="bg-white py-8 px-6 space-y-6 shadow-sm sm:py-6 sm:rounded-[0.3rem] md:w-full md:p-10 lg:w-[85%] lg:p-12 xl:p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="pb-6">
                <div className="space-y-2 pb-8">
                  <h1 className="text-xl font-semibold md:text-2xl">
                    Vamos começar? Para ver o resultado da <br />
                    sua simulação, informe seus dados
                  </h1>

                  <p className="text-sm text-muted-foreground">
                    <strong>Atenção</strong>, para realizar a simulação dos valores disponíveis do seu FGTS, primeiro
                    você deve autorizar o banco <strong>UY3 Sociedade de Crédito</strong> na sua conta do aplicativo
                    oficial do FGTS.
                  </p>
                </div>

                <div className="space-y-4">
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
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
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
                            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Permito que a{" "}
                              <span className="text-slate-950/70 italic hover:underline">Generalcred</span> entre em
                              contato comigo.
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
                    ) : (
                      "Ver resultado da simulação"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Form>

      {showCarouselAlert && (
        <CarouselAlert onClose={handleCloseCarouselAlert} />
      )}
    </>
  )
}

