import { z } from 'zod';

export type CustomerSchema = z.infer <typeof customerSchema>

const addressAttributesSchema = z.object({
  zip_code: z.string().min(1, "O campo CEP é obrigatório."),
  street: z.string(),
  number: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string().optional(),
});

const bankAccountAttributesSchema = z.object({
  kind_pix: z.string().min(1, "O campo tipo de chave PIX é obrigatório."),
  pix: z.string().min(1, "O campo chave PIX é obrigatório."),
  kind_account: z.string(),
});

const entityAttributesSchema = z.object({
  address_attributes: addressAttributesSchema,
  bank_account_attributes: bankAccountAttributesSchema,
});

export const customerSchema = z.object({
  rg: z.string().min(1, "O campo RG é obrigatório."),
  gender_customer: z.string().min(1, "O campo sexo é obrigatório."),
  mother_name: z.string().min(1, "O campo nome da mãe é obrigatório."),
  father_name: z.string().optional(),
  entity_attributes: entityAttributesSchema,
});