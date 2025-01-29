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
import { cn } from "@/lib/utils";
import { CustomerSchema } from "@/schemas/simulation-form-schema";
import { LoaderCircleIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export function SimulationCustomerBankAccountData() {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<CustomerSchema>();

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

          <Controller
            name="entity_attributes.bank_account_attributes.kind_pix"
            control={control}
            render={({ field }) => (
              <Select value={field.value || ""} onValueChange={field.onChange}>
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
            )}
          />

          {errors?.entity_attributes?.bank_account_attributes?.kind_pix && (
            <span className="pl-2 text-sm text-primary-red font-medium italic">
              {errors.entity_attributes.bank_account_attributes.kind_pix.message}
            </span>
          )}
        </div>

        <div className="flex flex-col space-y-3">
          <Label htmlFor="pix">
            Sua chave PIX
          </Label>

          <Input
            placeholder="Informe a sua chave PIX"
            maxLength={60}
            className={cn(
              errors?.entity_attributes?.bank_account_attributes?.pix
                ? "w-full border-destructive border-2 focus-visible:ring-0"
                : "w-full border-input"
            )}
            {...register("entity_attributes.bank_account_attributes.pix")}
          />
        </div>

        <div className="w-full pt-6">
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Cadastrando
                <LoaderCircleIcon className="size-4 animate-spin" />
              </>
            ) : "Finalizar o cadastro"}
          </Button>
        </div>
      </div>
    </div >
  )
}