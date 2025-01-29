export const maskNumber = (value: string) => {
  if (!value) return "";

  return value
    .replace(/\D/g, '')
}