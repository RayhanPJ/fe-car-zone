"use client"

import { X } from "lucide-react"

const PaySuccess = () => {
  return (
   <>
      <div className="mx-auto text-center">
         <div className="p-7 bg-red-500 rounded-full text-destructive-foreground max-w-fit border-[20px] border-red-200 mx-auto">
            <X className="size-10" />
         </div>

         <h1 className="text-2xl capitalize font-bold mt-6">Payment Failed</h1>
      </div>
   </>
  )
}

export default PaySuccess