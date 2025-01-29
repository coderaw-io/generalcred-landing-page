"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SimulationCustomerBankAccountData() {
  return (
    <div className="py-12 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-primary-gold">
          Dados da sua conta para recebimento
        </h1>
        <p className="text-muted-foreground">
          Precisamos de mais informações para finalizar o cadastro do seu empréstimo.
        </p>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col space-y-3">
          <Label htmlFor="kind_pix">
            Tipo de chave PIX
          </Label>

          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Escolha uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Chaves disponíveis</SelectLabel>
                <SelectItem value="cpf_cnpj">CPF ou CNPJ</SelectItem>
                <SelectItem value="email">E-mail</SelectItem>
                <SelectItem value="phone">Telefone</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col space-y-3">
          <Label htmlFor="pix">
            Sua chave PIX
          </Label>

          <Input
            placeholder="Informe a sua chave PIX"
            className="w-full"
          />
        </div>

        <div className="w-full pt-6">
          <Button type="submit" size="lg" className="w-full">
            Finalizar o cadastro
          </Button>
        </div>
      </div>
    </div >
  )
}