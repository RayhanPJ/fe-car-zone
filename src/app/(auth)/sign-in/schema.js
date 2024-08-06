import { z } from "zod"

export const signInSchema = z.object({
   username: z.string({ required_error: "Username is required" })
      .min(5, { message: "Username must be at least 5 characters" }),
   password: z.string({ required_error: "password is required" })
      .min(5, { message: "password must be at least 5 characters" }),
})