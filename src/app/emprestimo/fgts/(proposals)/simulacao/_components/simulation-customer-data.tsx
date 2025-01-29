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

export function SimulationCustomerData() {
  return (
    <div className="py-12 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-primary-gold">
          Dados adicionais do cliente
        </h1>
        <p className="text-muted-foreground">
          Precisamos de mais informações para finalizar o cadastro do seu empréstimo.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="rg">
              RG
            </Label>

            <Input
              placeholder="Informe o seu RG corretamente"
              className="w-full"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="gender_customer">
              Sexo
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Escolha uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Genêro</SelectLabel>
                  <SelectItem value="apple">Masculino</SelectItem>
                  <SelectItem value="banana">Feminino</SelectItem>
                  <SelectItem value="blueberry">Outro</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="mother_name">
              Nome da mãe
            </Label>

            <Input
              placeholder="Informe o nome completo da mãe"
              className="w-full"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="father_name">
              Nome do pai (opcional)
            </Label>

            <Input
              placeholder="Informe o nome completo do pai"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full pt-6">
          <Button type="button" size="lg" className="w-full">
            Próxima etapa
          </Button>
        </div>
      </div>
    </div>
  )
}