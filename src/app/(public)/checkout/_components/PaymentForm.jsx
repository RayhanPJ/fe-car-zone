"use client"
import { Card } from "@/components/ui/card"
import { usePayment } from "./store"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const PaymentForm = () => {
  const { payment, setPaymentProvider } = usePayment()
  
  const handleChange = (e) => {
    setPaymentProvider(e.target.value)

  }


  return (
  <>
   <div className="flex flex-col gap-3">
    {Array(4).fill(0).map((_,i) => (
        <label className="w-full cursor-pointer border group" key={i} htmlFor={i}>
          <input 
            name="payment-provider" 
            type="radio" 
            onChange={handleChange} 
            id={i} 
            value={`Bank ${i}`} className="sr-only" />
          <Card className={cn(`p-3 flex items-center gap-3`,
            (payment.paymentProvider == `Bank ${i}`) ? "group-hover:bg-primary/20 bg-primary/30" : "group-hover:bg-primary/10"
          )}>
            <Card className="flex items-center gap-3 p-3">
                <span className="font-bold">BCA</span>
            </Card>
            <span>Bank {i}</span>
          </Card>
        </label>
      ))}
   </div>
  </>
  )
}

export default PaymentForm