"use client"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { MoveLeft } from "lucide-react"
import { useRouter } from "next/navigation"


export const BackButton = ({text = "Back", className, variant = "secondary",  ...props}) => {
   const router = useRouter()
   return (
      <>
         <Button 
            className={cn(`flex items-center gap-2 capitalize ${className}`)} 
            type="button"
            onClick={() => router.back()}
            {...props} 
            variant={variant}>
            <MoveLeft /> {text}
         </Button>
      </>
   )
}