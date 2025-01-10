'use client'

import step5Img from "@/assets/images/fgts-img-bg1111.jpg";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function PersonalDataForm() {
  const [formData, setFormData] = useState({
    fgtsBalance: '',
    name: '',
    cpf: '',
    birthDate: '',
    phone: '',
    email: '',
    privacyPolicy: false,
    contact: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="max-w-8xl mx-auto px-4 py-8 md:py-12 lg:pt-16 lg:pb-24">
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="w-full relative text-white space-y-8">
          <h1 className="max-w-2xl w-full text-4xl md:text-5xl font-bold leading-tight">
            ANTECIPE ATÉ {" "}
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

          <Image src={step5Img} alt="Passo 5" className="object-cover w-[90%] rounded-[0.3rem]" />
        </div>

        <div className="bg-white lg:w-[85%] p-12 shadow-sm rounded-[0.3rem] space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">
              Estamos quase lá. Para ver o resultado da <br />
              sua simulação, informe seus dados
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fgtsBalance">Saldo do FGTS</Label>
              <Input
                id="fgtsBalance"
                placeholder="Informe seu saldo do FGTS"
                value={formData.fgtsBalance}
                onChange={(e) => setFormData({ ...formData, fgtsBalance: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                placeholder="Informe seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cpf">CPF</Label>
                <Input
                  id="cpf"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birthDate">Data de nascimento</Label>
                <Input
                  id="birthDate"
                  placeholder="00/00/0000"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Celular com DDD</Label>
              <Input
                id="phone"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@email.com.br"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="py-6 space-y-4">
              <div className="flex space-x-2">
                <Checkbox
                  id="privacy"
                  className="mt-1"
                  checked={formData.privacyPolicy}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, privacyPolicy: checked as boolean })
                  }
                />

                <label htmlFor="privacy" className="text-sm">
                  Autorizo a Generalcred a tratar meus dados pessoais e também estou de acordo <br />
                  com a {" "}
                  <Link href="#" className="text-slate-950/70 hover:underline">
                    Política de Privacidade
                  </Link>
                  .
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="contact"
                  checked={formData.contact}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, contact: checked as boolean })
                  }
                />

                <label htmlFor="contact" className="text-sm">
                  Permito que a Generalcred entre em contato comigo.
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="disabled:bg-secondary w-full hover:bg-primary hover:text-primary-gold"
              disabled={!formData.privacyPolicy}
            >
              Ver resultado da simulação
            </Button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <Button className="bg-emerald-400 rounded-full hover:bg-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#020617"
            viewBox="0 0 256 256"
            className="size-6"
          >
            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
          </svg>

          Whatsapp
        </Button>
      </div>
    </div>
  )
}

