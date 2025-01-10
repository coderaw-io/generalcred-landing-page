import * as z from "zod"

export const formSchema = z.object({
  fgtsBalance: z.string().max(17, "Saldo do FGTS deve ter no máximo 17 caracteres").min(1, "Saldo do FGTS é obrigatório"),
  name: z.string().max(100, "Nome deve ter no máximo 100 caracteres").min(1, "Nome é obrigatório"),
  cpf: z.string().length(14, "CPF deve conter 11 dígitos").min(1, "CPF é obrigatório"),
  birthDate: z.string().length(10, "Data de nascimento deve conter 8 dígitos").min(1, "Data de nascimento é obrigatória"),
  phone: z.string().length(15, "Telefone deve conter 11 dígitos (DDD + número)").min(1, "Telefone é obrigatório"),
  email: z.string().email("E-mail inválido").max(100, "E-mail deve ter no máximo 100 caracteres").min(1, "E-mail é obrigatório"),
  privacyPolicy: z.boolean().refine(val => val === true, "Você deve aceitar a Política de Privacidade"),
  contact: z.boolean()
})

