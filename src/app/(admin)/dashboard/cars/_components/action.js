"use server"
import axios from "axios"
import { cookies } from "next/headers"
import { API_BASE_URL } from "@/constants/variables"
import { revalidatePath } from "next/cache"



export const deleteCar = async (id) => {
   const req  = await axios.delete(API_BASE_URL + "/api/cms/cars/"+id, {
      headers: {
         Authorization: `Bearer ${cookies().get("token")?.value}`
      }
   })

   if(req.status !== 200){
      console.error(req.data)
      return false
   }

   revalidatePath("/dashboard/cars")
   return true
} 