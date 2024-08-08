"use client"
import { useAuth } from "@/hooks/useAuth"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { isTokenExpired } from "@/lib/token"

const AuthProvider = () => {
   const { auth, clear } = useAuth()
   const pathname = usePathname()

   useEffect(() => {
      if(auth?.token){
         if(isTokenExpired(auth.token)){
            alert("Session expired, sign in to access your account again")
            clear()
         }
      }
   }, [auth, pathname])
  return null
}

export default AuthProvider