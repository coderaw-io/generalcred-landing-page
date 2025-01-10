import * as z from "zod";

export const formSchema = z.object({
  fgtsBalance: z
    .string()
    .max(17, "Saldo do FGTS deve ter no máximo 17 caracteres")
    .min(1, "Saldo do FGTS é obrigatório"),
  name: z
    .string()
    .max(100, "Nome deve ter no máximo 100 caracteres")
    .min(1, "Nome é obrigatório"),
  cpf: z
    .string()
    .length(14, "CPF deve conter 11 dígitos")
    .min(1, "CPF é obrigatório"),
  birthDate: z
    .string()
    .length(10, "Data de nascimento deve conter 8 dígitos")
    .min(1, "Data de nascimento é obrigatória")
    .refine((value) => {
      const [day, month, year] = value.split("/").map(Number);
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

      return age > 18 || (age === 18 && hasHadBirthdayThisYear);
    }, "Você deve ter pelo menos 18 anos para preencher o formulário."),
  phone: z
    .string()
    .length(15, "Telefone deve conter 11 dígitos (DDD + número)")
    .min(1, "Telefone é obrigatório"),
  email: z
    .string()
    .email("E-mail inválido")
    .max(100, "E-mail deve ter no máximo 100 caracteres")
    .min(1, "E-mail é obrigatório"),
  privacyPolicy: z
    .boolean()
    .refine(val => val === true, "Você deve aceitar a Política de Privacidade"),
  contact: z.boolean()
})

