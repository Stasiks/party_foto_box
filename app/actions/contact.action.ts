"use server";

import { contactFormSchema } from "@/lib/validations/contact.schema";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  // 1. Собираем данные из FormData
 const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    date: formData.get("date"),
    phone: formData.get("phone"),
    message: formData.get("message"),
    dsgvo: formData.get("dsgvo") === "on", // Переводим в true/false
  };

  // 2. Валидация на сервере через Zod
  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      status: "error",
      message: "Bitte überprüfen Sie Ihre Eingaben.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 3. Имитация отправки email или сохранения в БД
  try {
    // TODO: Интегрировать Resend, Nodemailer или Prisma/Supabase здесь
    console.log("Validierte Daten bereit zum Senden:", validatedFields.data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    return { status: "success", message: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet." };
  } catch (error) {
    return { status: "error", message: "Ein interner Serverfehler ist aufgetreten." };
  }
}