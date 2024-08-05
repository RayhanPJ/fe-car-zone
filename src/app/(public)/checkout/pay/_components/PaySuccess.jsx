"use client"

import { Check } from "lucide-react"

const PaySuccess = () => {
  return (
   <>
      <div className="mx-auto text-center">
         <div className="p-7 bg-success rounded-full text-success-foreground max-w-fit border-[20px] border-green-200 mx-auto">
            <Check className="size-10" />
         </div>

         <h1 className="text-2xl capitalize font-bold mt-6">Payment Success</h1>
      </div>
   </>
  )
}

export default PaySuccess