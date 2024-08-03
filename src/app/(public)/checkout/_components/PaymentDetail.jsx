"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { usePayment } from "./store"
import { Button } from "@/components/ui/button"

const PaymentDetail = () => {
   const { payment } = usePayment()

  return (
   <>
      <Accordion type="single" defaultValue="payment-detail" collapsible  className="border px-3">
         <AccordionItem value="payment-detail">
            <AccordionTrigger className="font-bold">Detail Pembayaran</AccordionTrigger>
            <AccordionContent>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
                  <span className="flex items-center gap-2 font-bold">Total Harga</span>
                  <span className="flex items-center gap-2 font-bold">Rp. 120.000.000</span>
               </div>
               <div className="flex flex-col md:flex-row items-start my-3 md:items-center justify-between mb-5">
                  {payment.paymentProvider &&
                  <>
                     <span className="flex items-center gap-2 font-bold">Pembayaran</span>
                     <span className="flex items-center gap-2 font-bold">{payment.paymentProvider}</span>
                  </>
                  }
               </div>
               {payment.paymentProvider &&
                  <Button>Bayar Sekarang</Button>
               }
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   </>
  )
}

export default PaymentDetail