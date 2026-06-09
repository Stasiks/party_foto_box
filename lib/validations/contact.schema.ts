import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  date: z.string().min(1, "Bitte wählen Sie ein Datum aus."),
  phone: z.string().optional(),
  message: z.string().optional(),
  dsgvo: z.boolean().refine((val) => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;