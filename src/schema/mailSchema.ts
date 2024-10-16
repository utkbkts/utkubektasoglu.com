import * as z from "zod";

export const mailSchema = z.object({
  fullname: z
    .string()
    .min(1, { message: "lütfen isim ve soyad bilgilerini giriniz." })
    .regex(/^[a-zA-Z0-9\s]*$/),
  email: z.string().email({ message: "email alanı zorunlu" }),
  message: z
    .string()
    .min(1, { message: "alan zorunlu" })
    .regex(/^[a-zA-Z0-9\s]*$/),
});
