"use client"

import {
  BlendIcon,
  ComponentIcon,
  ContactRoundIcon,
  LandmarkIcon,
  UserIcon,
  UserRoundIcon
} from "lucide-react";

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
import { useLoanProposals } from "@/hooks/use-loan-proposals-store";
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { CustomerSchema } from "@/schemas/simulation-form-schema";
import { maskNumber } from "@/utils/mask-number";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";

export function SimulationCustomerData() {
  const {
    trigger,
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CustomerSchema>();

  const { formData: personalData } = useLoanProposals();
  const { nextStep } = useStepper();

  const rg = watch("rg");

  useEffect(() => {
    if (rg !== undefined) setValue("rg", maskNumber(rg));
  }, [rg, setValue]);

  const pixKeyType = useWatch({
    control,
    name: "entity_attributes.bank_account_attributes.kind_pix",
  })

  useEffect(() => {
    if (pixKeyType === "cpf_cnpj" && personalData) {
      setValue("entity_attributes.bank_account_attributes.pix", personalData.cpf);
    } else if (pixKeyType !== "cpf_cnpj") {
      setValue("entity_attributes.bank_account_attributes.pix", "");
    }
  }, [pixKeyType, setValue, personalData?.cpf])

  async function handleNextStep() {
    const isValid = await trigger([
      "rg",
      "gender_customer",
      "mother_name",
      "father_name",
      "entity_attributes.bank_account_attributes.kind_pix",
      "entity_attributes.bank_account_attributes.pix",
    ]);
    if (isValid) nextStep();
  }

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
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="rg" className="flex items-center gap-2">
              <ContactRoundIcon className="size-4" />
              RG
            </Label>

            <Input
              placeholder="Informe o seu RG corretamente"
              maxLength={14}
              className={cn(
                errors?.rg
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("rg")}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="gender_customer" className="flex items-center gap-2">
              <BlendIcon className="size-4" />
              Sexo
            </Label>
            <Controller
              name="gender_customer"
              control={control}
              render={({ field }) => (
                <Select value={field.value || ""} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      errors?.gender_customer
                        ? "w-full border-destructive border-2 focus-visible:ring-0"
                        : "w-full border-input"
                    )}
                  >
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Genêro</SelectLabel>
                      <SelectItem value="Masculino">Masculino</SelectItem>
                      <SelectItem value="Feminino">Feminino</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="mother_name" className="flex items-center gap-2">
              <UserRoundIcon className="size-4" />
              Nome da mãe
            </Label>

            <Input
              placeholder="Informe o nome completo da mãe"
              maxLength={80}
              className={cn(
                errors?.mother_name
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("mother_name")}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="father_name" className="flex items-center gap-2">
              <UserIcon className="size-4" />
              Nome do pai (opcional)
            </Label>

            <Input
              placeholder="Informe o nome completo do pai"
              maxLength={80}
              className={cn(
                errors?.father_name
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("father_name")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="kind_pix" className="flex items-center gap-2">
              <LandmarkIcon className="size-4" />
              Tipo de chave PIX
            </Label>

            <Controller
              name="entity_attributes.bank_account_attributes.kind_pix"
              control={control}
              render={({ field }) => (
                <Select value={field.value || ""} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={cn(
                      errors?.entity_attributes?.bank_account_attributes?.kind_pix
                        ? "w-full border-destructive border-2 focus-visible:ring-0"
                        : "w-full border-input"
                    )}
                  >
                    <SelectValue placeholder="Escolha uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Chaves disponíveis</SelectLabel>
                      <SelectItem value="cpf_cnpj">CPF</SelectItem>
                      <SelectItem value="email">E-mail</SelectItem>
                      <SelectItem value="phone">Telefone</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="pix" className="flex items-center gap-2">
              <ComponentIcon className="size-4" />
              Sua chave PIX
            </Label>

            <Input
              placeholder="Informe a sua chave PIX"
              maxLength={60}
              disabled={pixKeyType === "cpf_cnpj"}
              className={cn(
                errors?.entity_attributes?.bank_account_attributes?.pix
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("entity_attributes.bank_account_attributes.pix")}
            />
          </div>
        </div>

        <div className="w-full pt-6">
          <Button
            type="button"
            size="lg"
            className="w-full"
            onClick={handleNextStep}
          >
            Próxima etapa
          </Button>
        </div>
      </div>
    </div>
  )
}