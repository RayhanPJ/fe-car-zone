"use client"
import { Card } from "@/components/ui/card"
import { usePayment } from "./usePayment"
import { Landmark } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

const banks = [
  {
    id: 1,
    name: "BCA",
    rek : "123123"
  },
  {
    id: 2,
    name: "BRI",
    rek : "0123321"
  },
  {
    id: 3,
    name: "BJB",
    rek : "7272727"
  },
]

const PaymentForm = () => {
  const { payment, setPaymentProvider, setNoRek, setTotalAmount } = usePayment()
  
  const handleChange = (e) => {
    const id = e.target.value
    console.log(banks.find(item => item.id == id).name)
    setPaymentProvider(banks.find(item => item.id == id).name)
    setNoRek(banks.find(item => item.id == id).rek)
    setTotalAmount(120_000_000)
  }

  return (
  <>
   <div className="flex flex-col gap-3">
    {banks.map((bank,i) => (
        <label className="w-full cursor-pointer border group" key={i} htmlFor={bank.id}>
          <input 
            name="payment-provider" 
            type="radio" 
            onChange={handleChange} 
            id={bank.id} 
            value={bank.id} 
            className="sr-only" />
          <Card className={cn(`p-3 flex items-center gap-3`,
            (payment.paymentProvider == bank.name) ? "group-hover:bg-primary/20 bg-primary/30" : "group-hover:bg-primary/10"
          )}>
            <Card className="flex items-center gap-3 p-3">
              <Landmark />
            </Card>
            <span>{bank.name}</span>
          </Card>
        </label>
      ))}
   </div>
  </>
  )
}

export default PaymentForm