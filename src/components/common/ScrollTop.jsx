"use client"

import { ArrowBigUpDash } from "lucide-react"
import { Button } from "../ui/button"
import { useLayoutEffect, useState } from "react"
import { cn } from "@/lib/utils"

const ScrollTop = () => {  
   const [show, setShow] = useState(false)

   const scrollHandler = () => {
      if (window.scrollY > 230){
         setShow(true)
      }else{
         setShow(false)
      }
   }

   const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
   }

   useLayoutEffect(() => {
      window.addEventListener("scroll", scrollHandler)

      return () => {
         window.removeEventListener("scroll", scrollHandler)
      }
   }, [])

  return (
   <Button 
      onClick={scrollToTop}
      className={cn(`fixed bottom-5 right-10 rounded-full transition duration-200`,
      !show ? "sr-only translate-y-5" : "-translate-y-5"
   )}>
      <ArrowBigUpDash />
   </Button>
  )
}

export default ScrollTop