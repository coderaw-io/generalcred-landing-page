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
import { useStepper } from "@/hooks/use-stepper";
import { cn } from "@/lib/utils";
import { CustomerSchema } from "@/schemas/simulation-form-schema";
import { maskNumber } from "@/utils/mask-number";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

export function SimulationCustomerData() {
  const {
    trigger,
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<CustomerSchema>();

  const { nextStep } = useStepper();
  
  const rg = watch("rg");

  useEffect(() => {
    if (rg !== undefined) setValue("rg", maskNumber(rg));
  }, [rg, setValue]);

  async function handleNextStep() {
    const isValid = await trigger([
      "rg",
      "gender_customer",
      "mother_name",
      "father_name",
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
        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="rg">
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
            <Label htmlFor="gender_customer">
              Sexo
            </Label>
            <Controller
              name="gender_customer"
              control={control}
              render={({ field }) => (
                <Select value={field.value || ""} onValueChange={field.onChange}>
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
              )}
            />

            {errors.gender_customer && (
              <span className="pl-2 text-sm text-primary-red font-medium italic">
                {errors.gender_customer.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="mother_name">
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
            <Label htmlFor="father_name">
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