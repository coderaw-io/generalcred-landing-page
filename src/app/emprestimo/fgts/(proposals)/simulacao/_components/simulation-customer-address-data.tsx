"use client"

import axios from "axios";
import toast from "react-hot-toast";

import {
  InfoIcon,
  LoaderCircleIcon,
  LocateFixedIcon,
  MapIcon,
  MapPinCheckInsideIcon,
  MapPinIcon,
  MapPinnedIcon,
  PinIcon
} from "lucide-react";

import { ViaCepResponse } from "@/@types/address/viacep";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CustomerSchema } from "@/schemas/simulation-form-schema";
import { maskNumber } from "@/utils/mask-number";
import { useCallback, useEffect } from "react";
import { useFormContext } from "react-hook-form";

export function SimulationCustomerAddressData() {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useFormContext<CustomerSchema>();

  const zipCode = watch("entity_attributes.address_attributes.zip_code");
  const addressNumber = watch("entity_attributes.address_attributes.number");

  const handleCepChange = useCallback(async () => {
    if (zipCode && zipCode.length === 8) {
      try {
        const { data } = await axios.get<ViaCepResponse>(
          `https://viacep.com.br/ws/${zipCode.replace("-", "")}/json/`
        );

        if (data.errors) {
          toast.error("ERRO AO BUSCAR DADOS DO CEP INFORMADO, TENTE NOVAMENTE.");
        }

        if (!data.errors) {
          setValue("entity_attributes.address_attributes.street", data.logradouro || "");
          setValue("entity_attributes.address_attributes.district", data.bairro || "");
          setValue("entity_attributes.address_attributes.city", data.localidade || "");
          setValue("entity_attributes.address_attributes.state", data.uf || "");
        }
      } catch {
        toast.error("ERRO AO BUSCAR DADOS DO CEP INFORMADO, TENTE NOVAMENTE.")
      }
    }
  }, [zipCode, setValue]);

  useEffect(() => {
    handleCepChange();
  }, [handleCepChange]);

  useEffect(() => {
    if (zipCode !== undefined || addressNumber !== undefined) {
      setValue("entity_attributes.address_attributes.zip_code", maskNumber(zipCode));
      setValue("entity_attributes.address_attributes.number", maskNumber(addressNumber));
    }
  }, [zipCode, addressNumber, setValue]);

  return (
    <div className="py-12 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-primary-gold">
          Dados de endereço do cliente
        </h1>
        <p className="text-muted-foreground">
          Precisamos de mais informações para finalizar o cadastro do seu empréstimo.
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="zip_code" className="flex items-center gap-2">
              <MapPinIcon className="size-4" />
              CEP
            </Label>

            <Input
              placeholder="Informe o seu CEP"
              maxLength={8}
              className={cn(
                errors?.entity_attributes?.address_attributes?.zip_code
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("entity_attributes.address_attributes.zip_code")}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="street" className="flex items-center gap-2">
              <MapIcon className="size-4" />
              Endereço
            </Label>
            <Input
              placeholder="Informe o seu endereço completo"
              className={cn(
                errors?.entity_attributes?.address_attributes?.street
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input disabled:bg-border font-medium"
              )}
              {...register("entity_attributes.address_attributes.street")}
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="number" className="flex items-center gap-2">
              <PinIcon className="size-4" />
              Número
            </Label>

            <Input
              placeholder="Informe o número do seu endereço"
              maxLength={10}
              className={cn(
                errors?.entity_attributes?.address_attributes?.number
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("entity_attributes.address_attributes.number")}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="district" className="flex items-center gap-2">
              <MapPinnedIcon className="size-4" />
              Bairro
            </Label>

            <Input
              placeholder="Informe o bairro do seu endereço"
              className={cn(
                errors?.entity_attributes?.address_attributes?.district
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input disabled:bg-border font-medium"
              )}
              {...register("entity_attributes.address_attributes.district")}
              disabled
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-4">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="city" className="flex items-center gap-2">
              <LocateFixedIcon className="size-4" />
              Cidade
            </Label>

            <Input
              placeholder="Informe a cidade"
              className={cn(
                errors?.entity_attributes?.address_attributes?.city
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input disabled:bg-border font-medium"
              )}
              {...register("entity_attributes.address_attributes.city")}
              disabled
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="state" className="flex items-center gap-2">
              <MapPinCheckInsideIcon className="size-4" />
              Estado
            </Label>

            <Input
              placeholder="Informe o estado"
              className={cn(
                errors?.entity_attributes?.address_attributes?.state
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input disabled:bg-border font-medium"
              )}
              {...register("entity_attributes.address_attributes.state")}
              disabled
            />
          </div>

          <div className="flex flex-col space-y-3">
            <Label htmlFor="city" className="flex items-center gap-2">
              <InfoIcon className="size-4" />
              Complemento (opcional)
            </Label>

            <Input
              placeholder="Informe o complemento"
              className={cn(
                errors?.entity_attributes?.address_attributes?.complement
                  ? "w-full border-destructive border-2 focus-visible:ring-0"
                  : "w-full border-input"
              )}
              {...register("entity_attributes.address_attributes.complement")}
            />
          </div>
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
    </div>
  )
}