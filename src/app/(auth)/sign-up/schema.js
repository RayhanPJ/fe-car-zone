import { z } from "zod"

export const signUpSchema = z.object({
   username: z.string({ required_error: "Username is required" })
      .min(5, { message: "Username must be at least 5 characters" }),
   email: z.string({ required_error: "Email is required" })
      .email({message: "This email is not valid"}),
   password: z.string({ required_error: "password is required" })
      .min(5, { message: "password must be at least 5 characters" }),
   confirmPassword: z.string({ required_error: "Confirm password is required" })
      .min(5, { message: "Confirm password must be at least 5 characters" }),
}).refine(input => input.password === input.confirmPassword, {
   message: "Password is not match",
   path: ["confirmPassword"]
})