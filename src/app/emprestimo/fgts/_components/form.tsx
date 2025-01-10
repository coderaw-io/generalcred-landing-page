'use client'

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { HeroSection } from "./hero-section";
import { WhatsappButton } from "./whatsapp-button";

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
        <HeroSection />

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

      <WhatsappButton />
    </div>
  )
}

