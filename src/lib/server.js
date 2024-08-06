"use server"
import { cookies } from "next/headers"

export const signOutCookie = () => {
   cookies().delete("token")
   cookies().delete("role")
}