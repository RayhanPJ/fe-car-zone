"use server"
import axios from "axios"
import { signInSchema } from "./schema"
import { cookies } from "next/headers"
import { API_BASE_URL } from "@/constants/variables"
import { getTokenExpiration } from "@/lib/token"

export const signIn = async (formData) => {
   try {
      const parsed = signInSchema.parse(formData)
      const { username, password } = parsed

      const res = await axios.post(API_BASE_URL + "/api/auth/login", {
         username, password
      })

      if(res.status != 200){
         throw new Error("An error is occured")
      }

      const { token } = res.data
      const me = await axios.get(API_BASE_URL + "/api/auth/me", {
         headers: {
            Authorization: `Bearer ${token}`
         }
      })

      console.log(me.data)

      cookies().set({
         name: "token",
         value: token,
         httpOnly: true,
         path: '/',
         expires: getTokenExpiration(token)
      })
      cookies().set({
         name: "role",
         value: me.data.data.role.role_name,
         httpOnly: true,
         path: '/',
         expires: getTokenExpiration(token)
      })

      return { success: true, data : { ...me.data.data, token}}
   } catch (e) {
      if (e instanceof Error){
         console.log(e)
         return { success: false, errors: e.response?.data?.error || "Sign in failed", server: true }
      }
      return { success: false, errors: e.errors, server: false }
   }
 }