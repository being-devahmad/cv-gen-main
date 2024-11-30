import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const RegisterUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
});

export const ContactUsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});
