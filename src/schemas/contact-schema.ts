import { z } from "zod";

const phonePattern = /^[0-9()+\-\s]{7,20}$/;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  company: z.string().min(2, "Enter your company, team, or organization."),
  phone: z
    .string()
    .trim()
    .regex(phonePattern, "Enter a valid phone number."),
  description: z.string().min(20, "Add a bit more detail to the description."),
  captchaAnswer: z.string().trim().min(1, "Solve the captcha challenge."),
});

export const contactSubmissionSchema = contactSchema.extend({
  captchaToken: z.string().trim().min(1, "Captcha expired. Refresh and try again."),
  website: z.string().max(0).optional().default(""),
  startedAt: z.number().int().nonnegative(),
});
