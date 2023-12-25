import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  name: z.string({required_error: "Name is required.", invalid_type_error: "Name must be a string."}).min(5, {message: "Name is too short."}),
  email: z.string({required_error: "Email is required.", invalid_type_error: "Email must have @ and .com."}).email(),
  password: 
    z.string({required_error: "Password is required.", invalid_type_error: "Password must be a string."})
    .min(8, {message: "Password must be at least 8 characters long."}),
  confirmPassword: z.string({required_error: "Password is required.", invalid_type_error: "Password must be a string."})
    .min(8, {message: "Password must be at least 8 characters long."}),
  acceptTerms: z.literal(true, {errorMap: () => ({message: "You must accept the terms & conditions."})}),
}).refine((pass) => pass.password === pass.confirmPassword, {message: "Password don't match.", path: ["confirm"]})
export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

export const AuthSignInValidator = z.object({
  email: z.string({required_error: "Email is required.", invalid_type_error: "Email must have @ and .com."}).email(),
  password: 
    z.string({required_error: "Password is required.", invalid_type_error: "Password must be a string."})
    .min(8, {message: "Password must be at least 8 characters long."}),
})
export type TAuthSignInValidator = z.infer<typeof AuthSignInValidator>