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
  MailIcon,
  PhoneCallIcon,
  UserIcon
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/schemas/form-schema"
import { maskBirthdate } from "@/utils/mask-birthdate"
import { maskDocument } from "@/utils/mask-document"
import { maskPhoneNumber } from "@/utils/mask-phone-number"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { HeroSection } from "./hero-section"
import { WhatsappButton } from "./whatsapp-button"

export function PersonalDataForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cpf: "",
      birthDate: "",
      phone: "",
      email: "",
      privacyPolicy: false,
      contact: false,
    },
  })

  const document = form.watch("cpf")
  const birthdate = form.watch("birthDate")
  const phoneNumber = form.watch("phone")

  useEffect(() => {
    if (document !== undefined ||
      phoneNumber !== undefined || birthdate !== undefined) {
      form.setValue("cpf", maskDocument(document))
      form.setValue("birthDate", maskBirthdate(birthdate))
      form.setValue("phone", maskPhoneNumber(phoneNumber))
    }
  }, [
    document,
    birthdate,
    phoneNumber,
    form.setValue
  ]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="w-ful px-4 py-12 md:px-8 md:py-16 lg:max-w-8xl lg:w-full lg:mx-auto lg:pt-16 lg:pb-24 lg:px-12 2xl:px-0">
      <div className="w-full flex flex-col items-center space-y-12 lg:space-y-0 lg:flex-row lg:justify-between">
        <HeroSection />

        <div className="bg-white p-6 space-y-6 shadow-sm rounded-[0.3rem] md:w-full md:p-10 lg:w-[85%] lg:p-12 xl:p-8">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold md:text-2xl">
              Estamos quase lá. Para ver o resultado da <br />
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
                name="phone"
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
                disabled={!form.formState.isValid || !form.watch("privacyPolicy")}
              >
                Ver resultado da simulação
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <WhatsappButton />
    </div>
  )
}