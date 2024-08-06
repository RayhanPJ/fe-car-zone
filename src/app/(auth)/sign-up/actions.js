"use server"
import axios from "axios"
import { API_BASE_URL } from "@/constants/variables"
import { signUpSchema } from "./schema"

export const signUp = async (formData) => {
   try {
      const parsed = signUpSchema.parse(formData)
      const { username, email, password } = parsed

      const res = await axios.post(API_BASE_URL + "/api/auth/register", {
         username, email, password
      })

      if(res.status != 200){
         throw new Error("An error is occured")
      }

      return { success: true }
   } catch (e) {
      if (e instanceof Error){
         return { success: false, errors: e.response.data.error || "Sign up failed", server: true }
      }
      return { success: false, errors: e.errors, server: false }
   }
 }